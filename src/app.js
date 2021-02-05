// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons() {
  var popUp=[];
 if(state.Patty)popUp.push("Patty");
 if(state.Cheese)popUp.push("Cheese");
 if(state.Tomatoes)popUp.push("Tomatoes");
 if(state.Onions)popUp.push("Onions");
 if(state.Lettuce)popUp.push("Lettuce");
 if(popUp.length==0)
 {
 window.alert("You have choosen no stuffing");
 }
 else
 {

 var display="";
 display+=popUp.pop();
 while(popUp.length!=0)
 {
   display+=",";
   display+=popUp.pop();
 }
 window.alert("You have choosen "+display);
}

 
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard()
{
  if (!state.Lettuce) {
   var div= document.getElementById("lettuce-display");
   div.innerHTML="";
  }
  else
  {
    var div= document.getElementById("lettuce-display");
   div.innerHTML="Lettuce";
  }

  if (!state.Onions) {
    var div= document.getElementById("onions-display");
    div.innerHTML="";
   }
   else
   {
     var div= document.getElementById("onions-display");
    div.innerHTML="Onions";
   }

   if (!state.Tomatoes) {
    var div= document.getElementById("tomatoes-display");
    div.innerHTML="";
   }
   else
   {
     var div= document.getElementById("tomatoes-display");
    div.innerHTML="Tomatoes";
   }

   if (!state.Cheese) {
    var div= document.getElementById("cheese-display");
    div.innerHTML="";
   }
   else
   {
     var div= document.getElementById("cheese-display");
    div.innerHTML="Cheese";
   }


   if (!state.Patty) {
    var div= document.getElementById("patty-display");
    div.innerHTML="";
   }
   else
   {
     var div= document.getElementById("patty-display");
    div.innerHTML="Patty";
   }

}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice()
{
  var totalPrice=wholeWheatBun*2;
  if(state.Patty)totalPrice+=ingredients.Patty;
 if(state.Cheese)totalPrice+=ingredients.Cheese;
 if(state.Tomatoes)totalPrice+=ingredients.Lettuce;
 if(state.Onions)totalPrice+=ingredients.Onions;
 if(state.Lettuce)totalPrice+=ingredients.Lettuce;
  var div=document.querySelector(".price-details");
  div.innerHTML=totalPrice;
}