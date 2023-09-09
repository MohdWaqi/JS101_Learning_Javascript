function customSlice(arr, start, end){
  if(!start){
    start = 0
  }else if(start < 0){
    start = arr.length + start
  }
  if(!end || end > arr.length){
    end = arr.length 
  }else if(end < 0){
    end = arr.length +end
  }
  let newArr =[]
  if(typeof(arr) == "string"){
     newArr = "" }
  for(let i = start; i < end; i ++){
    if(typeof(arr) == "string"){
      newArr += arr[i]
    }else{
    newArr.push(arr[i]);
    }
  }
  return newArr;
}
let games = ["carrom","ludo","chess","carrom"];
console.log(customSlice(games,-3, 20));