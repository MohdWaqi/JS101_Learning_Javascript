function isLowerCase(string){
  let isSmall = false;
  let lower = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < lower.length; i++){
    if(string === lower[i]){
      console.log("Small Case");
      isSmall = true;
    }
  }
  if(!isSmall){
    console.log("Not a small Case")
  }
}
let char = "w";
isLowerCase(char);