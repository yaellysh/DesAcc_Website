import React, { useState } from 'react';
import './Footer.css';

const FooterTop = () => {
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
        <div className="bg-[#1c2531] text-white py-4 md:px-8">
            <p className="mx-4 md:mx-0 text-xs md:text-sm 2xl:text-lg text-center pb-4">© 2025 DesAcc EMEA Ltd. all rights reserved</p>
            <p className="mx-4 md:mx-0 text-xs md:text-xs 2xl:text-base text-center pb-4"> DesAcc® is a registered trademark of DesAcc EMEA Ltd. All other brands and product names mentioned here may be registered trademarks or trademarks of their respective holders and are used only for reference, where specifically needed, without any intent to infringe. © 2025 DesAcc EMEA Ltd and its subsidiaries. All rights reserved. </p>
        </div>
    </footer>

   
  );
};

export default FooterTop; 