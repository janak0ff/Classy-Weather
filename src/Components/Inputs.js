// Input.js
import React from "react"; // Import the React library, which is essential for creating React components

// Define a React component named 'Input' by extending React.Component
class Input extends React.Component {
  // The render method is called when the component is rendered. It returns the JSX that is used to render the component.
  render() {
    return (
      <div>
        {/* // Render an input element with the type 'text' and placeholder 'Search from location...'.
        // The value of the input element is set to the location prop passed in from the parent component.
        // The onChange event handler is set to the onChangeLocation prop passed in from the parent component. */}
        <input
          type="text"
          placeholder="Search from location..."
          value={this.props.location}
          onChange={this.props.onChangeLocation}
        />
      </div>
    );
  }
}

// Export the Input component as the default export
export default Input;
