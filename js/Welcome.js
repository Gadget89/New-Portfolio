import React from 'react'
import { Link } from 'react-router'
import Loader from './Loader'
import Landing from './Landing'
import About from './About'
import Portfolio from './Portfolio'
import Nav from './Nav'

var createReactClass = require("create-react-class")

export default createReactClass({
  render() {
    return(
      <main className="main_wrapper">
        <Loader/>
        <Landing/>
        <About/>
        <Portfolio/>
        <Nav/>
      </main>
    )
  }
})
