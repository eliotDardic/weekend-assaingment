function sumOfLowest(arr) {
  let low1 = arr[0]; low2 = arr[0];

  // [2,9876,100, 5, 5785, 457643]

  // find 1st lowest value
  for(i = 0; i < arr.length; i++){
    if(arr[i] < low1){
      low1 = arr[i];
    }
  }

  if(low2 === low1){
    low2 = arr[1];
  }
  // find 2nd lowerst value
  for(i = 0; i < arr.length; i++){
    if(arr[i] < low2 && arr[i] != low1 ){
      low2 = arr[i];
    }
  }

  return low1 + low2;
}

