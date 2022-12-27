import { React, useEffect, useState } from "react";
import "./App.css";

//LLAMADAS
import { getCountries } from "./services/getCountries";
import { getCities } from "./services/getCities";
import { getWeather } from "./services/getWeather";

//COMPONENTES
import * as components from "./components";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    //la siguiente es una función autoinvocada
    (async () => {
      setCountries(await getCountries());
      //hacer un sort en este punto para que devuelva los países por orden alfabético
    })();
  }, []);

  //aquí si puedo meter el async al principio de la función porque no estoy dentro de un hook
  const countryHandler = async (e) => {
    // aquí también metemos el SCR para que cuando el e.currentTarget.value esté vacío (va a ser false) no se hace el getCities
    //recordar que en el && se deben cumplir ambas condiciones como true.
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  };
  const weatherCityHandler = async (e) => {
    e.currentTarget.value &&
      setWeather(await getWeather(e.currentTarget.value));
  };

  return (
    <main>
      <div className="mainView">
        <div className="button">
          <components.ButtonSearch title={"Search for places"} />
          <div className="location">
            <i className="fa-solid fa-location-crosshairs fa-lg"></i>
          </div>
        </div>

        <label htmlFor="elegir">Elige un país</label>
        <select onChange={countryHandler}>
          <option>Selecciona</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>

        {/* este es el famoso SHORT CIRCUIT RENDER, que lo que hace es que si el array de las cities es menor que cero, no aparece */}
        {cities.length > 0 && (
          <div>
            <label htmlFor="elegir">Elige una ciudad</label>
            <select onChange={weatherCityHandler}>
              <option>Selecciona</option>
              {cities.map((city) => (
                <option key={city.id}>{city.name}</option>
              ))}
            </select>
          </div>
        )}

        {weather && (
         <div className="information">
            <section className="icon">
               <img
               src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
               alt="weather icon"
               />
            </section>
            <section className="temperature">
               {/* El toFixed() es para redondear, lo posríamos hacer con un map, pero es más sencillito de esta manera */}
               <h2>{weather.main.temp.toFixed()}</h2> 
               <p>ºC</p>
            </section>
            {/* El <pre></pre> es un console.log pero para que salga en pantalla */}
            {/* <pre>
                  {JSON.stringify(weather, null, 2)}
               </pre> */}
            <section className="cityName">
               <h1>Shower tiempo</h1>
            </section>
            <section className="footer">
               <p>Today - Dia y fecha</p>
              <i className="fa-solid fa-location-dot"></i> cuidad
            </section>
         </div>
        )}
      </div>

      <div className="details">
         <section className="smallBoxes">
            <components.Box />
            <components.Box />
            <components.Box />
            <components.Box />
            <components.Box />
         </section>
         <h2>Today’s Hightlights </h2>
         <section className="bigBoxes">
            <components.BigBox/>
            <components.BigBox/>
            <components.BigBox/>
            <components.BigBox/>
         </section>
         <footer>
            <p>created by username - devChallenges.io</p>
         </footer>
      </div>
    </main>
  );
}
