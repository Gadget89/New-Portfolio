import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({
  render() {
    return (
      <nav
        className="nav_bar">
        <a
          className="nav_button"
          target="_blank"
          title="GitHub"
          href="https://github.com/Gadget89">
          <div
            className="hex_top">
          </div>
          <div
            className="hex_middle">
            <i
              className="fa fa-github fa-2x">
            </i>
          </div>
          <div
            className="hex_bottom">
          </div>
        </a>

        <a
          className="nav_button"
          target="_blank"
          title="Medium"
          href="https://medium.com/@nicolas.roybal/past-future-f982a66d5a66#.m9baco2be">
          <div
            className="hex_top">
          </div>
          <div
            className="hex_middle">
            <i
              className="fa fa-medium fa-2x">
            </i>
          </div>
          <div
            className="hex_bottom">
          </div>
        </a>

        <a
          className="nav_button"
          target="_blank"
          title="Codepen"
          href="http://codepen.io/nickr999/">
          <div
            className="hex_top">
          </div>
          <div
            className="hex_middle">
            <i
              className="fa fa-codepen fa-2x">
            </i>
          </div>
          <div
            className="hex_bottom">
          </div>
        </a>
        <a
          className="nav_button"
          target="_blank"
          title="Linkedin"
          href="https://www.linkedin.com/in/nicolas-roybal-54bb1413a">
          <div
            className="hex_top">
          </div>
          <div
            className="hex_middle">
            <i
              className="fa fa-linkedin fa-2x">
            </i>
          </div>
          <div
            className="hex_bottom">
          </div>
        </a>
      </nav>
    )
  }
})
