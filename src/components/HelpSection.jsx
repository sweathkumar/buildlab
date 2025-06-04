import React from 'react';

const HelpSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">Help & Support</h2>
    <p className="text-gray-600 text-xs sm:text-sm mb-4">
      Worked for long days and nights, finally ready for production. Apps and sites are in their initial stage and may face issues. Feel free to share your experience to help me improve for the future.
    </p>
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <textarea className="w-full h-24 p-2 border rounded-lg text-xs sm:text-sm text-gray-500 focus:border-black outline-none" placeholder="write your feedback here..."></textarea>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 space-y-2 sm:space-y-0">
        <span className="text-gray-500 text-xs flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
          * Anonymous Feedback
        </span>
        <div className="space-x-2">
          <button className="text-gray-500 text-xs sm:text-sm">clear</button>
          <button className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 text-xs sm:text-sm">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

export default HelpSection;