import React from 'react';

const NewsletterSection = () => (
  <div className="col-span-1 md:col-span-3">
    <h2 className="text-lg sm:text-xl font-semibold mb-4">Stay Updated</h2>
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md text-center">
      <p className="text-gray-600 text-xs sm:text-sm mb-4">Subscribe to my newsletter for updates on new projects, tips, and more!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
        <input 
          type="email" 
          className="w-full sm:w-64 p-2 border rounded-lg text-xs sm:text-sm text-gray-500 focus:border-black outline-none" 
          placeholder="Enter your email"
        />
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm">Subscribe</button>
      </div>
    </div>
  </div>
);

export default NewsletterSection;