import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "./Dashboard.css";
import "./navbar";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Dashboard = () => {
  const [donations, setDonations] = useState([
    { id: 1, foodItem: 'Canned Soup', quantity: 10 },
    { id: 2, foodItem: 'Rice', quantity: 5 },
    { id: 3, foodItem: 'Pasta', quantity: 8 },
  ]);

  return (
    <>
    <Navbar/>
    <div className="qq">

    <div className='dashboard-container'>

      <Typography variant="h4" component="div">
        Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Food Item</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.map(donation => (
              <TableRow key={donation.id}>
                <TableCell>{donation.foodItem}</TableCell>
                <TableCell>{donation.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
