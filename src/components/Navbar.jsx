import React from 'react';

const Navbar = () => (
  <header className="flex justify-between items-center bg-white border shadow-sm">
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img src="/Whoosh Teal (RGB).png" alt="Icon" className="mx-2 md:mx-4 h-[2rem] md:h-[3rem]" />
        <img src="/DesAcc_logo_rgb_horizontal_with line_delft blue1.png" alt="Desacc title" className="h-[1.5rem] md:h-[3rem]" />
      </a>
    </div>
  </header>
);

export default Navbar;
