import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import swal from 'sweetalert';
import Nav from './components/Nav';
import Alert from './components/Alert';
import Cards from './components/Cards';
import City from './components/City';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    /* const apiKey = "bb1ba12ff633758e32682ea0ab8edb39"; */
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
            pressure: recurso.main.pressure,
            humidity: recurso.main.humidity
          };
          var aux = cities.filter(c => c.id !== ciudad.id);
          if(cities.length !== aux.length){
            /* alert("The city is already displayed");
            return; */
            swal("The inserted city is already displayed")
            return;
          }
          setCities(oldCities => [...oldCities, ciudad]);          
        } else {
            swal("City not found")
          }        
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function onFilter(ciudadId) {
    let renderCity = cities.filter(c => c.id === parseInt(ciudadId));
    if(renderCity.length > 0) {
      return renderCity[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <div id="compContainer">
          <Route
            path='/'
            render={() => <Nav onSearch={onSearch}/>}
          />
        <div>
          <Route
            exact path='/'
            render={() => <Cards cities={cities} onClose={onClose}/>}
          />
        </div>
        <Route 
          exact path='/'
          render={() => <Alert cities={cities}/>} 
        /> 
        <Route
          exact path='/ciudad/:ciudadId'
          render={({match}) => <City city={onFilter(match.params.ciudadId)}/>}
        />
        <Route path='/about' component={About}/>
      </div>  
      <Route path='/' component={Footer}/>
    </div>  
  );
}

export default App;