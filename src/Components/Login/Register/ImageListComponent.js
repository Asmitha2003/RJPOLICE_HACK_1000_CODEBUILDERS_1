import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import './List1.css'; 
import He from '../navbar';
import Footer from '../Footer';

const ImageListComponent = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Check if user is authenticated
        const token = localStorage.token;
        if (!token) {
          // Redirect to login page if not authenticated
          navigate('/login');
          return;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await axios.get('http://localhost:8080/api/images/all');
        setImages(response.data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    };

    fetchImages();
  }, [navigate]);

  const handleButtonClick = () => {
    // Handle button click logic
    navigate("/upload")
    console.log('Button clicked!');
  };

  return (
    <>
    <He/>
    <div>
      {/* Add your button above the page */}
      <div className="button-container">

  <button  onClick={handleButtonClick}>Click me</button>
</div>

      <div className="image-list-container">
        <ul className="image-list">
          {images.map((image) => (
            <li key={image.id} className="image-item">
              <Link to={`/images/${image.id}`} className="image-link-container">
                <div className="image-container">
                  {/* Use the data URL for the image source */}
                  <img src={`data:image/jpeg;base64,${image.data}`} alt={image.caption} />
                </div>
              </Link>
              <div className="image-details">
                <p className="image-caption">
                  <strong>Caption:</strong> {image.caption}
                </p>
                <p className="image-location">
                  <strong>Location:</strong> {image.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
     </>
  );
};

export default ImageListComponent;
