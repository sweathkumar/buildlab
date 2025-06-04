import React from 'react';

const UpcomingPage = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">Upcoming Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        {
          title: "AI Task Automator",
          description: "An AI-powered tool to automate repetitive tasks, saving you time and boosting productivity.",
          status: "In Development"
        },
        {
          title: "Smart Budget Tracker",
          description: "A minimalist app to track expenses and savings with AI-driven insights.",
          status: "Planning Stage"
        }
      ].map((project, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover-card">
          <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">{project.description}</p>
          <p className="text-gray-500 text-xs font-semibold">{project.status}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingPage;