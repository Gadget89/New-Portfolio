import React from 'react'
import { Link } from 'react-router'
var createReactClass = require("create-react-class")
var slideIndex = 1;

export default createReactClass({
  plusDivs() {
    slideIndex++
    if (slideIndex > 7){
      slideIndex = 1
    }
    this.showDivs(slideIndex);
  },

  prevDivs() {
    slideIndex--
    if (slideIndex > 7){
      slideIndex = 1
    }
    this.showDivs(slideIndex);
  },

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  },

  render() {
    return (
      <section>
        <h1
          className="heading_txt">
          portfolio
        </h1>
        <article className="portfolio_wrapper">
          <img
            className="hex_overlay"
            src="/styles/new_hex7.png">
          </img>
          <div
            className="wrapper">
          <div
            className="mySlides first_photo"
            id="image">
            <a
              target="_blank"
              href="https://the-gist-app.herokuapp.com/#/">
              <div
                className="projOverlay_left">
                <img
                  className="projOverlay_image"
                  className="slide_image"
                  src="/styles/book1.jpg">
                </img>
              </div>
            </a>
            <div
              className="caption">
              <a
                className="article_title-left"
                target="_blank"
                href="https://the-gist-app.herokuapp.com/#/">
                The Gist App
              </a>
              <p
                className="article_text">
                I created an app for the developers toolbelt to help keep their notes organized.
              </p>
              <p
                className="article_text">
                After successfully logging in, a user is able to make a note type selection, give it a title, add a URL and create a note. The new note is added to the corresponding tab for easy reference. This app helps prevent information overload from web research and makes it easy to take notes for developers.
              </p>
              <p
                className="article_text">
                Technologies: HTML, CSS, React.js, Firebase and Heroku
              </p>
            </div>
          </div>
          <div
            className="mySlides"
            id="image">
            <a
              target="_blank"
              href="https://sudoku-puzzle-sa.herokuapp.com/#/">
              <div
                className="projOverlay_left">
                <img
                  className="projOverlay_image"
                  className="slide_image"
                  src="/styles/laptop2.jpg">
                </img>
              </div>
            </a>
            <div
              className="caption">
              <a
                className="article_title-left"
                target="_blank"
                href="https://sudoku-puzzle-sa.herokuapp.com/#/">
                Sudoku Solver
              </a>
              <p
                className="article_text">
                Do you ever play sudoku? This app was created to solve sudoku puzzles. It is a great tool help you out when you get stuck or it can be used to impress your friends with how fast you can solve a puzzle!
              </p>
              <p
                className="article_text">
                You simply put in the given numbers from your puzzle and it will fill in all the empty cells. It can also identify if a puzzle you entered can be solved. Finally, it displays how many numbers it attempted for each cell.
              </p>
              <p
                className="article_text">
                Technologies: HTML, CSS, React.js and Heroku
              </p>
            </div>
          </div>
          <div
            className="mySlides" id="image">
            <a
              target="_blank"
              href="https://client-week-project.herokuapp.com/">
              <div
                className="projOverlay_left">
                <img
                  className="projOverlay_image"
                  className="slide_image" src="/styles/basketball.jpg">
                </img>
              </div>
            </a>
            <div
              className="caption">
              <a
                className="article_title-right"
                target="_blank"
                href="https://client-week-project.herokuapp.com/">
                All Things Spurs
              </a>
              <p
                className="article_text">
                This was a the first group project I was a part of during my time at The Iron Yard. The objective was to create a Spurs blog as a team using all of the technologies we had aquired in the first half of the cohort. It was a great expierience to get adjusted to working on a development team. We used Trello as a management tool and Github for version control.
              </p>
              <p
                className="article_text">
                Technologies: HTML, CSS, React.js, Jasmine, Travis and Heroku
              </p>
            </div>
            </div>
            <div
              className="slider_nav">
              <span
                className="slide_left">
                <a
                  className="nav_button"
                  target="_blank"
                  onClick={this.prevDivs}>
                  slide left
                </a>
              </span>
              <span
                className="slide_right">
                <a
                  className="nav_button"
                  target="_blank"
                  onClick={this.plusDivs}>
                  slide right
                </a>
              </span>
            </div>
          </div>
        </article>
      </section>
    )
  }
})
