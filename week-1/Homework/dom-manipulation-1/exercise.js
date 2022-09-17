/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node
    
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1.
console.log(document.querySelectorAll("p"))
/*let pArray = Array.from(document.querySelectorAll("p"));
pArray.forEach((i) => {
    console.log(i)
        //    todoList.appendChild(generateTodoDOM(todo))
    })
    

//2.
let divArray = Array.from(document.querySelectorAll("div"));
console.log(divArray[0])

//3.
console.log(document.querySelector("#jumbotron-text"));

//4.
// let prim_cont = document.querySelector(".primary-content");
// let p_in_prim = prim_cont.querySelectorAll("p");
// console.log(p_in_prim);

console.log(document.querySelector(".primary-content").querySelectorAll("p"));

/*
Task 2
======

When a user clicks th e 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

        
let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeBtn = document.querySelector("#bgrChangeBtn");
changeBtn.addEventListener("click", changecolour);


function changecolour() {
    let body = document.querySelector("body");
    //  let body = document.body;
    body.style.backgroundColor = "#abceeb";
    // document.body.style.backgroundColor = "red";

}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let addTxt = document.querySelector("#addTextBtn");
addTxt.addEventListener("click", addText);

function addText(){
    let paragraph = document.createElement("p");
    let mainArticles = document.querySelector("#mainArticles");    
    mainArticles.appendChild(paragraph);
    paragraph.innerText = "NEW PARAGRAPH"; 
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largestLinkBtn = document.querySelector("#largestLinksBtn");
 largestLinkBtn.addEventListener("click", largestLinks);

 function largestLinks() {
    const links=document.querySelectorAll("a");
    console.log (links);
    links.forEach(e=>e.style.fontSize = "x-large");

 }




/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let addTxto = document.querySelector("#addArticleBtn");
addTxto.addEventListener("click", addTexto);

function addTexto() {
    const input = document.querySelector("#addArticleInput")
    const gtext = input.value

    let newP = document.createElement("p")
    newP.textContent = gtext
    let learn = document.querySelector("#mainArticles")
    learn.appendChild(newP)

    input.value =""
}


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors= ["yellow", "red", "green", "blue"]
const button2 = document.querySelector("#bgrChangeBtn");
let i = 0
button2.addEventListener("click", changeColor);
function changeColor() {
    document.body.style.backgroundColor = colors[i]
     if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
}