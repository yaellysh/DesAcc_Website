import React from 'react';

const Navbar = () => (
  <header className="flex justify-between items-center bg-white border shadow-sm">
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img src="/Whoosh Teal (RGB).png" alt="Icon" className="mx-2 md:mx-4 h-[2rem] md:h-[3rem] 2xl:h-[4rem] xl:bg-green-100 2xl:bg-blue-100 3xl:bg-red-100 4xl:bg-yellow-100" />
        <img src="/DesAcc_logo.png" alt="Desacc title" className="h-[1.5rem] md:h-[3rem] 2xl:h-[4rem]" />
      </a>
    </div>
  </header>
);

export default Navbar;

// Normal screen: xl
// Larger normal screen: 2xl
// Monitor screen: 3xl
// Large monitor screen: 4xl
// xl:bg-green-100 2xl:bg-blue-100 3xl:bg-red-100 4xl:bg-yellow-100
