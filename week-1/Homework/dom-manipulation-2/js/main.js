const jumbotron = document.querySelector(".jumbotron");
const donateABike = document.querySelector(".buttons .btn-primary");
const volunteer = document.querySelector(".buttons .btn-secondary");

const blueButton = document.querySelector("#blueBtn")
blueButton.addEventListener("click", changeBlue)

function changeBlue () {
jumbotron.style.backgroundColor = "#588fbd";
donateABike.style.backgroundColor = "#ffa500";
volunteer.style.backgroundColor = "black";
volunteer.style.color = "white";
}

const orangeButton = document.querySelector("#orangeBtn")
orangeButton.addEventListener("click", changeOrange)

function changeOrange () {
jumbotron.style.background = "#f0ad4e";
donateABike.style.backgroundColor = "#5751fd";
volunteer.style.backgroundColor = "#31b0d5";
volunteer.style.color = "white";

}

const greenButton = document.querySelector("#greenBtn")
greenButton.addEventListener("click", changeGreen)

function changeGreen () {
jumbotron.style.backgroundColor = "#87ca8a";
donateABike.style.backgroundColor = "black";
volunteer.style.backgroundColor = "#8c9c08";

}