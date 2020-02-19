<<<<<<< HEAD
/*
FILE PURPOSE: 
  1. The functions contained in this file will directly pertain to the game loop.
 */


/*
BUG SECTION:
  1. Printing a tile gets messed up when there's a double digit number. Need padding!
  2. Pressing Enter on option screen will automatically go to the next player's turn. Need only 0 input to end turn
*/


/* FUNCTION DECLARATIONS */

function roll_dice(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    return x + y;
}


function increment_player_turn() {
  current_player_turn = (current_player_turn + 1) % num_players;
}


function player_menu() {
  console.log(
    'Here are your options: \n' +
    '   1. View your hand \n' +
    '   2. Buy a road \n' +
    '   3. Buy a settlement\n' +
    '   4. Upgrade a settlement to a city\n' +
    '   5. Buy a development card\n' +
    '   6. Trade with a player\n' +
    '   7. Trade with the bank (4 for 1)\n' +
    '   8. Trade using a port\n' +
    '   0. End Turn\n'
  )
}

function player_turn() {
  prompt("Press Enter to Roll Die\n");
  var roll = roll_dice();
  console.log(roll + " has been rolled\n");

  //Check to see if robber() is called
  if (roll == 7)
    robber();

  //Player Selects an Option
  var selection = -1;
  do {
    player_menu();
    selection = prompt("Please Select One");

    if (selection == 1) {
      player_list[current_player_turn].show_hand();
    }
    else if (selection == 2) {
      build_road(player_list[current_player_turn])
    }
    else if (selection == 3) {
      build_settlement(player_list[current_player_turn]);
    }
    else if (selection == 4) {
      build_city(player_list[current_player_turn]);
    }
    else if (selection == 5) {
      build_dev_card(player_list[current_player_turn]);
    }
  } while (selection != 0);
}

function robber() {
  console.log("Robber has been called\n");

//Loop checks to see if any players have 7 or more cards
  for (var i = 0; i < player_list.length; i++) {
    if (player_list[i].p_hand.length >= 7) {
      console.log(player_list[i].p_name + " Please discard half your cards");
    }
  }
}

///////////////////////////
//
//  This is the start of the game
//
//////////////////////////

// A lot of this should be moved into the testing.js file.

var num_players;

num_players = prompt("Press Enter the number of players\n");

var player_list = [num_players];

// objects do not need declaration as var (seen as a container for variables)
for (var i = 0; i < num_players; i++) {
  var name = prompt("Please Enter Player " + (i + 1) + "'s Name");
  player_list[i] = new Player(name);
}

var points_to_win;

points_to_win = prompt("Press Enter the Amount of Points Required to Win\n");

var winner = 0;
var current_player_turn = 0;

my_card = new Card("B");
player_list[0].add_card(my_card);
player_list[0].add_card(my_card);
player_list[0].add_card(my_card);

my_card2 = new Card("L");
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);

my_card3 = new Card("C");
player_list[0].add_card(my_card3);


do {
  
  if (player_list[current_player_turn].show_victory_pts() >= points_to_win) {
    console.log(player_list[current_player_turn].present() + " wins");
    winner = 1;
  }

  console.log(player_list[current_player_turn].present() + " it is your turn\n");

  player_turn();
//Increments to the next player
  increment_player_turn();

  //Debug Purpose
  //console.log(selection + "\n");
} while(winner == 0);





//If 7 is rolled then robber effects players with more than 7 cards and blocked tile

/* PSEUDO CODE */

//my_tile = new Tile("W", 5);
//console.log(my_tile.present());
// their methods can be accessed like this.
//card.present();

/*
console.log(
`   _____
  /     \\ 
 /       \\ 
(    ` + "W" + `    )
 \\       /
  \\_____/`);
/*
function main(){
	main_menu(num_players, points_to_win)
	create_board(size) // Create the board itself, with tiles that have a letter for the resource and number for the probability
	display_board(board) // Draw the board on screen
	setup_board() // players pick their initial locations and get their resources
	int winner = 0;
	while (winner != 1){
		player_turn()
		winner = check_win()
	}
	print("Player %s is the winner", player)
}
function player_turn(){
	print("press r and hit enter to roll.")
	int rolled;
	rolled = roll_dice();
	if rolled == 7{
		robber()
	}
	else{
		give_out_resources() // give everyone their cards
	}
	int user_response;
	user_response = player_menu(); // show them their options now.
	if user_response == 0{
		show_hand(player)
	}
}
function player_menu(){
	print:
		1. View your hand
		2. Buy a road
		3. Buy a settlement
		4. Upgrade a settlement to a city
		5. Buy a development card
		6. Trade with a player
		7. Trade with the bank (4 for 1)
		8. Trade using a port
}
function show_hand(player){}
function robber(){}
*/

=======
/*
BUG SECTION:
  1. Printing a tile gets messed up when there's a double digit number. Need padding!
  2. Pressing Enter on option screen will automatically go to the next player's turn. Need only 0 input to end turn
*/


