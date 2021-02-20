function binToDec(arr) {
  //for(i = 0; i < arr.length; i++)
  let pos = 0, decValue = 0;
  for(i = arr.length-1; i > -1; i--){
    if(arr[i] === 1){
      decValue += 2**pos;
    }
    pos++;
  }
  console.log(decValue);
  return decValue;
}

binToDec([0,1,0,1]);

// 3210
//[0101]

//2**3 +2**2+0+1=