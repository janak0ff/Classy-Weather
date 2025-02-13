// Day.js
import React from "react"; // Import the React library, which is essential for creating React components.
import { getWeatherIcon, formatDay } from "./Utils"; // Import utility functions for getting weather icons and formatting dates.

// Define a React component named 'Day' by extending React.Component
class Day extends React.Component {
  // The render method is responsible for rendering the UI of the component.
  // It returns JSX, which is a syntax extension that allows mixing HTML with JavaScript.
  render() {
    // Destructure the props passed to the component for easier access.
    // These props include date, max (maximum temperature), min (minimum temperature),
    // code (weather code), and isToday (boolean indicating if the day is today).
    const { date, max, min, code, isToday } = this.props;

    // Return the JSX that defines the component's UI.
    return (
      <li className="day">
        {/* Display the weather icon by calling the getWeatherIcon function with the weather code. */}
        <span>{getWeatherIcon(code)}</span>

        {/* Display the day of the week, using 'Today' if isToday is true, otherwise format the date. */}
        <p>{isToday ? "Today" : formatDay(date)}</p>

        {/* Display the temperature range for the day, with the minimum temperature floored and the maximum temperature ceiled. */}
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}

// Export the Day component as the default export, allowing it to be imported elsewhere.
export default Day;
