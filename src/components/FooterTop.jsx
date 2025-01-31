import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer id="footer" className="border shadow-sm title-bg-image">
        <div className="flex md:flex-row justify-between py-8 px-8 md:px-32">
            {/* <div> */}
                <div className="flex-1 text-xs 2xl:text-xl">
                    <h1 className="font-bold md:text-xl 2xl:text-3xl 3xl:text-4xl">Location</h1>
                    <div className="mb-4 md:mb-0 md:py-4">
                        <h2>North America:</h2>
                        <p>Toronto</p>
                        <p>M5E 1J8</p>
                        <p>Canada</p>
                        <br />
                        <h2>Europe:</h2>
                        <p>Bath</p>
                        <p>BA1 1BP</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="flex-1 text-xs md:block hidden 2xl:text-xl">
                <h1 id="navigate" className="font-bold md:text-xl 2xl:text-3xl 3xl:text-4xl ">Navigate</h1>
                <div className="mb-4 md:mb-0 md:py-4 flex flex-col">
                        <a href="#home" className="hover:underline mb-2">Home</a>
                        <a href="#clients" className="hover:underline mb-2">Clients</a>
                        <a href="#services" className="hover:underline mb-2">Services</a>
                        <a href="#services" className="hover:underline">Software</a>
                    </div>
                </div>
                <div className="flex-1 text-xs 2xl:text-xl">
                <h1 className="font-bold md:text-xl 2xl:text-3xl 3xl:text-4xl">Legal</h1>
                <div className="mb-4 md:mb-0 md:py-4 flex flex-col">
                        <a href="/privacy" className="hover:underline mb-2">Privacy Policy</a>
                        <a href="/cookies" className="hover:underline mb-2">Cookie Policy</a>
                        <a href="/terms" className="hover:underline">Terms and Conditions</a>
                    </div>
                </div>
            {/* </div> */}
            
            <div className="flex-1">
                {/* <h2 className="text-xs mb-4">Contact us to unlock all the possibilities of your data.</h2> */}
                <h1 className="font-bold text-xs md:text-xl pb-2 md:pb-4 2xl:text-3xl 3xl:text-4xl">Contact</h1>
                <form className="flex flex-col gap-2 text-xs 2xl:text-xl" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 p-1 xl:p-4 rounded w-full h-8"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 p-1 xl:p-4 rounded w-full h-8"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Message"
                        className="border border-gray-300 p-1 xl:p-4 rounded w-full h-16"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#194b92] border border-[#194b92] text-white py-1 px-2 rounded hover:bg-white hover:text-[#194b92] hover:border-[#194b92]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </footer>
  );
};

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
        <button onClick={toggleDropdown} className="mr-6 2xl:mr-12 mt-2">
          <img src="/lines.png" alt="Icon" className="h-[2rem] md:h-[3rem] 2xl:h-[4rem]" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 w-64 3xl:w-96 h-auto rounded text-white shadow-lg z-50 bg-[#194b92]">
            <Link to="/#clients" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Clients</Link>
            <Link to="/#services" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Services</Link>
            <Link to="/#software" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Software</Link>
            <Link to="/#footer" className="border 3xl:text-3xl border-[#123b73] 2xl:p-4 block px-4 py-2 hover:bg-[#123b73]">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Footer;
export { Navbar };