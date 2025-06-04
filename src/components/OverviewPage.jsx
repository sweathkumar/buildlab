import React from 'react';

const OverviewPage = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h1>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">My Journey</h2>
      <p className="text-gray-600 text-xs sm:text-sm mb-4">
        At My Build Lab, I focus on creating tools that solve real-world problems with a blend of code and AI. My journey started with a passion for building practical applications, and over the years, I've honed my skills in React, JavaScript, and AI integration to deliver impactful solutions.
      </p>
      <p className="text-gray-600 text-xs sm:text-sm">
        From MoodPlay to AI Resume Generator, my projects are designed to provide value from day one, combining minimal design with maximum functionality.
      </p>
    </div>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">My Process</h2>
      <ul className="text-gray-600 text-xs sm:text-sm space-y-2">
        <li><strong>Ideation:</strong> Identify real user problems and brainstorm AI-driven solutions.</li>
        <li><strong>Design:</strong> Create clean, intuitive interfaces with a focus on user experience.</li>
        <li><strong>Development:</strong> Build scalable, efficient applications using modern technologies.</li>
        <li><strong>Launch & Iterate:</strong> Ship quickly, gather feedback, and continuously improve.</li>
      </ul>
    </div>
  </div>
);

export default OverviewPage;