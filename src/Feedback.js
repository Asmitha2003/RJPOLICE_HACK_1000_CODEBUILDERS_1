import React, { useState, useEffect } from 'react';
import "./Feedback.css"

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    interactionType: '',
    officers: '',
    description: '',
    satisfaction: '',
    behavior: '',
    concerns: '',
    evidence: null,
    isAnonymous: false,
    language: '',
    suggestions: '',
    contactInfo: '',
    useAutoLocation: true,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setFormData((prevData) => ({
      ...prevData,
      date: currentDate,
      time: currentTime,
    }));
  }, []);

  useEffect(() => {
    if (formData.useAutoLocation && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          // Reverse geocoding using OpenCage Geocoding API
          try {
            const response = await fetch(
              https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=15b41d7b819c440590ef22b8ab3accf9
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              setPlaceName(data.results[0].formatted);
            }
          } catch (error) {
            console.error('Error fetching place name:', error.message);
          }
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, [formData.useAutoLocation]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithLocation = {
      ...formData,
      location: formData.useAutoLocation ? placeName || 'Location not available' : formData.location,
    };
    console.log('Form Data:', formDataWithLocation);
  };

  return (
    <div>
      <h1>Police Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>

        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>

        <label>
          Interaction Type:
          <input
            type="text"
            name="interactionType"
            value={formData.interactionType}
            onChange={handleChange}
            placeholder="Describe the type of interaction"
          />
        </label>

        <label>
          Officers Involved:
          <input
            type="text"
            name="officers"
            value={formData.officers}
            onChange={handleChange}
            placeholder="Names or badge numbers"
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the incident"
          />
        </label>

        <label>
          Satisfaction:
          <select name="satisfaction" value={formData.satisfaction} onChange={handleChange}>
            <option value="">Select satisfaction level</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
          </select>
        </label>

        <label>
          Behavior of Police Officers:
          <textarea
            name="behavior"
            value={formData.behavior}
            onChange={handleChange}
            placeholder="Describe the behavior of the police officers"
          />
        </label>

        <label>
          Concerns:
          <textarea
            name="concerns"
            value={formData.concerns}
            onChange={handleChange}
            placeholder="Any specific concerns or issues raised"
          />
        </label>

        <label>
          Evidence:
          <input type="file" name="evidence" onChange={handleChange} />
        </label>

        <label>
          Anonymous:
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
          />
        </label>

        <label>
          Language:
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Language of interaction"
          />
        </label>

        <label>
          Suggestions:
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            placeholder="Any suggestions for improvement"
          />
        </label>

        <label>
          Contact Information:
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Optional: Provide contact information for follow-up"
          />
        </label>

        <label>
          Use Automatic Location:
          <input
            type="checkbox"
            name="useAutoLocation"
            checked={formData.useAutoLocation}
            onChange={handleChange}
          />
        </label>

        {!formData.useAutoLocation && (
          <label>
            Manual Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location manually"
            />
          </label>
        )}

        <label>
          Location:
          {placeName ? <span>{placeName}</span> : 'Loading location...'}
        </label>

        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default FeedbackForm;
