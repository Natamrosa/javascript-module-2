/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
}

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(element => {
    let h1 = document.createElement("h1");
    h1.innerText = element.name;
    content.appendChild(h1);
    let h2 = document.createElement("h2");
    h2.innerText = element.job;
    content.appendChild(h2);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here

 let content = document.querySelector("#content");
  let myUl = document.createElement("ul");
  shopping.forEach((element) => {
    let myLi = document.createElement("li");
    console.log("element", element);
    myLi.textContent = element;
    myUl.appendChild(myLi);
  });
  content.appendChild(myUl);
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
   let myBooks = document.querySelector("#content");
  let myUl = document.createElement("ul");

  books.forEach((element) => {
    console.log("element", element);
    let myP = document.createElement("p");
    myP.textContent = element.title + " - " + element.author;
    console.log(element.color);
    console.log(element.title);
    console.log("myP", myP);
    myBooks.appendChild(myP);
    let myLi = document.createElement("li");
    let myImg = document.createElement("img");
    myImg.src = element.url;
    if (element.alreadyRead) {
      myP.style.background = "green";
    } else {
      myP.style.background = "red";
    }
    myP.appendChild(myImg);
    myLi.appendChild(myP);
    console.log("myLi", myLi);
    myUl.appendChild(myLi);
  });
  myBooks.appendChild(myUl);
}


//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true, 
  }
];

exerciseThree(books);
 

//PONER LAS IMAGENES CON HTML