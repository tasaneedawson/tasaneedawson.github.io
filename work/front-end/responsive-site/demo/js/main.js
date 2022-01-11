// hide and show hambeuger menu
var inputMenu = document.querySelector("#menu-link");
var menu = document.querySelector("nav.menu");
inputMenu.addEventListener("click", function(e){
	menu.classList.add("visible");
	e.preventDefault();
});
var closebtn = document.querySelector(".menu .mobile-menu-close");
closebtn.addEventListener("click", function(e){
	e.preventDefault();
	menu.classList.remove("visible");
});
// show alert message when submit
var form = document.querySelector("#form");
form.addEventListener("submit", function(event){
	console.log("bar");
	event.preventDefault();
	alert("Thank you!");
});
// update character left when typing
var yourMessage = document.querySelector("#yourmsg");
var count = document.querySelector("#count");
yourMessage.addEventListener("keyup", function(){
	count.innerHTML = (250 - this.value.length);
});
// scroll to elements
let mostPop = document.querySelector("#most-pop");
let pop = document.querySelector("#most-popular");
mostPop.addEventListener("click", function (e) {
	e.preventDefault();
	pop.scrollIntoView({ behavior: "smooth", inline: "nearest"});
});
let catSec = document.querySelector("#cat-sec");
let cat = document.querySelector("#categories");
catSec.addEventListener("click", function (e) {
	e.preventDefault();
	cat.scrollIntoView({ behavior: "smooth", inline: "nearest"});
});
let conSec = document.querySelector("#con-sec");
let con = document.querySelector("#contact");
conSec.addEventListener('click', function (e) {
	e.preventDefault();
	con.scrollIntoView({ behavior: "smooth", block: "end"});
});
let btnTop = document.querySelector('.top a');
let bttop = document.querySelector('.hero-img');
btnTop.addEventListener('click', function (e) {
	e.preventDefault();
	bttop.scrollIntoView({ behavior: "smooth", block: "end"});
});