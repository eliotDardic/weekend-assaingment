function fibonacci(n){
  if(n < 2){
    return 1;
  }
  let sum = 2;
  let previousSum = 1;
  for(let i = 2; i < n; i++){
    const tempSum = sum + previousSum;
    previousSum = sum;
    sum = tempSum;
  }
  return sum;
}

console.log(fibonacci(7));