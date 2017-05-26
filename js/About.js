import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")

export default createReactClass({

  render() {
    return (
      <section>
        <h1 className="heading_txt">about</h1>
        <article className="about_wrapper">
          <p className="">
            I began my journey to become a software developer in the Fall of 2016. I've had the great privilege to learn from accomplished instructors at The Iron Yard and I graduated from their Front-End Engineering program in February 2017.
          </p>
          <p className="">
            After gaining a solid foundation, I am excited for this lifetime adventure. My curiosity and passion for code continue driving me to keep learning as much as I can.
          </p>
          <p className="">
            I would like to join a great team and be involved in projects that I can be proud of. I invite you to check out my projects and please feel free to
              <a href="https://form.jotform.us/70884700284156"
                target="_blank"
                className="myContactInfo"> contact me.
              </a>
            </p>
        </article>

      </section>
    )
  }
})
