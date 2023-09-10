let rectangle = {
  length: 40,
  width: 20,
  perimeter(){
    return 2*(this.length+ this.width)
  },
  area(){
    return this.length * this.width
  }
}
console.log(rectangle.perimeter())
console.log(rectangle.area())