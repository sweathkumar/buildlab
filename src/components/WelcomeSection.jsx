import React from 'react';

const WelcomeSection = () => (
  <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-4 sm:p-6 shadow-md">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome to My Build Lab</h1>
    <p className="text-gray-600 text-xs sm:text-sm mb-4">
      A product-minded developer crafting practical tools with code and AI.
    </p>
    <p className="text-gray-600 text-xs sm:text-sm mb-4">
      Here, I don’t just experiment — I ship. Whether it’s a resume generator for job seekers or automation tools for digital earners, I build apps that deliver value from day one.
    </p>
    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm">See me..!</button>
  </div>
);

export default WelcomeSection;