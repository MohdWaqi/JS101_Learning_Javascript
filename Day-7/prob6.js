let relation = {A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i", J: "j", K: "k", L: "l", M: "m", N: "n", O: "o", P: "p", Q: "q", R: "r", S: "s", T: "t", U: "u", V: "v", W: "w", X: "x", Y: "y", Z: "z"}

function check(string){  
  let result = ""
  for(let i = 0; i < string.length; i++){
    let Upper = false;
    for(keys in relation){
      if(string[i] === keys){
        Upper = true;
        result += relation[keys]
      }
    }
    if(!Upper){
      result +=lowerToUpper(string[i])
    }
    
  }
  return result;
}

function lowerToUpper(letter){
  for(keys in relation){
        if(letter === relation[keys]){
          return keys
        }
      }
}
console.log(check("Test"));