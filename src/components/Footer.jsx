import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="border shadow-sm title-bg-image">
        <div className="flex justify-between ml-4 md:ml-32 mt-8 md:pb-4">
            <div>
                <div className="flex justify-between ml-[4rem]">
                    <div className="text-[0.5rem] md:text-sm md:mr-8">
                        <h2 className="font-bold mb-2 md:mb-4">North America</h2>
                        <p>Toronto</p>
                        <p>M5E 1J8</p>
                        <p>Canada</p>
                    </div>
                    <div className="mr-8 ml-2 md:mr-32 text-[0.5rem] md:text-sm">
                        <h2 className="font-bold mb-2 md:mb-4">Europe</h2>
                        <div></div>
                        <p>Bath</p>
                        <p>BA1 1BP</p>
                        <p>United Kingdom</p>
                    </div>
                </div> 
            </div>
        </div>
        
        <div className="container flex flex-col md:flex-row my-4">
            {/* <div className="flex-1 ml-20 max-w-xs">
                <h2 className="text-sm mb-4">Contact us to unlock all the possibilities of your data.</h2>
                <form className="flex flex-col gap-2">
                    <input type="text" placeholder="Name" className="border border-gray-300 p-1 rounded" />
                    <input type="email" placeholder="Email" className="border border-gray-300 p-1 rounded" />
                    <textarea placeholder="Message" className="border border-gray-300 p-1 rounded" rows="3"></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="justify-right ml-[4rem]">
                <h2 className="text-sm font-bold mb-4">North America</h2>
                <p>Toronto</p>
                <p>M5E 1J8</p>
                <p>Canada</p>
                <br/>
                <h2 className="text-sm font-bold mb-4">Europe</h2>
                <p>Bath</p>
                <p>BA1 1BP</p>
                <p>United Kingdom</p>
            </div> */}
        </div>

        <div className="bg-[#1c2531] text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="flex items-center mb-4 ml-12 text-[0.5rem] md:text-xl">
                    <p>@2025 Desacc</p>
                </div>

                <div className="flex items-center mb-4 md:mb-0 text-[0.5rem] md:text-xl md:py-4">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/cookie-policy" className="hover:underline ml-5">Cookie Policy</a>
                    <a href="/terms" className="hover:underline ml-5">Terms and Conditions</a>
                </div>
            </div>
            <p className="text-sm text-center pb-4"> DesAcc® is a registered trademark of DesAcc EMEA Ltd. All other brands and product names mentioned here may be registered trademarks or trademarks of their respective holders and are used only for reference, where specifically needed, without any intent to infringe.</p>
        </div>
    </footer>


  );
};

export default Footer; 