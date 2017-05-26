import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({

  render() {
    return (
      <section>
        <h1 className="heading_txt">portfolio</h1>
        <article className="portfolio_wrapper">
          <img
            className="backdrop" src="/styles/me.jpg">
          </img>
          <img
            className="front" src="/styles/new_hex7.png">
          </img>
        </article>
      </section>
    )
  }
})
