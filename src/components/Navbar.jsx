// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(false);

  // const toggleSearch = () => {
  //   setShowSearch(!showSearch); 
  // };

  return (
    <header className="flex justify-between items-center md:p-4 bg-white border shadow-sm">
      <div className="flex items-center">
        {/* Single line logo */}
        <img src="/DesAcc_logo_rgb_horizontal_with line_delft blue1.png" alt="Desacc title" className="md:h-[3rem] md:ml-28" />

      </div>

      {/* <div className="relative flex items-center gap-2">
        <button
          onClick={toggleSearch}
          className="pr-16 bg-transparent border-none focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-500"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>


        <input
          type="text"
          placeholder="Search..."
          className={`p-2 border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            showSearch ? 'w-60 rounded opacity-100' : 'w-0 opacity-0'
          }`}
          style={{
            transition: 'width 0.3s ease, opacity 0.3s ease',
          }}
        />
      </div> */}
    </header>
  );
};

export default Navbar;