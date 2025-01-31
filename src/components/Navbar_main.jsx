import React, { useState, useEffect, useRef } from 'react';

const Navbar_main = () => {
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
        <button onClick={toggleDropdown} className="mr-6 2xl:mr-12 mt-2">
          <img src="/lines.png" alt="Icon" className="h-[2rem] md:h-[3rem] 2xl:h-[4rem]" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 w-64 3xl:w-96 h-auto rounded text-white shadow-lg z-50 bg-[#194b92]">
            <a href="#clients" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Clients</a>
            <a href="#services" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Services</a>
            <a href="#services" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Software</a>
            <a href="#footer" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar_main;