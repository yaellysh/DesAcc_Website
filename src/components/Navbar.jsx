import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white border shadow-sm">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="/Whoosh Teal (RGB).png" alt="Icon" className="mx-2 md:mx-4 h-[2rem] md:h-[3rem] 2xl:h-[4rem] xl:bg-green-100 2xl:bg-blue-100 3xl:bg-red-100 4xl:bg-yellow-100" />
          <img src="/DesAcc_logo.png" alt="Desacc title" className="h-[1.5rem] md:h-[3rem] 2xl:h-[4rem]" />
        </a>
      </div>
      <div className="relative">
        <button onClick={toggleDropdown} className="mr-6 text-[3rem] mb-2 text-center">
          ≡
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 w-64 h-auto rounded text-white shadow-lg z-50 bg-[#194b92]">
            <a href="#clients" className="border border-[#123b73] block px-4 py-2 hover:bg-[#123b73]">Clients</a>
            <a href="#services" className="border border-[#123b73] block px-4 py-2 hover:bg-[#123b73]">Services</a>
            <a href="#services" className="border border-[#123b73] block px-4 py-2 hover:bg-[#123b73]">Software</a>
            <a href="#footer" className="border border-[#123b73] block px-4 py-2 hover:bg-[#123b73]">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

// Normal screen: xl
// Larger normal screen: 2xl
// Monitor screen: 3xl
// Large monitor screen: 4xl
// xl:bg-green-100 2xl:bg-blue-100 3xl:bg-red-100 4xl:bg-yellow-100
