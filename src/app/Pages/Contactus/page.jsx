// page.js
'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './page.css';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiEndpoint = 'https://api.heybuddy.co.in/contact';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          mobile: phoneNumber, // Assuming the phone number is stored in the 'phoneNumber' state
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // You can perform additional actions if the submission is successful
      } else {
        console.error('Failed to submit form:', response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error during form submission:', error.message);
      // Handle the error as needed
    }
  };
  return (
    <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 style={{ fontSize: '3rem' }}>Have a great idea, let’s connect to make it reality</h1>

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

          <div className="phone-input-container">
            <PhoneInput
              placeholder="Your Phone Number"
              className="input-field black-bg"
              value={phoneNumber}
              style={{ backgroundColor: 'black'}}
              onChange={setPhoneNumber}
              defaultCountry="US" // Set your default country code here
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
