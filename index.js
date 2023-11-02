// Player 1.

// Generate a random number betwwen 1 and 6 to player's 1 dice
var randomNumberPlayer1Dice = Math.floor(Math.random()* 6) + 1;

// Generate a random face a dice between 1 and 6 to player's 1 dice (using concatenation).
var randomSidePlayer1Dice = "dice" + randomNumberPlayer1Dice + ".png";

// Changing "scr" attribute value ("img1"), to randomize dice side.
var randomImageAttributePlayer1 = "assets/imgs/" + randomSidePlayer1Dice;

// Select the image to player's 1.
var imagePlayer1 = document.querySelector(".img1");

// Setting the attribute value ("img1") to player's 1.
imagePlayer1.setAttribute("src", randomImageAttributePlayer1);



// Player 2.

// Generate a random number betwwen 1 and 6 to player's 2 dice
var randomNumberPlayer2Dice = Math.floor(Math.random()* 6) + 1;

// Generate a random face a dice between 1 and 6 to player's 2 dice (using concatenation).
var randomSidePlayer2Dice = "dice" + randomNumberPlayer2Dice + ".png";

// Changing "scr" attribute value ("img2"), to randomize dice side.
var randomImageAttributePlayer2 = "assets/imgs/" + randomSidePlayer2Dice;

// Select the image to player's 2.
var imagePlayer2 = document.querySelector(".img2");

// Setting the attribute value ("img1") to player's 2.
imagePlayer2.setAttribute("src", randomImageAttributePlayer2);

//Game condicions.

if (randomNumberPlayer1Dice > randomNumberPlayer2Dice) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNumberPlayer1Dice < randomNumberPlayer2Dice) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "Draw... Try Again!";
}