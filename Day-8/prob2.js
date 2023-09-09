function customLastIndex(findIn, search, position){
  if(position){
    if(position < 0){
      position = findIn.length + position;
    }
  }else if(!position){
    position =findIn.length -1;
  }
  let found = false;
  for(let i = position; i >= 0; i--){
    if(findIn[i] == search){
      found = true;
      return i
    }
  }
  if(!found){
    return -1;
  }
}
let games = ["carrom", "ludo", "chess", "carrom"];
console.log(customLastIndex(games,"carrom", 1));


