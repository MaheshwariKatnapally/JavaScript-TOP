// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Exercise:

// 1. a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

// 3. a <div> with a black border and pink background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
// - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "black solid 2px";

const divh1 = document.createElement("h1");
divh1.textContent = "I’m in a div";
div.appendChild(divh1);

const paradiv = document.createElement("p");
paradiv.textContent = "ME TOO!";
div.appendChild(paradiv);

container.appendChild(div);
