let number = 1; 
let sum = 0;
let count = 0;

while(number <= 100) {
  if(number % 2 == 0){
    sum += number; 
    count++;
    
  };
  number++;
};

let average = sum/ count; 
console.log(average);
