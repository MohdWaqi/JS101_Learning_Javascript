function customIncludes(searchIn, searchValue, start){
  if(!start){
    start = 0
  }else if (start < 0){
    start = searchIn.length + start;
  }
  let isFound = false;
  for(let i = start; i < searchIn.length; i++){
    if(searchIn[i] == searchValue){
      isFound = true;
    }
    if(searchIn[i] == searchValue[0]){
      let word= ""
      for(let j = i; j < i+searchValue.length; j++){
        word += searchIn[j];
      }
      if(word == searchValue){
        isFound = true;
      }
    }
  }
  return isFound
}
let str = "randomNumbersareoccured"
console.log(customIncludes(str,"are",99))