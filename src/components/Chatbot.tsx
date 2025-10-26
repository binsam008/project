import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Loader2 } from "lucide-react";

// --- Groq API Configuration and Helpers ---
// FIX FOR VS CODE/VITE: Read key from VITE environment variables.
const getApiConfig = () => {
    // Assuming you have defined VITE_GROQ_API_KEY in your .env file
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    // Groq API Endpoint
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";
    
    // Groq uses the standard OpenAI chat format, but requires the key in the Authorization header.
    return {
        API_URL,
        apiKey,
        // FIX: Updated decommissioned model (llama3-8b-8192) to the supported Llama 3.1
        model: "llama-3.1-8b-instant", 
    };
};

const MAX_RETRIES = 3;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "How can I track my shipment?",
  "What are your standard shipping services?",
  "Tell me about customs documentation.",
  "What defines WellReach's commitment to excellence?",
];

// Helper function for exponential backoff delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const callGroqApi = async (history: Message[], newMessage: Message) => {
  const { API_URL, apiKey, model } = getApiConfig();

  // Exit early if the key is missing in the local environment
  if (!apiKey) {
    throw new Error("API Key not found. Please set VITE_GROQ_API_KEY in your .env file.");
  }


  // Groq uses the standard OpenAI format roles (user, assistant, system)
  const groqMessages = [
    {
      role: "system",
      content: `
        You are the helpful WellReach Logistics Assistant. Be **highly concise** and use **short sentences** to answer questions. Use ONLY the following company data to answer all user questions about logistics, shipping, services, and operations. If a question cannot be answered with the provided data (e.g., specific tracking IDs or real-time rates), state that you cannot provide that information and recommend contacting the team via phone or email.
        
        --- COMPANY DATA ---
        COMPANY: Well Reach Logistics Services (WellReach)
        LOCATION & CONTACT:
        - Bahrain: #2, Building 1698, Block 608, Road 845, Wadiyan, Sitra, Bahrain. Call: +973 3825 1155. Email: info.bh@wellreachlogisticsbh.com
        - India (Bangalore, Cochin, Calicut locations also listed on the site).
        - General Email: info.bh@wellreachlogisticsbh.com
        - General Phone: +973 38251155

        CORE VALUES:
        - Excellence: Committed to delivering exceptional service quality.
        - Customer Focus: Dedicated to understanding and meeting client needs.
        - Integrity: Operating with transparency and ethical standards.

        SERVICES OFFERED:
        - Air Freight: Fast and reliable air services globally.
        - Sea Freight: Economical and efficient sea freight for bulk cargo.
        - Road Freight: Safe and timely road freight services.
        - Customs Clearance: Expert clearance for smooth import/export.
        - Ministry Approvals: Assistance with necessary permits.
        - Vehicle Import & Export: Specialized shipping and documentation for vehicles.
        - Project Cargo: Handling of oversized and complex cargo.
        - Transportation: Comprehensive transport solutions for all cargo types.
        - Express Delivery: Time-sensitive solutions.
        - Warehousing & Distribution: State-of-the-art facilities for secure storage.

        SHIPMENT TRACKING:
        - Tracking is available. Once processed, clients receive tracking info to monitor cargo status in real-time.

        OUR PROCESS:
        1. Before Journey: Comprehensive client profiling, discovery phase, assessment of needs, and definition of service scope.
        2. During Journey: Detailed operational assessment, including facility visits, equipment evaluation, and workforce review.
        3. After Journey: Development of tailored logistics solutions to enhance efficiency, optimize routes, and improve the client's business model.
        ---
      `,
    },
    // Map existing history
    ...history.map(msg => ({
        role: msg.role,
        content: msg.content,
    })),
    // Add the new user message
    { role: "user", content: newMessage.content }
  ];

  const payload = {
    model: model,
    messages: groqMessages,
    // Decreased temperature slightly (was 0.7) to 0.6 for more factual, less verbose responses
    temperature: 0.6, 
  };

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
          const response = await fetch(API_URL, {
              method: 'POST',
              headers: { 
                  'Content-Type': 'application/json',
                  // Groq requires the key in the Authorization header
                  'Authorization': `Bearer ${apiKey}`, 
              },
              body: JSON.stringify(payload)
          });

          if (response.status === 429 && attempt < MAX_RETRIES - 1) {
              const waitTime = Math.pow(2, attempt) * 1000 + (Math.random() * 1000); // Add jitter
              await delay(waitTime);
              continue; 
          }

          if (!response.ok) {
              const errorBody = await response.json();
              throw new Error(`Groq API call failed with status ${response.status}: ${errorBody.error?.message || 'Unknown error'}`);
          }

          const result = await response.json();
          const text = result.choices?.[0]?.message?.content;
          return text;

      } catch (error) {
          if (attempt === MAX_RETRIES - 1) {
              throw error; 
          }
          const waitTime = Math.pow(2, attempt) * 1000 + (Math.random() * 500);
          await delay(waitTime);
      }
  }
  throw new Error("Failed to get response after multiple retries.");
};


const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm the WellReach assistant. I can answer questions about logistics, services, and tracking. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handler for text input submission
  const handleSend = async (messageContent?: string) => {
    const content = messageContent || input.trim();
    if (!content || loading) return;

    const userMessage: Message = { role: "user", content };
    
    if (!messageContent) {
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
    } else {
        setMessages((prev) => [...prev, userMessage]);
    }

    setLoading(true);

    try {
      // Use callGroqApi instead of callGeminiApi
      const botReply = await callGroqApi(messages, userMessage); 

      const replyContent = botReply || "Sorry, I didn’t get that. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: replyContent }]);

    } catch (error) {
      console.error("Groq API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          // Update the error message for Groq context
          content: `⚠️ Sorry, there was an issue connecting to the Groq server. If you are developing locally, ensure VITE_GROQ_API_KEY is set correctly.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (question: string) => {
    if (loading) return;
    handleSend(question);
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-3 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-40">
          
          {/* Header */}
          <div className="bg-orange-600 dark:bg-orange-500 text-white p-3 font-semibold text-lg flex justify-between items-center">
            WellReach Assistant
          </div>

          {/* Messages and Suggestions */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[85%] shadow-sm text-sm ${
                  msg.role === "assistant"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start"
                    : "bg-orange-100 dark:bg-orange-700/50 text-gray-900 dark:text-white self-end ml-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
            
            {loading && (
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-400 p-3 rounded-xl self-start flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin" />
                <span>Assistant is typing...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />

            {/* Suggested Questions (Popups) */}
            {messages.length <= 2 && !loading && (
              <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-700/50 space-y-2">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Quick Questions:</p>
                {suggestedQuestions.map((q, qIndex) => (
                  <button
                    key={qIndex}
                    onClick={() => handleSuggestionClick(q)}
                    className="w-full text-left p-2 rounded-lg text-sm bg-orange-50 dark:bg-gray-700 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-600 transition truncate"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 p-2 text-sm outline-none bg-transparent dark:text-white"
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={() => handleSend()}
              className={`p-2 rounded-full transition ${loading ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:text-orange-600 dark:hover:text-orange-400'}`}
              disabled={loading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
