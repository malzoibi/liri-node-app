//Require env file
require("dotenv").config();

//Link key page
var keys = require("./keys.js")

//Initialize fs
var fs = require("fs");

//Initilaize axios
var axios = require("axios");

//Initialize spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


//User input
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

//Liri commands
function command(userInput){
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


//Spotify Search
function spotifyThisSong(){
  console.log("Searching for...");
  spotify.search({ 
    type: 'track', 
    query: userQuery,
    limit: 1}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      let trackArr = data.tracks.items;

        for (i = 0; i < trackArr.length; i++) {
          console.log('--------------------------------------------------')
          console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
          console.log("Song Name: " + data.tracks.items[i].name);
          console.log("Album: " + data.tracks.items[i].album.name);
          console.log("Spotify Link: "+ data.tracks.items[i].external_urls.spotify);
        }; 
    });
  }

  //Movie Search 
  function movieThis(){console.log("Searching for...");
  }

  command(userInput); 