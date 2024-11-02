const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/school-of-athens.webp") {
    myImage.setAttribute("src", "images/death-of-socrates.webp");
  } else {
    myImage.setAttribute("src", "images/school-of-athens.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Study Some Philosophy., ${myName}`;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Study Some Philosophy., ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }
  