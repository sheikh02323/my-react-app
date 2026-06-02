import React, { Fragment } from "react";
function Greeting(props) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "white" }}>
        Hello, {props.name} {props.surname}!
      </h1>

      <h2 style={{ color: "white" }}>this text was not there</h2>
    </div>
  );
}

export default Greeting;
