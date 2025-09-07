import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { BookOpen, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const unpatchedAssetsData = [
    { name: "Windows", value: 30 },
    { name: "Linux", value: 25 },
    { name: "Other OS", value: 45 },
  ];

  const unresolvedIncidentsData = [
    { name: "Firewall", value: 15 },
    { name: "Windows", value: 25 },
    { name: "O365", value: 18 },
  ];

  const weakPointsData = [
    { name: "Patch", value: 40 },
    { name: "SOC", value: 25 },
    { name: "VAPT", value: 35 },
  ];

  const weakAppsData = [
    { name: "HR Management", vulnerability: 5, soc: 10 },
    { name: "CRM", vulnerability: 4, soc: 2 },
    { name: "Websites", vulnerability: 10, soc: 3 },
  ];

  const navigate = useNavigate();

  const COLORS = {
    windows: "#3b82f6",
    linux: "#22c55e",
    otheros: "#facc15",
    firewall: "#06b6d4",
    o365: "#f97316",
    patch: "#ef4444",
    soc: "#eab308",
    vapt: "#14b8a6",
    vulnerability: "#3b82f6",
    socBar: "#ef4444",
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-300 flex justify-between items-center">
        <Link to="/result">
          <div className="px-3 py-1 bg-blue-200 rounded text-sm font-medium">
            Knowledge Results
          </div>
        </Link>

        <div className="flex gap-3">
          <button className="px-3 py-1 bg-gray-200 rounded flex items-center gap-1 text-sm">
            <BookOpen className="w-4 h-4" />
            Summary
          </button>
          <button
            onClick={() => navigate("/chat")}
            className="px-3 py-1 bg-gray-200 rounded flex items-center gap-1 text-sm"
          >
            <Zap className="w-4 h-4" />
            GPT
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Unpatched Assets */}
        <div className="bg-white border border-gray-300 rounded p-4">
          <h3 className="text-center font-semibold mb-3 text-sm">
            Unpatched Assets (30 Days)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={unpatchedAssetsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  isAnimationActive={false}
                >
                  {unpatchedAssetsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name.toLowerCase()]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SOC Incidents */}
        <div className="bg-white border border-gray-300 rounded p-4">
          <h3 className="text-center font-semibold mb-3 text-sm">
            Unresolved SOC Incidents
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={unresolvedIncidentsData}>
                <XAxis dataKey="name" tick={{ fill: "#374151" }} />
                <YAxis tick={{ fill: "#374151" }} />
                <Bar dataKey="value" isAnimationActive={false}>
                  {unresolvedIncidentsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name.toLowerCase()]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weak Points */}
        <div className="bg-white border border-gray-300 rounded p-4">
          <h3 className="text-center font-semibold mb-3 text-sm">Weak Points</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={weakPointsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  isAnimationActive={false}
                >
                  {weakPointsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name.toLowerCase()]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weak Apps */}
        <div className="bg-white border border-gray-300 rounded p-4">
          <h3 className="text-center font-semibold mb-3 text-sm">
            Weak Apps & Softwares
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weakAppsData}>
                <XAxis dataKey="name" tick={{ fill: "#374151" }} />
                <YAxis tick={{ fill: "#374151" }} />
                <Bar
                  dataKey="vulnerability"
                  fill={COLORS.vulnerability}
                  isAnimationActive={false}
                />
                <Bar
                  dataKey="soc"
                  fill={COLORS.socBar}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
