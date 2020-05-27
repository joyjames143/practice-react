import React from "react";
import "./styles.css";
import Welcome from "./welcome"
import PropTypes from "prop-types"
import Greet from "./Greet"

export default function App() {
  return (
    <div className="App">
      <Welcome name="joyjames" age={21}/>
      <Welcome name="batman" age = {515}/>
      <Welcome name="superman"/>
      <Greet movie="good" name="kathi"/>
      <Greet movie="bad" name ="mari"/>
    </div>
  );
}

Welcome.propTypes={
  name:PropTypes.string.isRequired,
  age:PropTypes.number
}