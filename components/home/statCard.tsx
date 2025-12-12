// components/ui/StatCard.tsx
import React from "react";

const StatCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
      {value}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

export default StatCard;