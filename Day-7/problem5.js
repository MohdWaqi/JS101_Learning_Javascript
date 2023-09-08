function replaceSpace(string){
  let word = "";
  for(let i = 0; i < string.length; i++){
    if(string[i] === " "){
      word += "_";
    }else{
      word += string[i];
    }
  }
  return word;
}

let prompt = "I am Happy";
console.log(replaceSpace(prompt));