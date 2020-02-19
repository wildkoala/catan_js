/*
FILE PURPOSE: 
  1. This file contains all the unit tests that allow us to check each portion of our
  code.
*/

/*
// import the classes module
var my_classes = require('./classes.js');
var Player = my_classes.player;

// creates some players
var player1 = new Player("Twiggy");
var player2 = new Player("Anthony");

console.log(player1.p_name);
console.log(player2.p_name);
//player1.present();
//player2.present();
*/

// import the classes module
var my_classes = require('./classes.js');
//var Player = my_classes.player;

// creates some players
var player1 = new my_classes.player("Twiggy");
var player2 = new my_classes.player("Anthony");

player1.present();
player2.present();
//console.log(player1.p_name);
//console.log(player2.p_name);





