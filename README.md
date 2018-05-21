# book-app

# Lab 11-

**Authors**: Tama Rushin, Jay Silvas, Mahdu
**Version**: 1.0.0

## Overview
Create an organization on Github to hold your client-side and server-side repos. Utilizes a reliable, scalable app hosing service to allow access and shareability when on the go. Deploy the backend API to a hosting service so tht other developers may build their own frontend interfaces for this applicaiton. Compile the Handlebars template. For testing purposes, include a temporary route with a request/response function. connect a PORT. Utilizes the IIFE'S so that the function calls are executed on page load. Use promises to sql base. allows a client to have the ability to request all resources from the database through a RESTful endpoint. Style to make a clean app.

## Getting Started
Clone down repo. Install express and pg. Install nodemon (if needed) Run app using nodemon. Setup sql database.

## ENV VARS
export PORT=3000
export CLIENT_URL=http://localhost:8080
Mac:     export DATABASE_URL=postgres://localhost:5432/books_app
Windows: export DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/books_app

## Repositories
README.md
.gitignore
.eslintrc.json

## Architecture
Languages: HTML5, CSS3, Javascript
Libraries: jquery
Pacakages: node, express, pg, json
Technologies: Mac OS, Git, GitHub, Heroku
Database system: PostgreSQL


## Change Log
### 04-16-18
1. First, we set up the scaffold of our project
2. Then, we created an organization to hold client-side and server-side repositories.
3. We updated index.html and admin.html to access our Article.all data
4. We updated Article.numWordsAll to Calculate all words.
We updated Article.allAuthors to Calculate total authors.
We updated Article.numWordsByAuthor to calculate total words for each author
5. Used nodemon.js to see our blog in the browser and confirm it was loading stats.
## Credits and Collaborations
Tama, Jay and Madhu, MDN, Code Fellows 301n10 instructional team and TA
