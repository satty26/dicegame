var randomInt = Math.floor(6*(Math.random())) + 1;
var randomInt2 = Math.floor(6*(Math.random())) + 1;
document.querySelector(".img1").setAttribute("src","images/dice" + randomInt + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomInt2 + ".png");
if (randomInt>randomInt2){
  document.querySelector("h1").textContent = "Player 1 Wins";
}
if (randomInt<randomInt2){
  document.querySelector("h1").textContent = "Player 2 Wins";
}
if(randomInt==randomInt2) {
  document.querySelector("h1").textContent = "Game is draw";
}
