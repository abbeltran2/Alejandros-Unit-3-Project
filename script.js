/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne = document.querySelector(".buttons").querySelector(".option-one");
let buttonTwo = document.querySelector(".buttons").querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let buttonThree = document.querySelector(".buttons2").querySelector(".option-one");
let buttonFour = document.querySelector(".buttons2").querySelector(".option-two");
let optionThree = document.querySelector(".option-one-end");
let optionFour = document.querySelector(".option-two-end");
let adventureChoice = document.querySelector(".option-two-adventure-screen");
let saveChoice = document.querySelector(".option-three-adventure-screen");
console.log(buttonOne);
console.log(buttonTwo);
console.log(optionOne);
console.log(optionTwo);
console.log(buttonThree);
console.log(buttonFour);
console.log(optionThree);
console.log(optionFour);


buttonOne.onclick = function() {
    optionOne.style.display = "block";
    optionTwo.style.display = "none";
    adventureChoice.style.display = "none";
    saveChoice.style.display = "none";
};

buttonTwo.onclick = function() {
    optionTwo.style.display = "block";
    optionOne.style.display = "none";
};

buttonThree.onclick = function() {
    optionThree.style.display = "block";
    optionFour.style.display = "none";
};

buttonFour.onclick = function() {
    optionFour.style.display = "block";
    optionThree.style.display = "none";
};

optionOne.onclick = function() {
    adventureChoice.style.display = "block";
   	saveChoice.style.display = "block";
    optionThree.style.display = "block";
};

optionTwo.onclick = function() {
    optionFour.style.display = "block";
    console.log("click on option 2");
};