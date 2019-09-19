/* Add all the required libraries*/
var mongoose = require('mongoose')
var Listing = require('./ListingSchema.js')
var config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name:"Library West"}, function(err, tempListing){
    if (err) throw err;
    console.log(tempListing);
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.find({code:"CABL"},function(err, tempListing){
    if(err) throw err;

    tempListing.forEach(function(value){
      value.remove(function(err){
        if (err) throw err;
        console.log(tempListing);
      })
    })
  })
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */

  Listing.find({code:'PHL'}, function(err, tempListing){
    if (err) throw err;
    tempListing.forEach(function(value){
      value.address = '1953 Museum Rd, Gainesville, FL 32603';
      value.save(function(err){
        if(err) throw err;
        console.log(tempListing);
      })     
    })
  })
};

var retrieveAllListings = function() {
  Listing.find({},function(err, tempListing){
    if (err) throw err;
    console.log(tempListing);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
