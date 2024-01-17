import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import "./List.css";
import Footer from '../Footer';

function Reduxlist() {
  const [foodDetails, setFoodDetails] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [emailLink, setEmailLink] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.get('http://localhost:8080/fooddetails/getfooddetails')
      .then((response) => {
        setFoodDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food details:', error);
      });
  }, []);

  const handleRequestFood = (foodId) => {
    const selected = foodDetails.find(food => food.id === foodId);
    setSelectedFood(selected);

    const subject = 'Food Donation Request';
    const body = `I am interested in your food donation offer:\n\nFood Type: ${selected.foodType}\nQuantity: ${selected.quantity} kg\nPreferred Pickup Time: ${selected.pickupTime}\nAddress: ${selected.address}\n\nPlease reply to discuss further details.`;
    setEmailLink(`mailto:${selected.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setIsModalVisible(true);

  };

  const sendRequestEmail = () => {
    
    window.location.href = emailLink;
  };

  const closeModal = () => {
    setSelectedFood(null);
    setIsModalVisible(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodDetails.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Navbar />
      <div className='bol'>
        <div className="food-details-list-container">
          <h1>Food Donation Details</h1>
          <table>
            <thead>
              <tr>
                <th>Food Type</th>
                <th>Quantity (kg)</th>
                <th>Preferred Pickup Time</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((food, index) => (
                <tr key={index}>
                  <td>{food.foodType}</td>
                  <td>{food.quantity}</td>
                  <td>{food.pickupTime}</td>
                  <td>{food.address}</td>
                  <td>
                    <button onClick={() => handleRequestFood(food.id)}>DETAILS</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalVisible && selectedFood && (
  <div className={`food-details-popup modal-visible`}>
    <h2>Food Details</h2>
    <p>Food Type: {selectedFood.foodType}</p>
    <p>Quantity (kg): {selectedFood.quantity}</p>
    <p>Mobile No: {selectedFood.mobileNo}</p>
    <p>Preferred Pickup Time: {selectedFood.pickupTime}</p>
    <p>Address: {selectedFood.address}</p>
    <p>Email: <a href={emailLink}>{selectedFood.email}</a></p>

    {selectedFood.bestContactTime && (
      <p>BestContactTime: {selectedFood.bestContactTime}</p>
    )}

    {selectedFood.nearestLandmark && (
      <p>NearestLandmark: {selectedFood.nearestLandmark}</p>
    )}

    {selectedFood.preferredContactMethod && (
      <p>PreferredContactMethod: {selectedFood.preferredContactMethod}</p>
    )}

    <button className="request-button" onClick={sendRequestEmail}>Request</button>
    <button className="close-button" onClick={closeModal}>Close</button>
  </div>
)}

        {isModalVisible && (
          <div className="modal-backdrop" onClick={closeModal} />
        )}

        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= foodDetails.length}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reduxlist;
