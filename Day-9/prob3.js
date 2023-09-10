function calculateSalesTotals(itemList){
  for(let i = 0; i< itemList.length; i++){
    itemList[i].sale = itemList[i].original - (itemList[i].discount? itemList[i].original * itemList[i].discount: 0)
    itemList[i].total = itemList[i].sale * itemList[i].stock
  }
  console.log(itemList);
}
var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
calculateSalesTotals(sales)