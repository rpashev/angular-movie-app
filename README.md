# Movie App 
A responsive single page application allowing registered users to search for movies in an external database and organize the movies in userlists. This app is built with the MEAN stack - Mongo/Express/Angular/Node. Originally the app was built with React, but it was re-weritten in Angular. You can find the React version **[here](https://github.com/rpashev/react-movie-app-mern)**.

Here you can find the **[REST API](https://github.com/rpashev/rest-movie-apps)** that I have created for the app.  
The application uses **[OMDB Api](https://www.omdbapi.com/)** as a movie database.  
> Live demo **[HERE](http://www.movies-app.live/)**

## Table of Contents
* [General Info](#general-information)
* [Challenges](#challenges)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
Re-made in Angular, this app is the third version of an app I made for the [software academy](https://softuni.bg/) I attended. As a person that often watches movies it was an easy choice for me to make such an application. After gathering experience with Vue and React, I wanted to dive into Angular and reusing the same APIs and same UI design from the [React version](https://github.com/rpashev/react-movie-app-mern) made it easier to focus entirely on learning Angular. Building and reusing a [REST API](https://github.com/rpashev/rest-movie-apps) for different applications was also something I strived to do as I want to be able to create full-stack applications.


## Challenges
- Angular's different way of doing things in comparison with React/Vue was challenging to wrap my head around but extremely rewarding
- RxJS's learning curve is steep and understanding the different operators and generally how to use observables is a big challenge
- first time I was using TypeScript so naturally it was a fight with the compiler but I ended up being surprised at how useful TS can be
- working with an external api such as [OMDB Api](https://www.omdbapi.com/) was challenging as the API had limitations which I had to consider
- the combination of front end + external api + my own api made it challenging to come up with a solution that optimizes the data flow of the app


## Technologies Used  

### Front End
- Angular 13
- RxJS
- TypeScript
- SASS/SCSS

  
 ### Back End
 - Node
 - Express 
 - MongoDB
 - Mongo Atlas
 - Mongoose
 - JWT
 - Axios
 - Cloudinary
 - [OMDB Api](https://www.omdbapi.com/)


## Features
### Anonymous users are able to:
- view the homepage
- register
- login

### Authenticated users are able to:
- search for any movie/tv series by name from the "Database" page
- add movies to their "Watchlist" and "Watched" lists
- remove movies from their "Watchlist" and "Watched" lists
- view their "Watchlist" and "Watched" lists
- view a list of movies that other users have in their user lists from the "Explore" page
- view a "Details" page for each movie
- search movies by name in all lists
- view their "Profile Page" 
- upload an avatar
- logout


## Setup
### To get a local copy up and running follow these simple steps:

1. Make sure you have **`node`** and **`npm`** installed globally on your machine.  

3. Clone the repo  
    ### `git clone https://github.com/rpashev/angular-movie-app.git`  

3. Install NPM packages  
    ### `npm install`    
  
4. Run the app in development mode with hot reloading  
    ### `ng serve`  

5. You can view the app on [http://localhost:4200](http://localhost:4200)  
 
7. To build for production run the following command  
    ### `ng build`


## Room for Improvement
- create and implement a more professional design, especially for the User Profile page
- implement an "Add Review" feature on the front end which already exists on the [backend](https://github.com/rpashev/rest-movie-apps)
- front end pagination for "Watchlist" and "Watched"
- backend pagination for "Exlore" page as the list can practically consist of limitless items
- filters based on movie genre, IMDB rating and user rating for the Explore page (once Review feature which includes user rating is done)
- implement an "Auto Logout" functionality on JWT expiration
- improve user feedback when adding/removing movies from user lists from Details page
- spend more time on refactoring repetitive code
- break up some of the bigger components into smaller ones


## Contact
Created by me - feel free to contact me!

