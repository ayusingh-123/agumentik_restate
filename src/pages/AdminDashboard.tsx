import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  updateContactDetails } from '../redux/actions/contactDetailsActions';
import {  updateHeroBannerContent } from '../redux/actions/heroBannerActions';

const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [heroBannerData, setHeroBannerData] = useState({
    title: '',
    subtitle: '',
  });

  const [contactDetails, setContactDetails] = useState({
    address: '',
    email: '',
    phone: '',
  });

  const handleHeroBannerSubmit = () => {
    dispatch(updateHeroBannerContent(heroBannerData));
  };

  const handleContactDetailsSubmit = () => {
    dispatch(updateContactDetails(contactDetails));
  };

  return (
    <div>
      <h2>Update Hero Banner</h2>
      <input
        type="text"
        placeholder="Title"
        value={heroBannerData.title}
        onChange={(e) => setHeroBannerData({ ...heroBannerData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subtitle"
        value={heroBannerData.subtitle}
        onChange={(e) => setHeroBannerData({ ...heroBannerData, subtitle: e.target.value })}
      />
      <button onClick={handleHeroBannerSubmit}>Save Hero Banner</button>

      <h2>Update Contact Details</h2>
      <input
        type="text"
        placeholder="Address"
        value={contactDetails.address}
        onChange={(e) => setContactDetails({ ...contactDetails, address: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={contactDetails.email}
        onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={contactDetails.phone}
        onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
      />
      <button onClick={handleContactDetailsSubmit}>Save Contact Details</button>
    </div>
  );
};

export default AdminDashboard;
