function perfectSquare(num) {
  let root = Math.sqrt(num);
  let nextsquare;
  if(Number.isInteger(root)){
    nextsquare = (root + 1) ** 2;
  }else{
    nextsquare = -1;
  }

  return nextsquare;
}