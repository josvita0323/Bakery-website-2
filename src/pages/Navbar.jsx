import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/styles.css';
import Logo from './images/logo.jpg';


export default function Navbar() {
    const navigate = useNavigate();

    // Function to handle select change and navigate based on selected value
    const handleCategoryChange = (event) => {
        const value = event.target.value;
        if (value) {
            navigate(value); // Navigate to the selected route
        }
    };

    return (
        <div className='Navbar'>
            <div className="logo-container">
              <img src={Logo} alt="Logo" className="navbar-logo" />
              <h2>Let's Bake</h2>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <select defaultValue="" onChange={handleCategoryChange}>
                        <option value="" disabled>Categories</option>
                        <option value="/Vanilla">Vanilla Cake</option>
                        
                        <option value="/Chocolate">Chocolate Cake</option>
                        <option value="/Coustom">Coustom</option>
                    </select>
                </li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Cart'>Cart</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </div>
    );
}
