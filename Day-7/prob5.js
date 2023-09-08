function lowerString(array){
  let newArray = [];
  let relation = {A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i", J: "j", K: "k", L: "l", M: "m", N: "n", O: "o", P: "p", Q: "q", R: "r", S: "s", T: "t", U: "u", V: "v", W: "w", X: "x", Y: "y", Z: "z"}
  for(let i = 0; i < array.length; i++){
      let letters = ""
    for(let j = 0; j < array[i].length; j++){
      let UpperCase = false;
      for(let key in relation){
        if(key === array[i][j]){
          UpperCase = true;
          letters += relation[key];      
        }
      }
      if(!UpperCase){
        letters += array[i][j];
      }
    }
    newArray.push(letters);
  }
  return newArray;
}
let wordsArray = ["MA", "Sa", "I", "SCH", "OOL"];

console.log(lowerString(wordsArray));