import React from 'react';
import {Link} from 'react-router-dom';
import './City.css';

function City({city}) {
    if(city !== null) {
        return (
            <div className="cityContainer">
                <div className="city">
                    <h2 className="cityTitle">{city.name}</h2>
                    <p>{city.country}</p>
                    <hr id="cityHr"/>
                    <div>
                        <div>Actual temp: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Pressure: {city.pressure} hPa</div>
                        <div>Humidity: {city.humidity} %</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                        <div><Link to='/'><p className="link">Back</p></Link></div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className="cityContainer"><div id="notFoundText">No se encontró la ciudad</div></div>
      }    
}

export default City;