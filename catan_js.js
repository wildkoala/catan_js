class Player {
  constructor(name) {
    this.p_name = name;
    this.p_hand = NULL; // Gonna be an array
    this.num_cards = NULL;
    this.p_color = NULL;
    this.p_victory_pts = NULL;
    this.p_dev_cards = NULL;
  }
  present() {
    return "My name is " + this.p_name;
  }
  show_hand(){
    for (i = 0; i < p_hand.length; i++) {
      print(p_hand[i]); // this is going to have t
    }
  }
}

// Card is done
class Card {
  constructor(name) {
    this.resource = NULL;
  }
  present() {
    return "Resource:  " + this.resource;
  }
}

class Board {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Tile {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

// objects do not need declaration as var (seen as a container for variables)
my_player = new Player("Twiggy");

// their methods can be accessed like this.
my_player.present();
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