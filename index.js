function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var nbrRandom = getRandomInt(%max nombers%);
if(nbrRandom == 0){
    console.log("Je suis triste")
} else {
     console.log("Je vais bien")
}
console.log(nbrRandom);
