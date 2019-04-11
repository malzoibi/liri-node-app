//Require env file
require("dotenv").config();

//Link key page
var keys = require("./keys.js")

//Initialize fs
var fs = require("fs");


//Initialize spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


//User input
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

//Liri commands
function command(userInput, userQuery){
    switch (userInput){
        case "concert-this":
        concertThis();
        break;
        
        case "spotify-this":
        spotifyThisSong();
        break;

        case "movie-this":
        movieThis();
        break;

        case "do-what-it-says":
        doThis();
        break; 

        default: 
        console.log("Result not available"); 
        break; 
    }
}

command(userInput, userQuery); 


//Spotify Search
function spotifyThisSong(){
    console.log("Searching for...");
spotify.search({ 
    type: 'track', 
    query: userQuery}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(JSON.stringify(data, null, 4)); 
});
}