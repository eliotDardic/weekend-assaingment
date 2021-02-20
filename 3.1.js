function nb_year(p0, percent, aug, p){
  let years = 0;
  let pCount = p0;
  while(pCount < p){
    pCount = pCount + pCount * percent + aug;
    years++;
  }

  return years;

}

console.log(nb_year(1000, 0.02, 50, 1070));