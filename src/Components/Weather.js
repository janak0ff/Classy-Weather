// Weather.js
import React from "react"; // Import the React library, which is essential for creating React components.
import Day from "./Day"; // Import the Day component, which is used to display individual day weather data.

class Weather extends React.Component {
  // Define a React component named 'Weather' by extending React.Component.
  // The componentWillUnmount lifecycle method is called just before the component is removed from the DOM.
  // It's used here to log a message to the console, which can be useful for debugging or cleanup tasks.
  componentWillUnmount() {
    console.log("Weather will unmount"); // Log a message to the console indicating the Weather component will unmount.
  }

  // The render method is responsible for rendering the UI of the component.
  // It returns JSX, which is a syntax extension that allows mixing HTML with JavaScript.
  render() {
    // Destructure the weather data from the props for easier access.
    // This includes maximum and minimum temperatures, dates, and weather codes.
    const {
      temperature_2m_max: max, // Rename the maximum temperature array to 'max'.
      temperature_2m_min: min, // Rename the minimum temperature array to 'min'.
      time: dates, // Rename the array of dates to 'dates'.
      weathercode: codes, // Rename the array of weather codes to 'codes'.
    } = this.props.weather; // Access the weather data passed as props.

    // Return the JSX that defines the component's UI.
    return (
      <div>
        {/* A container div for the Weather component. */}
        <h2>Weather {this.props.location}</h2>
        {/* Display the location passed as a prop in a header. */}
        <ul className="weather">
          {/* An unordered list to display the weather for each day. */}
          {dates.map(
            (
              date,
              i // Iterate over the array of dates using the map function.
            ) => (
              <Day
                date={date} // Pass the current date to the Day component.
                max={max.at(i)} // Pass the maximum temperature for the current day.
                min={min.at(i)} // Pass the minimum temperature for the current day.
                code={codes.at(i)} // Pass the weather code for the current day.
                key={date} // Use the date as a unique key for each Day component, required by React.
                isToday={i === 0} // Determine if the current day is today; true for the first element.
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Weather; // Export the Weather component as the default export, allowing it to be imported elsewhere.
