import React from 'react';
import "../Login/Terms.css";
import Footer from './Footer';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
function Terms() {
  return (
    <>
    <Navbar/>
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> 25/09/2023</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the MealMiracle food donation app MealMiracle, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use the App.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Users must be at least 18 years old to use the App unless otherwise specified by local laws.</li>
        <li>Users are responsible for providing accurate and truthful information when using the App.</li>
        <li>Users must not engage in any fraudulent, illegal, or harmful activities on the App.</li>
        <li>Users are responsible for the safety and quality of donated food items.</li>
        <li>Users agree to follow all applicable local, state, and federal laws and regulations when using the App.</li>
      </ul>

      <h2>3. Food Donations</h2>
      <p>
        Donors are responsible for ensuring the safety and quality of food items they donate.
      </p>
      <p>
        Donors must adhere to all local health and safety regulations when donating food.
      </p>
      <p>
        MealMiracle is not responsible for the quality, safety, or condition of donated food items.
      </p>

      <h2>4. User Privacy</h2>
      <p>
        MealMiracle collects and uses user data as outlined in our Privacy Policy [Link to Privacy Policy].
      </p>
      <p>
        Users are responsible for maintaining the confidentiality of their account information.
      </p>

      <h2>5. Termination</h2>
      <p>
        [MealMiracle reserves the right to terminate or suspend user accounts for violations of these Terms and Conditions or for any other reason deemed necessary by [Your App Name].
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The App and its content are owned by MealMiracle and are protected by copyright and other intellectual property laws.
      </p>
      <p>
        Users may not reproduce, distribute, or create derivative works from the App without permission from [Your Company Name].
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        The App is provided "as is" without warranties of any kind, express or implied.
      </p>
      <p>
        MealMiracle does not guarantee the availability, accuracy, or reliability of the App.
      </p>
      <p>
        MealMiracle is not responsible for any harm, injury, or damage resulting from the use of the App.
      </p>

      <h2>8. Changes to Terms and Conditions</h2>
      <p>
        MealMiracle reserves the right to modify these Terms and Conditions at any time. Users will be notified of changes, and continued use of the App implies acceptance of the modified terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by the laws of . Any disputes arising from the use of the App shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
      </p>

      <h2>10. Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions, please contact us at <Link to="/contact">Contact--></Link>
      </p>

      <p>
        By using the MealMiracle food donation app, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default Terms;
