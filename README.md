# Week 5 - FAMK - Backend API call page

[![Travis Build Status](https://travis-ci.com/fac18/week5-famk-backend-api.svg?branch=master)](https://travis-ci.com/fac18/week5-famk-backend-api) [![codecov](https://codecov.io/gh/fac18/week5-famk-backend-api/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week5-famk-backend-api)



Welcome to CryptWatch™!  Here you can check the current value of the most popular cryptocurrencies in USD.  CryptWatch™ is powered by:

<img src="https://imgur.com/h3vwxjT.jpg" width="200" height="60">


### Installation Guide

1. Clone this repo

2. Run `npm install` in the command line

3. Run `npm start` to power up a local server

4. See site on localhost:3000 in your browser

This project uses an open API, so there is no need to setup an API key.

### Planning Process and Architecture

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

### Visual Design

We decided that our design should be 'modern' to reflect the nature of cryptocurrencies, with a simple colour scheme

We chose a background image of a black and white image shown in binary 0s and 1s to give the idea of computers/cryptography.

### Tests

(Add screenshot of tests passing)

Our current code coverage status: [![codecov](https://codecov.io/gh/fac18/week5-famk-backend-api/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week5-famk-backend-api)

The missing 5% (as of writing) is the lines of code which deal with handling server errors (status 500).  As far as we know, it is not possible to test for these.

### Accessibility

(Add screenshot of accessibility report)

