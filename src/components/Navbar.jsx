import React, { useEffect } from 'react';

const Navbar = () => {
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
          <img src="/DesAcc_logo.png" alt="Desacc title" className="h-[1.5rem] md:h-[2.5rem] 3xl:h-[3rem]" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;