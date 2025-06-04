import React from 'react';

const Navbar = ({ setPage, currentPage, setShowChat }) => (
  <nav className="flex justify-between items-center p-4 text-sm">
    <div className="text-lg font-bold text-black">My Build Lab</div>
    <div className="flex space-x-4 sm:space-x-6">
      {['Home', 'Overview', 'Upcoming', 'Social', 'About'].map(page => (
        <button
          key={page}
          onClick={() => setPage(page.toLowerCase())}
          className={`hover:underline ${currentPage === page.toLowerCase() ? 'underline font-semibold' : ''}`}
        >
          {page}
        </button>
      ))}
      <button 
        className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 text-sm"
        onClick={() => setShowChat(true)}
      >
        Sweet AI
      </button>
    </div>
  </nav>
);

export default Navbar;