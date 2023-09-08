function isPrime(number){
  let count = 0;
  for(let i = 1; i <= number; i++){
    if(number % i === 0){
      count +=1;
    }
  }
  if(count !== 2){
    console.log(number);
  }
}
let limit = 17;
for(let i = 2; i <=limit; i++){
  isPrime(i)
}