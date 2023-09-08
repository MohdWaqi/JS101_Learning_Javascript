function sumOfElements(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

let list = [2,3,4,1,8,18];

if(list.length === 0){
  console.log(0);
}else{
  console.log(sumOfElements(list)/list.length);
}