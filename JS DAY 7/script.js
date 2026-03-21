// // create element

// const para = document.createElement("p");
// para.textContent = "This is a paragraph created using JavaScript.";

// console.log(para);


// // append element
// const contentDiv = document.getElementById("content");
// contentDiv.appendChild(para);

// // remove element
// document.querySelector("#content p").remove();


const image = document.createElement("img");
image.setAttribute("src", "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/02/solo-leveling-ragnarok-sequel-epilogue-jinwoo-suho.jpg?w=1200&h=675&fit=crop");

image.setAttribute("alt", "Jinwoo");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);


