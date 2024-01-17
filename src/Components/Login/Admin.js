import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminPanel from './/Panel';
import FeedbackReports from '../Login/FeedbackReports';

const Da = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:8080/auth/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    // Fetch feedback reports
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback reports:', error);
      });
  }, []);

  const handleLoginAndNavigate = () => {
    // Simulating a login action (replace with your actual login logic)
    // For simplicity, setting a token in localStorage
    localStorage.setItem('token', 'localStorage.token');

    // After successful login, navigate to the home page
    navigate('/');
  };

  return (
    <div>
      {!loggedIn && (
        // Display login button if not logged in
        <button onClick={handleLoginAndNavigate}>Login</button>
      )}

      {loggedIn && (
        // Render AdminPanel if logged in
        <div>
          <AdminPanel users={users} setUsers={setUsers} />
          <FeedbackReports reports={reports} />

          {/* Button to navigate to Home page */}
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Da;
