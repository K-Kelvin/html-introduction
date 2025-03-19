// Variable Definition and Declaration
// const content = document.getElementById("content");
// const num = 5;
// num = 10;

// var num = 5;
// num = 10;
// num = 'Word';

// let word = 'Word';
// word = 'Bird';

// let num;
// num = 5;

// Select element with the id 'content' from the DOM (Document Object Model)
const content = document.getElementById("content");

// content.id = "some-other";

// content.style = "background-color: green;";
// content.style.fontSize = "40px"; // 'font-size'
// content.style.color = "black";

// content.innerHTML = "<p style='padding: 12px; background: green; margin: auto; width: max-content;'>We added this paragraph using JS</p>"
// content.innerHTML = "<div><script>alert('You have been hacked')</script></div>"
// content.textContent = "This textContent was added using Javascript";

// content.className = 'hidden';
// console.log(content.classList);
// content.classList.add("hidden");
// content.classList.remove("hidden");
// console.log(content.classList.contains("hidden")); // false or true
// content.classList.replace("hidden", "some-other-class")

const button = document.getElementById("toggleContent");

function toggleContent() {
    // if the class 'hidden' is present in the content div
    // if (content.classList.contains("hidden")) {
    //     content.classList.remove("hidden"); // remove the class 'hidden'
    // } else { // the class 'hidden' is not present in the content div
    //     content.classList.add("hidden"); // add the class 'hidden'
    // }

    content.classList.toggle("hidden");
}

// toggleContent(); // calling the function (tell the function to run/execute)

button.onclick = toggleContent;

// Dynamically Adding An Image to html
// create html structure for an image
const image = document.createElement("img");
image.src = "../images/engineer.png";
image.alt = 'This image failed to display';
image.width = '200';

// content.insertBefore(image, content.childNodes[0]);
content.append(image);
