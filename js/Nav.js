import React from 'react'
import ScrollMagic from 'ScrollMagic'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({

  render() {
    return (
      <section>
        <header className="nav_wrapper_background">
        </header>
        <h3 className="nav_name">
          nicolas roybal
        </h3>
        <header className="nav_wrapper">
          <ul>
            <li>
              <a
                className="nav_button"
                href="#"
                title="Résumé">
                Résumé
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                title="Skills">
                Skills
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                title="Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                title="Contact">
                Contact
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                title="About">
                About
              </a>
            </li>
          </ul>
        </header>
      </section>
    )
  }
})
