
function diceRoll(max, min) {
   return Math.floor(Math.random() * (max - min)) + min;
}

export default diceRoll;