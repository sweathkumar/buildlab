import React from 'react';

const StatsSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">My Impact</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { value: "5+", label: "Projects Launched" },
        { value: "10K+", label: "Users Impacted" },
        { value: "2+", label: "Years of Experience" }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 shadow-md text-center hover-card">
          <h3 className="text-lg sm:text-xl font-bold text-black">{stat.value}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default StatsSection;