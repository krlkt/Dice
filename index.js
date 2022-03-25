var arrayOfImages = ['images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'];

var randomNumber1 = Math.floor(Math.random() * arrayOfImages.length);
var randomNumber2 = Math.floor(Math.random() * arrayOfImages.length);

var leftDice = document.querySelector('.img1').setAttribute('src', arrayOfImages[randomNumber1])
var rightDice = document.querySelector('.img2').setAttribute('src', arrayOfImages[randomNumber2])


if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins! 🚩"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"
} else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerText = "Its a Draw! 😌"
} else {
    document.querySelector('h1').innerText = "error occured"
}