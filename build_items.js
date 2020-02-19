/*
FILE PURPOSE: 
  1. This file contains all functions necessary to create a new "physical" item
    in catan
*/

// POSSIBLE RESOURCES: Ore, Wheat, Brick, Lumber, Sheep

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



// CHECK FOR RESOURCES TO GET ITEMS
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


