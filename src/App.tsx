import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import store from './redux/store';
import Contact from './components/Contact';

function App(){
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/contact" element={<Contact/>} />

          </Routes>
          
        </div>
      </Router>
    </Provider>
  );
};

export default App;
