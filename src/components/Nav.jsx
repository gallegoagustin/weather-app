import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/clima.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navContainer'>
      <Link to='/'>        
        <div id='logoDiv'>
          <img src={Logo} alt=""/>
          <h1>Weather App</h1>
        </div>
      </Link>
      <Link to='/about'>
        <h1>About</h1>
      </Link>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>    
  );
};

export default Nav;