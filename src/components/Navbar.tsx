import React from 'react';
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  title: string;
}


const Navbar: React.FC<NavbarProps> = ({ title }) => {
    const navigate = useNavigate();
const handleAdminClick = () => {
    navigate('/admin/login');
}
const contact = () =>{
  navigate('/contact');
}
  return (
    <nav className="navbar">
      <div className="logo" >{title}</div>
      <ul className="nav-links">
        <li><a href="#">Buy</a></li>
        <li><a href="#">Sell</a></li>
        <li><a href="#">Rent</a></li>
        <li><a href="#">Agent Finder</a></li>
        <li><a href="#">Advertise</a></li>
        <li><a href="#" onClick={()=>contact()}>Contact</a></li>
        <li><button onClick={()=>handleAdminClick()}>Admin</button></li>
        
      </ul>
    </nav>
        
      
  );
};

export default Navbar;
