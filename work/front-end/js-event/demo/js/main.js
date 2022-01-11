// function --> input text/tel/email use focus, blur and keypress
var inputText = document.querySelectorAll("input[type=text]");
inputText.forEach( currentField => {
    currentField.addEventListener("focus", function(){
        highlightLabel( this );
    });
    currentField.addEventListener("blur", function(){
        highlightLabel( this );
        let audio = new Audio('https://freesound.org/data/previews/433/433596_723858-lq.mp3');
        audio.play();
    });
    currentField.addEventListener("keypress", function(){
        let audio = new Audio('https://freesound.org/data/previews/9/9098_23118-lq.mp3');
        audio.play();
    });
});
var inputTel = document.querySelectorAll("input[type=tel]");
inputTel.forEach( currentField => {
    currentField.addEventListener("focus", function(){
        highlightLabel( this );
    });
    currentField.addEventListener("blur", function(){
        highlightLabel( this );
        let audio = new Audio('https://freesound.org/data/previews/433/433596_723858-lq.mp3');
        audio.play();
    });
    currentField.addEventListener("keypress", function(){
        let audio = new Audio('https://freesound.org/data/previews/9/9098_23118-lq.mp3');
        audio.play();
    });
});
var inputEmail = document.querySelectorAll("input[type=email]");
inputEmail.forEach( currentField => {
    currentField.addEventListener("focus", function(){
        highlightLabel( this );
    });
    currentField.addEventListener("blur", function(){
        highlightLabel( this );
        let audio = new Audio('https://freesound.org/data/previews/433/433596_723858-lq.mp3');
        audio.play();
    });
    currentField.addEventListener("keypress", function(){
        let audio = new Audio('https://freesound.org/data/previews/9/9098_23118-lq.mp3');
        audio.play();
    });
});
// make the funny sound when select the lowest choice 
var inputSalary = document.querySelector("#twenty-k");
inputSalary.addEventListener("change", function(){
    let audio = new Audio('https://freesound.org/data/previews/151/151223_140737-lq.mp3');
    audio.play();
});
// when hover to the room thumbnails, they will change to a brighter version.
var interestedStudio = document.querySelector("label[for=studio] img");
interestedStudio.addEventListener("mouseover", function(){
    this.src="images/studio-hover.png"
});
interestedStudio.addEventListener("mouseout", function(){
    this.src="images/studio.png"
});
var interestedOne = document.querySelector("label[for=onebedroom] img");
interestedOne.addEventListener("mouseover", function(){
    this.src="images/1bedroom-hover.png"
});
interestedOne.addEventListener("mouseout", function(){
    this.src="images/1bedroom.png"
});
var interestedTwo = document.querySelector("label[for=twobedroom] img");
interestedTwo.addEventListener("mouseover", function(){
    this.src="images/2bedroom-hover.png"
});
interestedTwo.addEventListener("mouseout", function(){
    this.src="images/2bedroom.png"
});
var submitButton = document.querySelector("form")
submitButton.addEventListener("submit", function(event){ 
    event.preventDefault();
    alert('Hooray!! Welcome to DuckDuckGo Apartment!');
});