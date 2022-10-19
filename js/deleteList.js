"use strict";
console.log("deleteList.js");

//? kai paspaudziam elementa, jis istrinamas

document.body.addEventListener("click", (event) => {
  //anonimine arrow funkcija
  console.log("paspaudei");
  console.log("event ===", event.target);
  //^ virsuj - event target - tai ant ko paspaudziam

  //   event.target.style.backgroundColor = "#333";
  event.target.remove();
});
