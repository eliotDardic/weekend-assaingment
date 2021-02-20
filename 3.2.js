// a function that takes a two dimensional array
// and sum in the following logic:
// sum +=arr[i][0]
// sum -=arr[i][1]

function peopleOnTheBus(busStoparr){
  let sum = 0;
  for(let i = 0; i < busStoparr.length; i++){
    sum +=busStoparr[i][0];
    sum -=busStoparr[i][1];
  }
  return sum;
}

//arr 1  dimensions: [1,2,3,4]
//arr 2  dimensions: [[1,2],[3,4]]
console.log(peopleOnTheBus([[1,0],[3,2], [3,2], [0,2]]));