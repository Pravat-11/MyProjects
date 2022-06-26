if (window.performance.navigation.type === 1) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }

function rollDice(){
var randomNumber1 =(Math.floor(Math.random()*6))+1;

var randomDiceImg= "dice" +randomNumber1 +".png";
var randomImgSrc1= "images/" + randomDiceImg;
var image1 =document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImgSrc1);

 var randomNumber2 =(Math.floor(Math.random()*6))+1;

 var randomImgSrc2 = "images/dice"+ randomNumber2 +".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);
 changeTitle(randomNumber1,randomNumber2)
}
 
 function changeTitle(num1,num2){
 if (num1 > num2)
 document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 
 
 else if(num2 > num1)
 document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 
 
 else
 document.querySelector("h1").innerHTML = "Draw!";
 }