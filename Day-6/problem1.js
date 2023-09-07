let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ages = [32, 30, 26, 28, 44];
let persons = [];
for (let i = 0; i < names.length; i++){
  persons.push({name: names[i], age: ages[i]});
}
for(let j = 0; j < persons.length; j++){
  if(persons[j]["age"] > 30){
    console.log(persons[j]["name"])
  }
}