class Player {
  constructor(name) {
    this.p_name = name;
    this.p_hand = []; // Gonna be an array
    this.p_color = null;
    this.p_victory_pts = null;
    this.p_dev_cards = []; // Gonna be an array
  }
  present() {
    return "My name is " + this.p_name;
  }
  show_hand(){
    var i;
    for (i = 0; i < this.p_hand.length; i++) {
      this.p_hand[i].present(); // this calls the method in the Card class
    }
  }
  add_card(new_card){
    this.p_hand.push(new_card);
  }
	//returns how many victory points a player has
  show_victory_pts() {
    return this.p_victory_pts;
  }
}

// Card is done
class Card {
  constructor(resource) {
    this.resource = resource;
  }
  present() {
    console.log("Resource: " + this.resource);
  }
}

class Board {
  constructor(size) {
    this.size = size;
  }
  present() {
    console.log("This board is " + this.size + " tiles large");
  }
}

class Tile {
  constructor(resource, number) {
    this.resource = resource;
    this.number = number;
  }
  present() {
    const format = `   _____
  /     \\ 
 /       \\ 
(    ` + this.resource + `    )
 \\   ` + this.number + `   /
  \\_____/`;
    return format;
  }
}

function roll_dice(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    return x + y;
}

// Possible resources: Ore, Wheat, Brick, Lumber, Sheep
function random_tile(){
  var tile_r;
  var tile_n;

  // Determine the resource
  var x = Math.floor((Math.random() * 5) + 1); // gives random number between 1 and 5
  if (x == 1){
    tile_r = "O";
  }
  if (x == 2){
    tile_r = "W";
  }
  if (x == 3){
    tile_r = "B";
  }
  if (x == 4){
    tile_r = "L";
  }
  if (x == 5){
    tile_r = "S";
  }

  // Determine the number
  tile_n = roll_dice(); 
  while(tile_n == 7){
    tile_n = roll_dice();
  }
  rand_tile = new Tile(tile_r, tile_n);
  //return rand_tile;
  console.log(rand_tile.present());
}


///////////////////////////
//
//  This is the start of the program
//
//////////////////////////

var num_players;

num_players = prompt("Press Enter the number of players\n");

var player_list = [num_players];

// objects do not need declaration as var (seen as a container for variables)
for (var i = 0; i < num_players; i++) {
  var name = prompt("Please Enter Player " + (i + 1) + "'s Name");
  player_list[i] = new Player(name);
}

var points_to_win;

points_to_win = prompt("Press Enter the Amount of Points Required to Win\n");

var winner = 0;
var current_player_turn = 0;

my_card = new Card("B");
player_list[0].add_card(my_card);
player_list[0].add_card(my_card);
player_list[0].add_card(my_card);

my_card2 = new Card("L");
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);
player_list[0].add_card(my_card2);

my_card3 = new Card("C");
player_list[0].add_card(my_card3);


do {
  
  if (player_list[current_player_turn].show_victory_pts() >= points_to_win) {
    console.log(player_list[current_player_turn].present() + " wins");
    winner = 1;
  }

  console.log(player_list[current_player_turn].present() + " it is your turn\n");

  player_turn();
//Increments to the next player
  increment_player_turn();

  //Debug Purpose
  //console.log(selection + "\n");
} while(winner == 0);

//Function increments who's turn it is
function increment_player_turn() {
  current_player_turn = (current_player_turn + 1) % num_players;
}


//Displays the options for the player to do
function player_menu() {
  console.log(
    'Here are your options: \n' +
    '   1. View your hand \n' +
    '   2. Buy a road \n' +
    '   3. Buy a settlement\n' +
    '   4. Upgrade a settlement to a city\n' +
    '   5. Buy a development card\n' +
    '   6. Trade with a player\n' +
    '   7. Trade with the bank (4 for 1)\n' +
    '   8. Trade using a port\n' +
    '   0. End Turn\n'
  )
}

function player_turn() {
  prompt("Press Enter to Roll Die\n");
  var roll = roll_dice();
  console.log(roll + " has been rolled\n");

  //Check to see if robber() is called
  if (roll == 7)
    robber();

  //Player Selects an Option
  var selection = -1;
  do {
    player_menu();
    selection = prompt("Please Select One");

    if (selection == 1) {
      player_list[current_player_turn].show_hand();
    }
    else if (selection == 2) {
      build_road(player_list[current_player_turn])
    }
    else if (selection == 3) {
      build_settlement(player_list[current_player_turn]);
    }
    else if (selection == 4) {
      build_city(player_list[current_player_turn]);
    }
    else if (selection == 5) {
      build_dev_card(player_list[current_player_turn]);
    }
  } while (selection != 0);
}

//If 7 is rolled then robber effects players with more than 7 cards and blocked tile
function robber() {
  console.log("Robber has been called\n");

//Loop checks to see if any players have 7 or more cards
  for (var i = 0; i < player_list.length; i++) {
    if (player_list[i].p_hand.length >= 7) {
      console.log(player_list[i].p_name + " Please discard half your cards");
    }
  }
}

