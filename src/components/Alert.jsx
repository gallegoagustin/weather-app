import React from 'react';
import './Alert.css';
import Cloud from '../assets/cloudy.svg';

function Alert({cities}) {
    if(cities.length === 0) {
        return (
            <div className="alertContainer">
                <div className="alertCard">
                    <img className="wIcon" src={Cloud} alt="" />
                    <p>No cities has been added yet</p> 
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Alert;