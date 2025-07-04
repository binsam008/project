import  { useState } from "react";

const scriptURL = "https://script.google.com/macros/s/AKfycbxPZEB109atLFFaYE6ZnJS-SbKrXV9oHPERfImdVjFrvfN-g_1fmbQteJl7L0Y9-ws/exec";

const AdminUpdate: React.FC = () => {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const updateStatus = async () => {
    if (!id || !status) return alert("All fields required");

    const payload = {
      id,
      status,
      updatedAt: new Date().toLocaleString(),
      update: true,
    };

    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const text = await res.text();
    setMessage(text);
    setId("");
    setStatus("");
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">🔧 Admin: Update Status</h2>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded space-y-4">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700"
          placeholder="Tracking ID"
        />
        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700"
          placeholder="New Status"
        />
        <button onClick={updateStatus} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 w-full">
          Update
        </button>
        {message && <p className="text-center text-yellow-400 text-sm">{message}</p>}
      </div>
    </section>
  );
};

export default AdminUpdate;
