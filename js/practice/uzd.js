"use strict";
console.log("uzd.js");

// 1. pakeisti h1 tektso spalva i tomato <h1>Welcome</h1>

const h1El = document.querySelector("h1");
h1El.style.color = "tomato";

// 2. padaryti kad fonto storis butu normalus  <h2>Some title</h2>
const h2El = document.querySelector("h2");
h2El.style.fontWeight = "normal";

// 3. <p>Lorem ipsum dolor si. Irasyti i ji teksta "man pavyko dinamiskai atnaujinti teksta"
const loremP = document.getElementById("loremP");
loremP.textContent = "man pavyko dinamiskai atnaujinti teksta";

// 4. <li>two</li> padidinti srifto dyti iki 34px
const secondLi = document.getElementById("secondLi");
secondLi.style.fontSize = "34px";

// 5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku'
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
  h1El.textContent = "Pakeiciau su mygtuku";
});

// 6. <p class="time">12:45</p> elementui pakeisti teksta i dabartini laika pvz '13:50' ir padaryti pastorinta srifta

const timeNow = document.getElementById("time");
const now = new Date().toLocaleString("Lt-lt", { timeStyle: "medium" });
timeNow.textContent = now;

// 7. <li>one</li> istrinti

// const deleteLi = document.querySelector("li");
// console.log("deleteLi ===", deleteLi);
// deleteLi.remove();

// 8. paspaudus <button>make article dark</button> padaryti <article> fona juoda, o teksta balta

const articleCol = document.querySelector("article");

artBtn.addEventListener("click", () => {
  (articleCol.style.backgroundColor = "black"),
    (articleCol.style.color = "white");
});

// 9. paspaudus <button>delete first li from list</button> istrinti pirma li el is <ol>
const liDelete = document.querySelector("li:nth-child(1)");
const deleteBtn = document.querySelector("button:nth-child(3)");
console.log("deleteBtn ===", deleteBtn);
deleteBtn.addEventListener("click", () => {
  liDelete.remove();
});

//& // sunkesnis tiems kas norit extra
//^ 10. susikurti masyva su spalvomis red, green, blue, violet, pink, black
//^ 10.1 sugeneruoti li elementu stringa is masyvo
//^ 10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)
//^ 10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.
//& =========================================

// 11. <button>change h1 color to blue</button> paspaudus daro tai kas parasyta

const changeCol = document.querySelector("h1");
const colBtn = document.querySelector("button:nth-child(4)");
colBtn.addEventListener("click", () => (changeCol.style.color = "blue"));

//^ 12. gauti ir iskonsolinti kiek elementu yra ol saraso elemente.

//^ 13. su js padidinti visu ol li elementu teksto raides i upperCase

//^ 14. prie esamos  <h3 class="blog__title">Hello people</h3> prideti teksta '--Naujiena--'

//^ 15. prie esamos  <p class="blog__text">Sveiki cia James.</p> prideti "as esu is Londono"

//^ 16.  <button>light</button> padaro <article class="blog"> fona juoda o teksta balta

//^ 17.  <button>dark</button> padaro <article class="blog"> texta juoda o fona balta

//^ 18 <button>destroy</button> istrina <article class="blog">

//^ 19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)

//^ 20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis

//^ 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light

//^ 22. <button>Turn <span>dark</span> mode on</button> kiekviena karta paspaudus keiciam teksta dark i light ir atvirksciai
