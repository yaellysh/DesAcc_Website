import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-white border shadow-sm">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="/Whoosh Teal (RGB).png" alt="Icon" className="mx-2 md:mx-4 2xl:ml-8 h-[2rem] md:h-[3rem] 2xl:h-[4rem]" />
          <img src="/DesAcc_logo.png" alt="Desacc title" className="h-[1.5rem] md:h-[3rem] 2xl:h-[4rem] 3xl:h-[5rem]" />
        </a>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="mr-6 2xl:mr-12 text-[3rem] 2xl:text-[4rem] mb-2 text-center">
          ≡
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 w-64 2xl:w-96 h-auto rounded text-white shadow-lg z-50 bg-[#194b92]">
            <a href="#clients" className="border 2xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Clients</a>
            <a href="#services" className="border 2xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Services</a>
            <a href="#services" className="border 2xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Software</a>
            <a href="#footer" className="border 2xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Contact Us</a>
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
