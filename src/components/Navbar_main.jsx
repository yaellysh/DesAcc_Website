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
          <div className="absolute right-0 w-64 3xl:w-80 h-auto text-white border border-[#123b73] shadow-lg z-50 ">
            <a href="#clients" className=" 3xl:text-3xl block px-4 py-2 bg-[#194b92] hover:bg-transparent hover:text-[#194b92]">Clients</a>
            <a href="#services" className=" 3xl:text-3xl block px-4 py-2 bg-[#194b92] hover:bg-transparent hover:text-[#194b92]">Services</a>
            <a href="#services" className=" 3xl:text-3xl block px-4 py-2 bg-[#194b92]  hover:bg-transparent hover:text-[#194b92]">Software</a>
            <a href="#footer" className=" 3xl:text-3xl block px-4 py-2 bg-[#194b92] hover:bg-transparent hover:text-[#194b92]">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar_main;