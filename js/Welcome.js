import React from 'react'
import { Link } from 'react-router'
import About from './About'
var createReactClass = require("create-react-class")
var FontAwesome = require('react-fontawesome');
export default createReactClass({
  render() {
    return(
      <main className="main_wrapper">
        <About/>
      </main>
    )
  }
})
