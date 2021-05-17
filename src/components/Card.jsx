import React from 'react';
import { Link } from 'react-router-dom';
import Icon0 from './weather-icons/Icon0';
import Icon1 from './weather-icons/Icon1';
import Icon2 from './weather-icons/Icon2';
import Icon3 from './weather-icons/Icon3';
import Icon4 from './weather-icons/Icon4';
import Icon5 from './weather-icons/Icon5';
import Icon6 from './weather-icons/Icon6';
import Icon7 from './weather-icons/Icon7';
import Icon8 from './weather-icons/Icon8';
import Icon9 from './weather-icons/Icon9';
import Icon10 from './weather-icons/Icon10';
import Icon11 from './weather-icons/Icon11';
import Icon12 from './weather-icons/Icon12';
import Icon13 from './weather-icons/Icon13';
import Icon14 from './weather-icons/Icon14';
import Icon15 from './weather-icons/Icon15';
import Icon16 from './weather-icons/Icon16';
import Icon17 from './weather-icons/Icon17';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    
    return (
      <div className="card">
        <div id="closeIcon">
            <button onClick={onClose} id="btnX">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr className='cardHr'/>
          <div className='inCardRow'>
            <div>
              <p>Min</p>
              <p className="info">{min}°</p>
            </div>
            <div>
              <p>Max</p>
              <p className="info">{max}°</p>
            </div>
          </div>
        </div>
            <div>
              {img == "01d" ? <Icon0 /> : null }
              {img == "01n" ? <Icon1 /> : null }
              {img == "02d" ? <Icon2 /> : null }
              {img == "02n" ? <Icon3 /> : null }
              {img == "03d" ? <Icon4 /> : null }
              {img == "03n" ? <Icon5 /> : null }
              {img == "04d" ? <Icon6 /> : null }
              {img == "04n" ? <Icon7 /> : null }
              {img == "09d" ? <Icon8 /> : null }
              {img == "09n" ? <Icon9 /> : null }
              {img == "10d" ? <Icon10 /> : null }
              {img == "10n" ? <Icon11 /> : null }
              {img == "11d" ? <Icon12 /> : null }
              {img == "11n" ? <Icon13 /> : null }
              {img == "13d" ? <Icon14 /> : null }
              {img == "13n" ? <Icon15 /> : null }
              {img == "50d" ? <Icon16 /> : null }
              {img == "50n" ? <Icon17 /> : null }
            </div>
        <div>
            <Link to={`/ciudad/${id}`}><p className="link">See more</p></Link>
        </div>
      </div>
    );
};