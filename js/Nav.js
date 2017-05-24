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
                href="https://drive.google.com/file/d/0B52FYDuPpv0fdjAzcnJSSUttMFU/view?usp=sharing"
                target="_blank"
                title="Résumé">
                résumé
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="https://form.jotform.us/70884700284156"
                target="_blank"
                title="Contact">
                contact
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                id="disabled_element"
                title="Skills">
                skills
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                id="disabled_element"
                title="Portfolio">
                portfolio
              </a>
            </li>
            <li>
              <a
                className="nav_button"
                href="#"
                id="disabled_element"
                title="About">
                about
              </a>
            </li>
          </ul>
        </header>
      </section>
    )
  }
})
