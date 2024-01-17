import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ".//FeedbackReports.css"
const FeedbackReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch feedback reports on component mount
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback reports:', error);
      });
  }, []);

  return (
    <div className="feedback-reports-container">
      <h2>Feedback Reports</h2>
      <div className="reports-list">
        {reports.map(report => (
          <div key={report.id} className="report-item">
            <p>Date: {report.date}</p>
            <p>Time: {report.time}</p>
            <p>Interaction Type: {report.interactionType}</p>
            <p>Officers: {report.officers}</p>
            <p>Description: {report.description}</p>
            <p>Satisfaction: {report.satisfaction}</p>
            <p>Behavior: {report.behavior}</p>
            <p>Concerns: {report.concerns}</p>
            {/* Displaying evidence might require a different approach based on your requirements */}
            {/* For simplicity, assuming evidence is an image */}
            {report.evidence && <img src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(report.evidence)))}`} alt="Evidence" />}
            <p>Anonymous: {report.isAnonymous ? 'Yes' : 'No'}</p>
            <p>Language: {report.language}</p>
            <p>Suggestions: {report.suggestions}</p>
            <p>Contact Info: {report.contactInfo}</p>
            <p>Location: {report.location}</p>
            <p>Auto Location: {report.autoLocation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackReports;
