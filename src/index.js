import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment authorName="Amoss" date="8/11" commentText="hi" avatar={faker.image.avatar()}></Comment>
      </ApprovalCard>

      <ApprovalCard>
        <Comment authorName="Amoss" date="8/11" commentText="hello" avatar={faker.image.avatar()}></Comment>
      </ApprovalCard>

      <ApprovalCard>
        <Comment authorName="Amoss" date="8/11" commentText="hi" avatar={faker.image.avatar()}></Comment>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
