import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, AlertTriangle, Zap } from "lucide-react";

const Result = () => {
  const navigate = useNavigate();

  // Mock data for the assessment results
  const assessmentStats = [
    { label: "Correct", value: 65, color: "bg-green-500", icon: <Check className="w-4 h-4 text-white" /> },
    { label: "Incorrect", value: 20, color: "bg-red-500", icon: <X className="w-4 h-4 text-white" /> },
    { label: "Don't Know", value: 15, color: "bg-purple-500", icon: <AlertTriangle className="w-4 h-4 text-white" /> },
  ];

  const securityCategories = [
    { name: "Human Layer", vulnerability: "success", soc: "error", hardening: "warning" },
    { name: "Perimeter Security", vulnerability: "success", soc: "error", hardening: "warning" },
    { name: "Network Security", vulnerability: "warning", soc: "error", hardening: "warning" },
    { name: "Endpoint Security", vulnerability: "success", soc: "error", hardening: "warning" },
    { name: "Application Security", vulnerability: "success", soc: "error", hardening: "warning" },
  ];

  const statusColors: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check className="w-4 h-4 text-white" />;
      case "error":
        return <X className="w-4 h-4 text-white" />;
      case "warning":
        return <Zap className="w-4 h-4 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-gray-300 flex items-center justify-between">
        <div className="flex items-center space-x-3 bg-purple-100 px-4 py-2 rounded-lg border border-purple-300">
          <span className="text-purple-700 font-medium">Knowledge Assessment Results</span>
        </div>

        <div className="flex space-x-4">
          {assessmentStats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-4 h-4 ${stat.color} rounded-full flex items-center justify-center`}>{stat.icon}</div>
              <div className="text-sm">
                <div className="font-semibold">{stat.value}%</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔙 Back Button */}
      <div className="p-6">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg border border-purple-300 text-sm font-medium transition-colors duration-200 text-purple-700"
        >
          ⬅ Back to Dashboard
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="p-6 flex justify-center space-x-4 mb-6">
        <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300 text-sm font-medium">
          All Questions
        </button>
        <button className="px-6 py-2 bg-purple-100 hover:bg-purple-200 rounded-full border border-purple-300 text-sm font-medium flex items-center space-x-2 text-purple-700">
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-3 h-3 text-white" />
          </div>
          <span>Vulnerability</span>
        </button>
        <button className="px-6 py-2 bg-orange-100 hover:bg-orange-200 rounded-full border border-orange-300 text-sm font-medium flex items-center space-x-2 text-orange-700">
          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <X className="w-3 h-3 text-white" />
          </div>
          <span>SOC</span>
        </button>
        <button className="px-6 py-2 bg-blue-100 hover:bg-blue-200 rounded-full border border-blue-300 text-sm font-medium flex items-center space-x-2 text-blue-700">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span>Hardening</span>
        </button>
      </div>

      {/* Security Categories */}
      <div className="p-6 space-y-6">
        {securityCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-gray-800 font-medium">{category.name}</h3>

              <div className="flex items-center space-x-4">
                {[
                  { type: "Vulnerability", status: category.vulnerability },
                  { type: "SOC", status: category.soc },
                  { type: "Hardening", status: category.hardening },
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg border flex items-center space-x-2 text-sm font-medium ${
                      item.status === "success"
                        ? "bg-green-100 border-green-300 text-green-700"
                        : item.status === "error"
                        ? "bg-red-100 border-red-300 text-red-700"
                        : "bg-yellow-100 border-yellow-300 text-yellow-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${statusColors[item.status]}`}
                    >
                      {getStatusIcon(item.status)}
                    </div>
                    <span>{item.type}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
