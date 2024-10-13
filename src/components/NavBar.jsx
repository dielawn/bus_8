import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="nav">
        <li className='navLink'>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/demolition" className="text-white hover:text-gray-300">
            Demolition
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/dimensions" className="text-white hover:text-gray-300">
            Dimensions
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/taillights" className="text-white hover:text-gray-300">
            Taillights
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/layout" className="text-white hover:text-gray-300">
            Layout
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/insulation" className="text-white hover:text-gray-300">
            Insulation
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/heating" className="text-white hover:text-gray-300">
            Insulation
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/water" className="text-white hover:text-gray-300">
            Water
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/electrical" className="text-white hover:text-gray-300">
            Electrical
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/windows" className="text-white hover:text-gray-300">
            Windows
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/door" className="text-white hover:text-gray-300">
            Door
          </Link>
        </li>
        <li className='navLink'>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;