"use strict";
console.log("obj.js");

let bigObj = {
  title: "Mr",
  sayHi: function () {
    console.log("Hello, I am method in bigObject");
  },
  address: {
    street: "Paupio",
    no: 30,
    coords: {
      x: 43322,
      y: 432211,
    },
  },
};

bigObj.title; // Mr

bigObj.address.street; // Paupio

bigObj.address.coords.x; // 433

console.log(
  `${bigObj.title} lives in ${bigObj.address.street} street, no ${bigObj.address.no}`
);

console.log(bigObj.sayHi());
