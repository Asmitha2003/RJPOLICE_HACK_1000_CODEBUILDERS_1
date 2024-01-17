import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DonarRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !mobileNo || !address || !password || !confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/Donardetails/postDonardetails', {
        firstName,
        lastName,
        mobileNo,
        address,
        password,
      });

      navigate('/dolo');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="bobb">
      <div className="register-container">
        <h1>REGISTER AS A DONOR</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="firstName"
              required
            />
          </label>
          
          <label>
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="lastName"
              required
            />
          </label>

          <label>
            Mobile No
            <input
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="mobileNo"
              required
            />
          </label>

          <label>
            Address
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="address"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="password"
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="confirmPassword"
              required
            />
          </label>

          <button type="submit">Submit</button>
          <Link to="/registerdo" style={{ textDecoration: "none" }}>
            <span>
              &nbsp; &nbsp; Register as a NPO!
            </span>
          </Link>
          <Link to="/dolo">
            <span>
              Login?
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default DonarRegister;
