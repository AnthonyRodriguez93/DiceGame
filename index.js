var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.body.querySelector(".img1").setAttribute("src", randomImage);

document.body.querySelector(".img2").setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
    document.body.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.body.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.body.querySelector("h1").innerHTML = "Draw!";
}