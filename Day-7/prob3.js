function isOdd(number){
  if(number % 2 !== 0){
    return true;
  }else{
    return false;
  }
}
let limit = 19;
for(let i = 0; i <= limit; i++){
  if(isOdd(i)){
    console.log(i);
  }
}