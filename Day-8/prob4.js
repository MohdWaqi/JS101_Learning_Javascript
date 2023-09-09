function customSubstring(enteredString, start, end){
  if(start > end){
    let third = start;
    start = end;
    end = third;
  }
  if(!start || start < 0 ){
    start = 0
  }else if(start > enteredString.length){
    start = enteredString.length;
  }
  if(!end || end >enteredString.length){
    end = enteredString.length
  }
  let result = "";
  for(let i = start; i < end; i++){
    result += enteredString[i];
  }
  return result;
}

let randomName = "Mohd Waqi Pervez";
console.log(customSubstring(randomName,87, 89));