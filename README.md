# dwi-coding-challenge

Take-home coding challenge for Direct Wines

## Workflow

All submissions should include source code and a readme that explains how their reviewers should download and run the code. Please provide a link to your work hosted on GitHub or Bitbucket (your choice).

### Dev Setup

- Create a local dev server using Webpack
- Use the latest version of React v16 (hooks are a plus)
- Use Emotion for CSS in React Style components - https://emotion.sh/docs/styled
- Create a basic layout that matches the landing page design included in the repo
- Do not use Create React App (too much boilerplate)

## Front-end challenge #1: Build a product listing web component based on a Direct Wines Offer.

This should outline how comfortable you are with displaying data from a REST API.

### Sample Landing Page

https://www.wsjwine.com/discovery-club

- Please re-create the product listing with radio buttons

### Requirements

- On page load, the REST API for the offer should be called using this code "0033008".
- There will be 3 products inside of the mainItems array
- Loop through the items and pull out the productName, numberOfBottlers and Price and display it on the page to look like the below

## Front-end challenge #2: Build a ZIP code autocomplete web component

This should outline how comfortable you are with building a web component that will dynamically changed based on inputs from the user.

### Requirements

- The city and state fields should be hidden by default
- When the user enters their zip code, a call to the REST API should happen and pass along the zip code into the URL
- The API will respond with the city / state values
- The city and state fields should show on the page (slide down) and the values should be filled out
- If the user selects CT as in the example below, an additional message should appear.
- If a NY zip code is entered, the message below should be hidden and only the city and state should be shown alongside the zip code.

## Resources

### Offer API

GET Request - https://www.wsjwine.com/api/offer/0033008

### ZIP Code API

GET Request - https://www.wsjwine.com/api/address/zipcode/12345

# Quickstart

Install dependencies
npm install

Serve on localhost:8081
npm start

Build for production
npm run build
