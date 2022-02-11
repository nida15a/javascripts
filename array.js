var q1 = ["pink", "yellow", "red"];
var q2 = q1[1];
console.log(q2);
const collection = [
    {},
    true,
    "sarang",
    function () {
      console.log("Hello");
    },
    [1, 2, 3],
    new Array(),
    new String(),
  ];
  console.log(collection);
  collection[3]();
  console.log(collection[3]);