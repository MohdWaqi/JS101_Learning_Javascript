
function createProducts(...foods){
  let products = {};
  products.data = []
  for(let i = 0; i < foods[0].length; i++){
    products.data.push({name: foods[0][i], quantity: foods[1][i], price: foods[2][i]})
  }
  products.total = () => {
    let sum = 0
    for(let i = 0; i < products.data.length; i++){
      sum += products.data[i]["quantity"] * products.data[i]["price"]
    }
     return sum
  }
  console.log(products.total())

}

createProducts(["Rice", "Dal", "Salt"],[2, 3, 1],
[60, 50, 20])




