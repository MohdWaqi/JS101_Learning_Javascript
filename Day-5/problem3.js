let count = 0;
let numbers = [1,2,3,4,5,6,7,8,9,4,3,5,7,7,8,8,8];
let sum = 0;
for(let index = 0; index < numbers.length; index++){
  if (numbers[index] % 2 == 0){
    sum += numbers[index];
    count++
  }
}
let average = sum/count;
console.log(average);