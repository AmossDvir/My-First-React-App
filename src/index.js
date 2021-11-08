import React from "react";
import ReactDOM from "react-dom";
import Comment from './Comment'

const App = () => {
  return (
    <div className="ui container comments">
      <Comment authorName='Amoss' date='8/11' commentText='hi'></Comment>
      <Comment authorName='Amoss' date='8/11' commentText='hi'></Comment>
      <Comment authorName='Amoss' date='8/11' commentText='hi'></Comment>

  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
