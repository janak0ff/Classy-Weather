// App.js
// This is the main application component. It will render the weather application UI,
// fetch the weather data based on the user's input, and store the input in local storage.

import React from "react";
// React is a JavaScript library for building user interfaces.
import Input from "./Components/Inputs";
// The Input component is a reusable component that renders a text input field.
import Weather from "./Components/Weather";
// The Weather component is a reusable component that renders the weather data.
import { convertToFlag } from "./Components/Utils";
// The convertToFlag function is a utility function that takes a country code and returns a string
// representing the flag emoji for that country.

class App extends React.Component {
  // The App component is a class component, which is a type of React component that uses a class
  // to manage its state and lifecycle methods.
  state = {
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: {},
  };
  // The state object is used to store the application's state. In this case, it stores the user's
  // input location, whether the application is currently loading data, the display location that
  // will be shown to the user, and the weather data that is fetched from the API.

  fetchWeather = async () => {
    // The fetchWeather function is an asynchronous function that fetches the weather data from
    // the API. It is called when the user enters a location in the input field and presses the
    // enter key.

    if (this.state.location.length < 2) return this.setState({ weather: {} });
    // If the user has not entered at least two characters, do not fetch the weather data.

    try {
      this.setState({ isLoading: true });
      // Set the isLoading state to true to indicate that the application is currently
      // loading data.

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      // Fetch the geocoding data from the API. The geocoding data is used to get the latitude,
      // longitude, and timezone for the user's input location.

      const geoData = await geoRes.json();
      // Convert the response data to JSON.

      if (!geoData.results) throw new Error("Location not found");
      // If the API does not return any results, throw an error.

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      // Extract the latitude, longitude, timezone, name, and country code from the first
      // result.

      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });
      // Set the displayLocation state to the name of the location and the flag emoji for
      // the country code.

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      // Fetch the weather data from the API. The weather data is used to get the weather code,
      // maximum temperature, and minimum temperature for the user's input location.

      const weatherData = await weatherRes.json();
      // Convert the response data to JSON.

      this.setState({ weather: weatherData.daily });
      // Set the weather state to the weather data.
    } catch (err) {
      console.error(err);
      // If there is an error, log it to the console.
    } finally {
      this.setState({ isLoading: false });
      // Set the isLoading state to false to indicate that the application is no longer
      // loading data.
    }
  };

  setLocation = (e) => this.setState({ location: e.target.value });
  // The setLocation function is a callback function that is called when the user types
  // something in the input field. It sets the location state to the value of the input
  // field.

  componentDidMount() {
    // The componentDidMount lifecycle method is called when the component is mounted.
    // It is used to fetch the location from local storage and set the location state
    // to the value from local storage.

    this.setState({ location: localStorage.getItem("location") || "" });
  }

  componentDidUpdate(prevProps, prevState) {
    // The componentDidUpdate lifecycle method is called when the component is updated.
    // It is used to fetch the weather data when the user's input location changes.

    if (this.state.location !== prevState.location) {
      // If the location state has changed, fetch the weather data.
      this.fetchWeather();
      localStorage.setItem("location", this.state.location);
      // Store the location in local storage.
    }
  }

  render() {
    // The render method is called when the component is rendered. It returns the JSX that
    // is used to render the component.

    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <Input
          location={this.state.location}
          onChangeLocation={this.setLocation}
        />
        {/* // Render the Input component and pass the location state and the setLocation
        // function as props. */}
        {this.state.isLoading && <p className="loader">Loading...</p>}
        {/* // If the application is currently loading data, render a 'Loading...' message. */}
        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
        {/* // If the weather data has been fetched, render the Weather component and pass
        // the weather data and the display location as props. */}
      </div>
    );
  }
}

export default App;
