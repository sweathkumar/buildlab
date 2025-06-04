import React from 'react';

const FeaturedProjectSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">Featured Project</h2>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hover-card">
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-xl flex items-center justify-center">
        <span className="text-white text-base sm:text-lg font-semibold">MoodPlay</span>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">MoodPlay: AI-Driven Music Discovery</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4">
          Discover Spotify songs tailored to your mood in seconds, powered by AI. A seamless blend of technology and emotion, designed to elevate your music experience.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm">Explore Project</button>
      </div>
    </div>
  </div>
);

export default FeaturedProjectSection;