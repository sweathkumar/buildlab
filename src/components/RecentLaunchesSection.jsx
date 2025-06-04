import React from 'react';

const RecentLaunchesSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Launches</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl p-4 shadow-md flex items-center space-x-4 hover-card">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
          <span className="text-white text-sm sm:text-base font-semibold">MoodPlay</span>
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold">MoodPlay</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Get Spotify songs based on your mood within a second using AI</p>
          <button className="bg-black text-white px-3 py-1 rounded-full mt-2 hover:bg-gray-800 flex items-center space-x-1 text-xs sm:text-sm">
            <span>View App</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-md flex items-center space-x-4 hover-card">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
          <span className="text-white text-sm sm:text-base font-semibold">ResumeGen</span>
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold">AI Resume Generator</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Get Resume based on your mood within a second using AI</p>
          <button className="bg-black text-white px-3 py-1 rounded-full mt-2 hover:bg-gray-800 flex items-center space-x-1 text-xs sm:text-sm">
            <span>View App</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default RecentLaunchesSection;