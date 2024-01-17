import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/SignUp';
import Home from './Components/Login/Register/Home';
import Aboutus from './Components/Login/Aboutus';
import Reduxlist from './Components/Login/Register/Reduxlist';
import Dashboard from './Components/Login/Dashboard';
import FAQ from './Components/Login/Faq';
import Footer from './Components/Login/Footer';
import Privacy from './Components/Login/Privacy';
import ContactUs from './Components/Login/ContactUs';
import Donorsta from './Components/Login/Donorsta';
import Feedback from './Components/Login/Feedback';
import Terms from './Components/Login/Terms';
import AdminPanel from './Components/Login/Panel';
import Admin from './Components/Login/Admin';
import DonarRegister from './Components/Login/DonarRegister';
import Reg from './Components/Login/Reg';
import FoodDetails from './Components/Login/FoodDetails';
import Feedback1 from './Components/Login/Feedback1';
import BulkSMSSender from './Components/Login/BulkSMSSender';
import FeedbackForm from './Components/Login/Feedback123';
import FeedbackReports from './Components/Login/FeedbackReports';
import Da from './Components/Login/Dash';
import YourReactComponent from './Components/Login/YourReactComponent';
import ImageListComponent from './Components/Login/Register/ImageListComponent';
import ImageUploadComponent from './Components/Login/Register/ImageUploadComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/list" element={<Reduxlist />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donorsta" element={<Donorsta />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/panel" element={<AdminPanel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/DonarRegister" element={<DonarRegister />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/fooddetails" element={<FoodDetails />} />
        <Route path="/feedb" element={<Feedback1 />} />
        <Route path="/bulk" element={<BulkSMSSender />}/>
        <Route path="/newfeed" element={<FeedbackForm />}/>
        <Route path="/Report" element={<FeedbackReports/>}/>
        <Route path="/da" element={<Da/>}/>
        <Route path="/allimage" element={<ImageListComponent />} />
        <Route path="/upload" element={<ImageUploadComponent />} />

        <Route path="/mail" element={<YourReactComponent/>}/>




        
      </Routes>
    </Router>
  );
};

export default App;
