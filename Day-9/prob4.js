let standard = {
  students: [],
  addStudent: function(stName, mathsMarks, accountsMarks, economicsMarks){
    let  student = {}
    student.name = stName;
    student.maths = mathsMarks;
    student.accounts = accountsMarks;
    student.economics = economicsMarks;
    this.students.push(student);
    
  },
  lowestMarks: function() {
    let lowest = Infinity;
    let lowestStudent;
    for(let i = 0; i < this.students.length; i++){
      grandTotal = this.students[i].maths + this.students[i].accounts +this.students[i].economics
      if(grandTotal < lowest){
        lowest = grandTotal;
        lowestStudent = this.students[i].name;
      }
    }
    return lowestStudent+ "  "+ lowest
  },
  highestMarks: function() {
    let highest = -Infinity;
    let highestStudent;
    for(let i = 0; i < this.students.length; i++){
      grandTotal = this.students[i].maths + this.students[i].accounts +this.students[i].economics
      if(grandTotal > highest){
        highest = grandTotal;
        highestStudent = this.students[i].name;
      }
  }
    return highestStudent+ "  "+ highest
  
}
}

standard.addStudent("Wayne", 87, 67, 85);
standard.addStudent("Selena", 90, 99, 98);
standard.addStudent("Martha", 97, 88, 95);
standard.addStudent("Thomas", 93, 81, 69);
console.log(standard.highestMarks());
console.log(standard.lowestMarks());

