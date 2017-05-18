import React from 'react'
import { Link } from 'react-router'
import About from './About'
import Nav from './Nav'

var createReactClass = require("create-react-class")


export default createReactClass({
  render() {
    return(
      <main className="main_wrapper">
        <Nav/>
        <About/>
      </main>
    )
  }
})
