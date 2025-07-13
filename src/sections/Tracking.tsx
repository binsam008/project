import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxGMQq97qDoc7BNb2UxDPhEf5VcTBGkku2eMozDTvd9bWBAa3P2HCuEyTwiTw8gSy_4/exec";

// Manual date formatter for MM/DD/YYYY → DD/MM/YYYY
const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  const parts = dateString.split("/");
  if (parts.length !== 3) return "N/A";

  const [month, day, year] = parts;
  return `${day}/${month}/${year}`;
};

const TrackPackage = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) return alert("Please enter a Tracking ID");

    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${scriptURL}?id=${trackingId.trim()}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <section id="tracking" className="py-20 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-4 max-w-xl">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            Track Your Shipment
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Enter your tracking ID below to view status and updates.
          </p>
        </motion.div>

        {/* Input and Button */}
        <motion.div
          className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <input
              className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded text-gray-900 dark:text-white placeholder-gray-400"
              placeholder="Enter Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 dark:bg-purple-800 dark:hover:bg-purple-600 text-white px-4 py-2 rounded flex items-center"
              onClick={handleTrack}
              disabled={loading}
            >
              <Search className="w-5 h-5 mr-1" />
              {loading ? "Tracking..." : "Track"}
            </button>
          </div>

          {/* Result Display */}
          {result && (
            <div className="mt-6 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
              {result.notFound ? (
                <p className="text-red-500 font-medium">Tracking ID not found.</p>
              ) : (
                <>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    <strong>ID:</strong> {result.id}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Customer:</strong> {result.name}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Status:</strong> {result.status}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    <strong>Updated At:</strong> {formatDate(result.updatedAt)}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Detail:</strong> {result.detail || "N/A"}
                  </p>
                </>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TrackPackage;
