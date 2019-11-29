# Week 5 - FAMK - Backend API call page

[![Travis Build Status](https://travis-ci.com/fac18/week5-famk-backend-api.svg?branch=master)](https://travis-ci.com/fac18/week5-famk-backend-api) [![codecov](https://codecov.io/gh/fac18/week5-famk-backend-api/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week5-famk-backend-api)



👋 Welcome to CryptWatch™!  Here you can check the current value of the most popular cryptocurrencies in USD.  CryptWatch™ is powered by:

<img src="https://imgur.com/pi13DmO.jpg" width="200" height="60">

We are:
* Jamie :last_quarter_moon_with_face:
* Pat :cat2:
* Judith :water_buffalo:
* Gillian :penguin:

### 💾 Installation Guide

1. Clone this repo

2. Run `npm install` in the command line

3. Run `npm start` to power up a local server

4. See site on localhost:3000 in your browser

This project uses an open API, so there is no need to setup an API key.

### :triangular_ruler: Planning Process and Architecture

Once we'd decided on our project idea, we decided to draw a diagram of how information would flow through the different files:
1. The user enters data in the GUI (index.html)
2. the front-end script (main.js) makes a request to our back-end scripts (via handlers.js etc)
3. these make a request to the CoinGecko API
4. the response from CoinGecko is flowed back to the front-end
5. the front-end script updates the browser 

We then made a big ol' to-do list for all the tasks

<img src="https://i.imgur.com/yARMsii.jpg" width="500" height="600">

We also sketched a quick mockup of the page layout

<img src="https://i.imgur.com/VBFJqiW.jpg" width="400" height="400">

### :checkered_flag: On your marks, get set, go!
On Day 1:
* We mobbed the initial set up of the project, including the HTML
* Judith and Gillian started writing the server/router/handlers side of things...
* ...while Jamie and Pat set out on the beginnings of the front end scripting including TESTS!


<img src="https://imgur.com/inAunBp.jpg" width="533" height="300">

On Day 2:
* Judith and Pat got stuck into the front-end scripts, in particular the API call to the back end
* Jamie and Gillian finished the back end parts and wrote some very super super tests
* Judith and Pat ran into some weird problems with handling the API response and managing the formatting of the timestamp, which caused them some headaches
* But they managed to get it all up and working, and added some stratospheric DOM manipulation
* Jamie was the CSS master, with Pat later adding some expert upgrades
* Jamie and Gillian worked on the bits and pieces to get the project deployed (Travis, Codecov, Heroku)... and got the all important *badges*!

### :zap:Visual Design

We decided that our design should be 'modern' to reflect the nature of cryptocurrencies, with a simple colour scheme

We chose a background image of a black and white image shown in binary 0s and 1s to give the idea of computers/cryptography.

### :ok: Tests

![tests](https://i.imgur.com/qlbqD8o.png)

Our current code coverage status: [![codecov](https://codecov.io/gh/fac18/week5-famk-backend-api/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week5-famk-backend-api)

The missing 5% is the lines of code which deal with handling server errors (status 500).  As far as we know, it is not possible to test for these.

### :eyeglasses: Accessibility

![accessibility](https://i.imgur.com/ZlQsk5v.png)

### :confounded: Problems

* Typos! <br>
![facepalm](https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif)
* Integrating Travis, Codecov, other testing modules.... lots of bits and pieces that were new for us and we didn't find the documentation super helpful for beginners

### :arrow_right: Future Improvements
* Add autocomplete functionality when typing cryptocurrency (similar to last week's project)
* Add ability to reverse conversion: e.g. from USD to Bitcoin
