
/*
FILE PURPOSE: 
  1. The functions contained in this file will directly pertain to the game loop.
 */


/*
BUG SECTION:
  1. Printing a tile gets messed up when there's a double digit number. Need padding!
  2. Pressing Enter on option screen will automatically go to the next player's turn. Need only 0 input to end turn
  3. "prompt" needs to be used properly, using the .start() method.
  */

/* Requirements and Exports */
var my_classes = require('./classes.js');
var items = require('./build_items.js');
var standard_input = process.stdin;



// Set input character encoding.
standard_input.setEncoding('utf-8');

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

  
  //prompt("Press Enter to Roll Die\n");
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


///////////////////////////
//
//  This is the start of the game
//
//////////////////////////

// A lot of this should be moved into the testing.js file.

var num_players;

num_players = prompt("Press Enter the number of players\n");

var player_list = [num_players];


// the why robber() is written, it is dependent on player_list being defined
// in the global scope. So it must be placed after the player_list definition
// in the code and makes it kind of messy. Maybe should take a player_list argument?
function robber() {
  console.log("Robber has been called\n");

//Loop checks to see if any players have 7 or more cards
  for (var i = 0; i < player_list.length; i++) {
    if (player_list[i].p_hand.length >= 7) {
      console.log(player_list[i].p_name + " Please discard half your cards");
    }
  }
}

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

We need to figure out how we're going to describe where people want to place their roads and where they want to place their settlements
I think we should specify which corners of a tile are open with "O" for open.
I think we need some colors in this game, even though its a terminal... can we do that? 
How else will we specify who has a corner? Is the first letter of the player name okay? What if there are two players with the same name?
Wouldn't that be confusing with the resources?

What will clients send?

How do i draw multiple tiles? I think I might just have 2 defined board sizes, and just populate the board randomly at the start of the game.


How do i 


*/

module.exports.roll_dice = roll_dice;