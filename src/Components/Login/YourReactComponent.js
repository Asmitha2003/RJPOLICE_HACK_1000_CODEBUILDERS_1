// YourReactComponent.jsx

import React, { useEffect, useState } from 'react';
import"./Register/YourReactComponent.css"
const YourReactComponent = () => {
  const [userEmails, setUserEmails] = useState([]);

  const fetchUserEmails = async () => {
    try {
      // Fetch user emails from your server
      // Replace the URL with your actual API endpoint
      const response = await fetch('http://localhost:8080/auth/user-emails');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user emails:', error);
      return [];
    }
  };

  const generateMailtoLink = (emails) => {
    const subject = 'Your subject here';
    const body = 'Your email body here';
    return `mailto:${emails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const fetchDataAndGenerateMailtoLink = async () => {
      try {
        const emails = await fetchUserEmails();
        setUserEmails(emails);
      } catch (error) {
        console.error('Error fetching user emails:', error);
      }
    };

    fetchDataAndGenerateMailtoLink();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  const handleSendEmails = () => {
    const mailtoLink = generateMailtoLink(userEmails);
    window.location.href = mailtoLink;
  };

  return (
    <div className="container">
      <h1 className="title">Your React Component</h1>
      {/* Add your component content here */}
      <p className="emails">Emails: {userEmails.join(', ')}</p>
      <button className="send-button" onClick={handleSendEmails}>Send Emails</button>
      {/* Add more components or elements as needed */}
    </div>
  );
};

export default YourReactComponent;
