import React from 'react'
import { Link } from 'react-router'
import About from './About'
import Loader from './Loader'
import Nav from './Nav'

var createReactClass = require("create-react-class")


export default createReactClass({
  render() {
    return(
      <main className="main_wrapper">
        <Loader/>
        <Nav/>
        <About/>
      </main>
    )
  }
})
