import React from 'react';
import "./Privacy.css";
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const PoliceFeedback = () => {
  return (
    <>
     
      <div className="unique-privacy-container">
        <div className="unique-privacy-content">
          <main className="privacy-main">
            <div className="privacy-container">
              <div className="privacy-header">
                <div className="prvivacy-all">
                  <div className="privact-info1">
                  </div>
                  <div className="privacy-info-text1">
                    <h1 className="privacy-header">
                      Police Feedback System
                    </h1>
                    <p className="privacy-para">
                      Getting feedback on police operations is difficult due to outdated methods and privacy concerns. Traditional ways like inspections and calls to complainants are restricted and lack inclusivity. This hampers understanding community feelings and addressing policing issues effectively.
                    </p>
                    <p className="privacy-para">
                      Current feedback methods are non-digital, missing guest records, and lack a uniform tracking system. Limited manpower inhibits daily follow-up, and the diverse, less digitally aware community adds complexity. Standard Operating Procedures (SOPs) for model police stations highlight the need for regular feedback to improve transparency and efficiency.
                    </p>
                    <h3 className="privacy-header-sub">
                      Challenges:
                    </h3>
                    <ul className="privacy-list">
                      <li>Non-digital method.</li>
                      <li>Lack of uniform guest records.</li>
                      <li>Inadequate staff for daily follow-up.</li>
                      <li>Multi-lingual and digitally less-literate society.</li>
                    </ul>
                    <h3 className="privacy-header-sub">
                      Solution:
                    </h3>
                    <ul className="privacy-list">
                      <li>Bulk SMS Tool: Gather quick comments on experiences (Happy/Not Happy).</li>
                      <li>Auto Chatbot: Engage users with questions and compile answers in real-time.</li>
                      <li>Online Portal: Record detailed comments for a holistic view.</li>
                      <li>Social Media-Like Platform: Allow users to share experiences, tagging specific places for easy categorization.</li>
                    </ul>
                    <h3 className="privacy-header-sub">
                      Expectations:
                    </h3>
                    <ul className="privacy-list">
                      <li>User-Friendly: A simple, intuitive system for different tech proficiencies.</li>
                      <li>Mobile-Friendly: Optimize for mobile use.</li>
                      <li>Cost-Effective: Keep costs within 2-5K per spot.</li>
                      <li>Simplicity: Easy for users to provide comments.</li>
                      <li>Auto Data Entry: Regularly collect data for efficient monitoring.</li>
                    </ul>
                  </div>
                  <div className="privact-info1">
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PoliceFeedback;