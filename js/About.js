import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({

  render() {
    return (
      <section>
        <section
          className="landing">
        </section>
        <img
          className="hexBack"
          src="/styles/grid.png">
        </img>
        <h1
          className="landingName">
          nicolas roybal
        </h1>
        <h2 className="landingTitle">
          front end developer
        </h2>
        <section
          alt="Photo of Nicolas Roybal"
          className="hexagonPhotoWrapper"
          title="Nicolas Roybal">
          <div
            className="hexagonPhoto">
            <div
              className="hexTopPhoto">
            </div>
            <div
              className="hexBottomPhoto">
            </div>
          </div>
        </section>
      </section>
    )
  }
})
