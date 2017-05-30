import React from 'react'
import { Link } from 'react-router'
import Loader from './Loader'
import Landing from './Landing'
import SideNav from './SideNav'
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
        <SideNav/>
        <About/>
        <Portfolio/>
        <Nav/>
      </main>
    )
  }
})
