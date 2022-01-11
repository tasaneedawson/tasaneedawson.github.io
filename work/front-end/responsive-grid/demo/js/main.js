// hide and show hambeuger menu
var inputMenu = document.querySelector("#menu-link");
var menu = document.querySelector("div.menu");
inputMenu.addEventListener("click", function(e){
	menu.classList.add("visible");
	e.preventDefault();
});
var closebtn = document.querySelector(".menu .mobile-menu-close");
closebtn.addEventListener("click", function(e){
	e.preventDefault();
	menu.classList.remove("visible");
});
// update character left when typing
var yourMessage = document.querySelector("#yourmsg");
var count = document.querySelector("#count");
yourMessage.addEventListener("keyup", function(){
	count.innerHTML = (250 - this.value.length);
});
// show alert message when submit
var form = document.querySelector("#form");
form.addEventListener("submit", function(e){
	console.log("bar");
	e.preventDefault();
	alert("Thank you!");
});
// scroll to elements
let btnTop = document.querySelector('.top a');
let bttop = document.querySelector('.hero-img');
btnTop.addEventListener('click', function(e){
	e.preventDefault();
	bttop.scrollIntoView({ behavior: "smooth", block: "end"});
});