/* START OF TWIGGY */
function has_needed_resources(item, a_player){
  if (item == "road"){
    // Check that they have 1 brick and lumber
    var b = 0;
    var l = 0;
    var i;
    for (i = 0; i < a_player.p_hand.length; i++){
      if(a_player.p_hand[i].resource == "B"){
        b++;
      }
      if(a_player.p_hand[i].resource == "L"){
        l++;
      }
    }
    if (b > 0 && l > 0){
      return true;
    }
    else{
      return false;
    }
  }
  else if (item == "settlement"){
    // Check that they have 1 sheep, wheat, brick, and lumber
    var b = 0;
    var l = 0;
    var s = 0;
    var w = 0;
    var i;
    for (i = 0; i < a_player.p_hand.length; i++){
      if(a_player.p_hand[i].resource == "B"){
        b++;
      }
      if(a_player.p_hand[i].resource == "L"){
        l++;
      }
      if(a_player.p_hand[i].resource == "W"){
        w++;
      }
      if(a_player.p_hand[i].resource == "S"){
        s++;
      }
    }
    if (b > 0 && l > 0 && w > 0 && s > 0){
      return true;
    }
    else{
      return false;
    }
  }
  else if (item == "city"){
    // Check that they have 2 wheat, 3 ore
    var o = 0;
    var w = 0;
    for (i = 0; i < a_player.p_hand.length; i++){
      if(a_player.p_hand[i].resource == "O"){
        o++;
      }
      if(a_player.p_hand[i].resource == "W"){
        w++;
      }
    }
    if (o > 2 && w > 1){
      return true;
    }
    else{
      return false;
    }
  }
  else if (item == "dev_card"){
    // Check they have 1 sheep, ore and wheat
    var o = 0;
    var w = 0;
    var s = 0;
    for (i = 0; i < a_player.p_hand.length; i++){
      if(a_player.p_hand[i].resource == "O"){
        o++;
      }
      if(a_player.p_hand[i].resource == "W"){
        w++;
      }
      if(a_player.p_hand[i].resource == "S"){
        s++;
      }
    }
    if (o > 0 && w > 0 && s > 0){
      return true;
    }
    else{
      return false;
    }
  }
}

// partially implemented
function build_road(a_player){
  var have_resources = has_needed_resources("road", a_player);
  if (have_resources){
    console.log("building a road");
  }
  else{
    console.log("Not enough resources to build a road!!");
  }
  // Space is open
  // It's connected to another road or settlement
}

// partially implemented
// the intial setup will probably not work with this function.
function build_settlement(a_player){
  var have_resources = has_needed_resources("settlement", a_player);
  if (have_resources){
    console.log("building a settlement");
  }
  else{
    console.log("Not enough resources to build a settlement!!");
  }
  // Space is open
  // no one is on an adjacent territory
}

// partially implemented
function build_city(a_player){
  var have_resources = has_needed_resources("city", a_player);
  if (have_resources){
    console.log("building a city");
  }
  else{
    console.log("Not enough resources to upgrade into a city!!");
  }
  // Have a settlement
  // It is a settlement, and not anything else
}

// partially implemented
function build_dev_card(a_player){
  var have_resources = has_needed_resources("dev_card", a_player);
  if (have_resources){
    console.log("here's a dev card");
  }
  else{
    console.log("Not enough resources to get dev card!!");
  }
}
//my_tile = new Tile("W", 5);
//console.log(my_tile.present());
// their methods can be accessed like this.
//card.present();

/*
console.log(
`   _____
  /     \\ 
 /       \\ 
(    ` + "W" + `    )
 \\       /
  \\_____/`);
/*
function main(){
	main_menu(num_players, points_to_win)
	create_board(size) // Create the board itself, with tiles that have a letter for the resource and number for the probability
	display_board(board) // Draw the board on screen
	setup_board() // players pick their initial locations and get their resources
	int winner = 0;
	while (winner != 1){
		player_turn()
		winner = check_win()
	}
	print("Player %s is the winner", player)
}
function player_turn(){
	print("press r and hit enter to roll.")
	int rolled;
	rolled = roll_dice();
	if rolled == 7{
		robber()
	}
	else{
		give_out_resources() // give everyone their cards
	}
	int user_response;
	user_response = player_menu(); // show them their options now.
	if user_response == 0{
		show_hand(player)
	}
}
function player_menu(){
	print:
		1. View your hand
		2. Buy a road
		3. Buy a settlement
		4. Upgrade a settlement to a city
		5. Buy a development card
		6. Trade with a player
		7. Trade with the bank (4 for 1)
		8. Trade using a port
}
function show_hand(player){}
function robber(){}
*/
>>>>>>> 4b5da0c052eea0ec27031b28b995d2ae61ee4ef2
