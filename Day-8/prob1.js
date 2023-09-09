function customJoin(arr, between){
  if(between === ""){
    between = "";
  }else{
    between = between || "," 
  }
  let str = "";
  for(let i=0; i<arr.length; i++){
    if(i === arr.length-1){
      str+= arr[i];
    }else{
      str += arr[i] + between;
    }
  }
  return str;
}
let list = ["I", "am","a", "Warrior."];
console.log(customJoin(list));


