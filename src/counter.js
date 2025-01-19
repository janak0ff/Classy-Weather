import React from "react"; // Import the React library, which is essential for creating React components

// Define a React component named 'Counter' by extending React.Component
class Counter extends React.Component {
  // The constructor is used to initialize state and bind methods
  constructor(props) {
    super(props); // Call the parent class's constructor to initialize the component
    this.state = { count: 5 }; // Initialize the component's state with a 'count' property set to 5
    this.handleDecrement = this.handleDecrement.bind(this); // Bind 'this' to the 'handleDecrement' method
    this.handleIncrement = this.handleIncrement.bind(this); // Bind 'this' to the 'handleIncrement' method
  }

  // Method to decrement the count
  handleDecrement() {
    // Use 'setState' to update the component's state, decreasing 'count' by 1
    this.setState({ count: this.state.count - 1 });
  }

  // Method to increment the count
  handleIncrement() {
    // Use 'setState' to update the component's state, increasing 'count' by 1
    this.setState({ count: this.state.count + 1 });
  }

  // The render method is responsible for returning the JSX to be displayed
  render() {
    const date = new Date("july 10 2027"); // Create a new Date object set to a specific date
    date.setDate(date.getDate() + this.state.count); // Increment the date by the current 'count' value

    // Return JSX that defines the component's UI
    return (
      <div>
        {/* Button to decrement the count, triggering 'handleDecrement' when clicked */}
        <button onClick={this.handleDecrement}>-</button>

        {/* Display the current date and count */}
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>

        {/* Button to increment the count, triggering 'handleIncrement' when clicked */}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

// Export the Counter component as the default export
export default Counter;
