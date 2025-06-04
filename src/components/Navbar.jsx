import React from "react";
const { useState } = React;

const Navbar = ({ setPage, currentPage, setShowChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (page) => {
    setPage(page.toLowerCase());
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="flex justify-between items-center p-4 text-sm text-gray-800 bg-white shadow-md">
      {/* Brand */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">🧬 Build Labs</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
        {["Home", "Overview", "Upcoming", "Social", "About"].map((page) => (
          <button
            key={page}
            onClick={() => handleNavClick(page)}
            className={`hover:underline ${
              currentPage === page.toLowerCase()
                ? "underline font-semibold"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 text-sm transition-transform duration-200 hover:scale-105"
          onClick={() => {
            setShowChat(true);
            setIsMenuOpen(false);
          }}
        >
          Sweet AI
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center sm:hidden">
        <button
          className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 text-sm mr-3 transition-transform duration-200 hover:scale-105"
          onClick={() => {
            setShowChat(true);
            setIsMenuOpen(false);
          }}
        >
          Sweet AI
        </button>
        <button onClick={toggleMenu} className="p-2 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 sm:hidden z-50">
          {["Home", "Overview", "Upcoming", "Social", "About"].map((page) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              className={`hover:underline ${
                currentPage === page.toLowerCase()
                  ? "underline font-semibold"
                  : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
