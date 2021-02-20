function tribonacci(n){
  if(n < 3){
    return 1;
  }
  let sum = 3;
  let num2 = 1;
  let num1 = 1;
  for(let i = 3; i < n; i++){
    const tempSum = sum + num2 + num1;
    num1 = num2;
    num2 = sum;
    sum = tempSum;
  }
  return sum;
}

console.log(tribonacci(5));