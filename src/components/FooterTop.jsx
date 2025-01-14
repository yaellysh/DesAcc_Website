import React, { useState } from 'react';
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
        <div className="container flex  md:flex-row justify-between py-8 px-4 md:pl-32">
            {/* <div> */}
                <div className="flex-1 text-xs">
                    <h1 className="font-bold md:text-xl">Location</h1>
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
                <div className="flex-1 text-xs md:block hidden">
                <h1 id="navigate" className="font-bold md:text-xl ">Navigate</h1>
                <div className="mb-4 md:mb-0 md:py-4 flex flex-col">
                        <a href="#home" className="hover:underline mb-2">Home</a>
                        <a href="#clients" className="hover:underline mb-2">Clients</a>
                        <a href="#services" className="hover:underline">Services and Software</a>
                    </div>
                </div>
                <div className="flex-1 text-xs">
                <h1 className="font-bold md:text-xl">Legal</h1>
                <div className="mb-4 md:mb-0 md:py-4 flex flex-col">
                        <a href="/privacy" className="hover:underline mb-2">Privacy Policy</a>
                        <a href="/cookie-policy" className="hover:underline mb-2">Cookie Policy</a>
                        <a href="/terms" className="hover:underline">Terms and Conditions</a>
                    </div>
                </div>
            {/* </div> */}
            
            <div className="flex-1">
                {/* <h2 className="text-xs mb-4">Contact us to unlock all the possibilities of your data.</h2> */}
                <h1 className="font-bold text-xs md:text-xl pb-2 md:pb-4">Contact</h1>
                <form className="flex flex-col gap-2 text-xs " onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 p-1 rounded w-full h-8"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 p-1 rounded w-full h-8"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Message"
                        className="border border-gray-300 p-1 rounded w-full h-16"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </footer>

   
  );
};

export default Footer; 