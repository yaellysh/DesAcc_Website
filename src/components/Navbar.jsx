// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    console.log("Search clicked.");
    setShowSearch(!showSearch); // toggle the search bar visibility
  };

  return (
    <header className="flex justify-between items-center md:p-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-4">
        <img src="/DesAcc_logo_rgb_horizontal_with line_delft blue.png" alt="Qunantitate logo" className="h-12" />
      </div>

      <div className="relative flex items-center gap-2">
        <button
          onClick={toggleSearch}
          className="p-2 bg-transparent border-none focus:outline-none"
        >
          <img
            src="/search.png" 
            alt="Search"
            className="w-6 h-6"
          />
        </button>

        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search..."
          className={`p-2 border rounded-md border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            showSearch ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{
            transition: 'width 0.3s ease, opacity 0.3s ease',
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;