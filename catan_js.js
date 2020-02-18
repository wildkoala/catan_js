class Player {
  constructor(name) {
    this.p_name = name;
    this.p_hand = []; // Gonna be an array
    this.p_color = null;
    this.p_victory_pts = null;
    this.p_dev_cards = null;
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
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
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

// objects do not need declaration as var (seen as a container for variables)
my_player = new Player("WildKoala");
//console.log(my_player.present());


my_card = new Card("W");
my_player.add_card(my_card);

my_card2 = new Card("O");
my_player.add_card(my_card2);

my_card3 = new Card("C");
my_player.add_card(my_card3);

my_player.show_hand();

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
