function food(food) {
  console.log("i love" + food);
}

function order(quantity, price) {
  console.log("i have ordered " + quantity + "slices");
  console.log("each slice cost " + price + "rs");
  console.log("total is" + quantity * price + "Rs");
}
food("pizza");
order(3, 2);
