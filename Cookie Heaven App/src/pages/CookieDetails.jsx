import React from 'react';
import './CookieDetails.css';
import CookieCard from '../Components/CookieCard';

function CookieDetails() {
  return (
    <div>
      <h2>Cookie Details</h2>
      <p>Here you can find details about your favorite cookies!</p>
      <CookieCard />
    </div>
  );
}

export default CookieDetails