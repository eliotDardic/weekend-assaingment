// Return a random number between 1 and 50
function basicOp(operator, argument1, argument2) {
  switch(operator) {
    case '+':
      return argument1 + argument2
      break;
    case '-':
      return argument1 - argument2
      break;
    case '*':
      return argument1 * argument2
      break;
    case '/':
      return argument1 / argument2
      break;
    default:
      return "error"
  }
}


console.log("1+2=" + basicOp('+', 1, 2));
console.log("1a2=" + basicOp('a', 1, 2));
