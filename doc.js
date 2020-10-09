//const header = document.getElementsByTagName("h2");


// ici je constate que lorsqu'on fait met un "s" sur le document.getElementByTagName , en l'appellant dans console.log il ne faut pas oublier de mettre un crochet et d'ajouter 0 à l'interieur du crochet

// ici je constate que lorsqu'on fait met un "s" sur le document.getElementByClass , en l'appellant dans console.log il ne faut pas oublier de mettre un crochet et d'ajouter 0 à l'interieur du crochet

//const items = document.getElementsByClassName("item");

/* const button = document.getElementById("submit");
console.log(button);
 */
//lorsque je fais document.getElementById("submit") il retourne le premier élément avec pour id="submit" 

//const header = document.querySelector("h2");

//const header = document.querySelector("#submit");

//const header = document.querySelector(".item");

//const header = document.querySelector(".item");
//const header = document.querySelector('#list #submit');


//const header = document.querySelector('#list');
//const htem = document.getElementsByClassName('#list');

//console.log(header.children);

//console.log(header.childNodes);

//console.log(htem);

//la difference entre getElement et querrySelector est que avec le query selector on utilise les sélecteurs css

/* console.log(typeof "zaza"); // retourne String
console.log(typeof 12);  // retourne  number
console.log(typeof { name: "Alex", age: 24});  //retourne  objet
console.log(typeof [1, 2, 3]);   //un tableau est  objet
console.log(typeof undefined); // le type  undefined
console.log(typeof null);  //null  un objet//
 */

 /* function Magic(){
     console.log("hello");
     console.log("Function");
 }

Magic(); */

/* function Magic(){
    return "Hello world";
}

console.log(Magic()); */

  /* var p = document.querySelector("p");
 var rougit = function () {
     p.classList.toggle('red')
 }
 p.addEventListener('click',rougit); 
 */
  /* let sub = document.querySelector(".submit");

 sub.style.backgroundColor = "Black";

 sub.style.color = "green";

 sub.style.fontSize = "5em";

 sub.style.padding = "1.5";  */

  let sub = document.querySelector("input[type=submit]");

 sub.classList.add("submit"); 