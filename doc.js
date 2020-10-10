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

 // let sub = document.querySelector("input[type=submit]");

 //sub.classList.add("submit");
 
 const arr = [1,2,3,4];
 //console.log(arr.push());
 /* console.log(arr.push("a"));
 console.log(arr);

 console.log(arr.pop());
 console.log(arr);

 console.log(arr.unshift(1));
 console.log(arr);

 console.log(arr.shift());
 console.log(arr); */

 //const obj = {id:1, name:"daily"};
 //console.log(obj.name);/* 
 //console.log("name" in obj);
 /* let ans=1;

 switch(ans){
     case 1:
         console.log("you have select javascript");
         break;
     case 2:
         console.log("you have select pyton");
         break;
     case 3:
         console.log("you have select ASP.NET");
         break;
     default:
         console.log("sorry, you have select wrong answer");
         break;

 } */

 /* for(let count=0; count<5; count++)console.log(count); */

/*  let ary=[1,2,3,4,5];
 let str="kammegne"


 for (let value of str) {
     console.log(value);
 } */

 /* const user = {
     name: "Daily",
     subs: 4000
 } */

 let name="Daily";
 let subs=4000;

 function show(){
     console.log(`${name} you have ${subs} subscribers`);
 }

 function Make(){
     console.log(`thanks you so Much ${subs} Subscribers`);
 }

 show();
 Make();