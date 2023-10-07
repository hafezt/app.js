// Access the parent element of an element with an ID "myElement"
const myElement = document.getElementById("myElement");
const parentElement = myElement.parentElement;

// Access the last child element of an element with an ID "myList"
const myList = document.getElementById("myList");
const lastChild = myList.lastElementChild;

const newElement = document.createElement("div");

newElement.setAttribute("class", "my-class");

const textNode = document.createTextNode("Hello, World!");

const itemlister = document.getElementById("itemlister");
itemlister.insertBefore(textNode, itemlister.firstChild);

const item1 = document.querySelector("#items li:nth-child(1)");
item1.insertBefore(textNode, item1.firstChild);
