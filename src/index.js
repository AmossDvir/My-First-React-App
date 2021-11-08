import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label htmlFor="inputName" className="labelName" style={{ color: 'blue' }}>
        Enter Your Name:
      </label>
      <input id="inputName"></input>
      <button style={{ backgroundColor: 'gray', color: 'white' }}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>