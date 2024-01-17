import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';  // Import useNavigate and Link from 'react-router-dom'
import AdminPanel from './/Panel'; // Make sure to provide the correct path
import FeedbackReports from '../Login/FeedbackReports'; // Make sure to provide the correct path

const Da = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is not logged in, then redirect to the login page
    if (!loggedIn) {
      navigate('/login');  // Replace '/login' with the actual path to your login page
      return;
    }

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
  }, [loggedIn, navigate]);

  return (
    <div>
      {/* Render AdminPanel */}
      <AdminPanel users={users} setUsers={setUsers} />

      {/* Render FeedbackReports */}
      <FeedbackReports reports={reports} />

      {/* Button to navigate to home page */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Da;
