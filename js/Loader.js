import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")


const runLoader = () => {
  setTimeout(function(){ document.body.className+="loaded"; }, 2000);
}
window.onload = runLoader;

export default createReactClass({

  render() {
    return (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    )
  }
})
