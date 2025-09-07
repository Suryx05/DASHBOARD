import React, { useState } from "react";
import { BookOpen, MessageCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [messages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can I assist you with your cybersecurity needs today?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Hi there, can you help me understand our current cybersecurity posture?",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      sender: "bot",
      text: "Of course! I have an overview of your cybersecurity framework. Do you want a summary or more details?",
      timestamp: "10:32 AM",
    },
  ]);

  return (
    <div className="min-h-screen bg-white text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Summary</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 px-3 py-2 rounded">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Chat</span>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded max-w-xs text-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text}
              <div className="text-xs text-gray-300 mt-1">{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-gray-700 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm text-white placeholder-gray-400"
        />
        <button className="bg-green-600 px-4 py-2 rounded text-sm">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
