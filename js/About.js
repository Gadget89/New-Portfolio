import React from 'react'
import ScrollMagic from 'ScrollMagic'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({

  render() {
    return (
      <article>
        <article className="landing"></article>
          <img className="hexBack" src="/styles/grid.png"></img>
            <section className="hexagonPhotoWrapper">
              <div className="hexagonPhoto">
                <div className="hexTopPhoto"></div>
                <div className="hexBottomPhoto"></div>
              </div>
            </section>

      </article>


    )
  }
})
