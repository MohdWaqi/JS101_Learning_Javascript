let school = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];
let schoolSum = []
  ;

for(let i = 0; i < school.length; i++){
  let marksSum = {};
  let maximumMarks = 0;
  for(let j = 0; j< school[i]["students"].length; j++){
    let sum = 0;
    for(let k = 0; k < school[i]["students"][j]["marks"].length; k++){
      sum += school[i]["students"][j]["marks"][k];
    }
    marksSum[school[i]["students"][j]["name"]] = sum;
    sum = 0;
  }
  for(key in marksSum){
    if(maximumMarks < marksSum[key]){
      maximumMarks = marksSum[key];
    }
  }
  for(key in marksSum){
    if(maximumMarks === marksSum[key]){
      console.log(school[i]["grade"]+"-"+key+"-"+ marksSum[key]);
    }
  }
}

