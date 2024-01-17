import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './navbar';
import "../Login/Donorsta.css"

function Donorsta() {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [bestContactTime, setBestContactTime] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('');
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodType || !quantity || !pickupTime || !address || !email || !mobileNo || !nearestLandmark || !bestContactTime || !preferredContactMethod) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
      await axios.post('http://localhost:8080/fooddetails/postfooddetails', {
        foodType,
        quantity,
        pickupTime,
        address,
        email,
        mobileNo,
        nearestLandmark,
        bestContactTime,
        preferredContactMethod,
      });

      alert('Food donation registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Food donation registration failed. Please try again later.');
    }
  };

  return (
    <>
      <Navbar/>
      <div className="donorsta-container">
        <div className="register-container">
          <h1>REGISTER FOR FOOD DONATION</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Type of Food
              <input
                type="text"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                name="foodType"
                required
              />
            </label>
            <label>
  Quantity (in kg)
  <input
    type="number"
    value={quantity}
    onChange={(e) => setQuantity(Math.max(0, e.target.value))}
    name="quantity"
    min="0"
    required
  />
</label>
            <label>
              Preferred Pickup Time
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                name="pickupTime"
                required
              />
            </label>
            <label>
              Address
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </label>
            <label>
              Mobile No
              <input
                type="text"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                name="mobileNo"
                required
              />
            </label>
            <label>
              Nearest Landmark
              <input
                type="text"
                value={nearestLandmark}
                onChange={(e) => setNearestLandmark(e.target.value)}
                name="nearestLandmark"
                required
              />
            </label>
            <label>
              Best Contact Time
              <input
                type="text"
                value={bestContactTime}
                onChange={(e) => setBestContactTime(e.target.value)}
                name="bestContactTime"
                required
              />
            </label>
            <label>
              Preferred Contact Method
              <input
                type="text"
                value={preferredContactMethod}
                onChange={(e) => setPreferredContactMethod(e.target.value)}
                name="preferredContactMethod"
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donorsta;
