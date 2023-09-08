function isPrime(number){
  let count = 0;
  for(let i = 1; i <= number; i++){
    if(number % i === 0){
      count +=1;
    }
  }
  if(count === 2){
    console.log("Prime Number");
  }else{
    console.log("Not a Prime Number");
  }
}

isPrime(12);