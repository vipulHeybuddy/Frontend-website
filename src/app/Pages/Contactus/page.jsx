'use client'
// page.js

import React, { useState } from 'react';
import './page.css';


const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1 style={{fontSize: '3rem'}}>Have a great idea, let’s connect to make it reality</h1>

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                className="input-field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
       </div>
    </div>
  );
};

export default Page;

  