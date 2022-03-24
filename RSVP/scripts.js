function show() {
  var Display = document.getElementById("hideShow");
  if (Display.style.display === "none") {
    Display.style.display = "block";
  } else {
    Display.style.display = "block";
  }
}

function hide() {
  var Display = document.getElementById("hideShow");
  if (Display.style.display === "none") {
    Display.style.display = "none";
  } else {
    Display.style.display = "none";
  }
}

function partners1(){
  var Display = document.getElementById("partners5");
  if (Display.style.display === "none") {
    Display.style.display = "block";
  } else {
    Display.style.display = "block";
  }
}

function partners2() {
  var Display = document.getElementById("partners5");
  if (Display.style.display === "none") {
    Display.style.display = "none";
  } else {
    Display.style.display = "none";
  }
}



let name = "";
let surname = "";
let DateOfBirth = "";
let email = "";
let contact = "";
let checkbox = "";
let radio = "";
let text_box = "";

const mySubmit = (event) => {
  event.preventDefault();

  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  DateOfBirth = document.getElementById("date").value;
  email = document.getElementById("email").value;
  contact = document.getElementById("contact").value;
  text_box = document.getElementById("showHide").value;
  radio = radioBtn();
  checkbox = displayCheckbox();

  partner = radioButton();

  if (
    name === "" ||
    surname === "" ||
    DateOfBirth === "" ||
    email === "" ||
    contact === "" ||
    radio === "" ||
    checkbox === "" ||
    partner === ""
  ) {
    alert("Please fill in all the boxes before you submit");
  } else {
    return myDisplay();
  }
};

function myDisplay() {
  document.getElementById("output").innerHTML = `
   <ul>
   <li>${name}</li>
   <li>${surname}\n
  <li> ${DateOfBirth}\n
   <li>${email}\n
   <li>${contact}\n
   <li>${radio}\n
   <li>${partner}\n
   <li>${checkbox}\n
   <li>${text_box}
   `;
}
const displayCheckbox = () => {
  let checkboxes = document.querySelectorAll('input[name="foods"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
};

const radioButton = () => {
  const rbs = document.querySelectorAll('input[name="language"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  return selectedValue;
};

const radioBtn = () => {
  const rbs = document.querySelectorAll('input[name="fav_language"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  return selectedValue;
};

var modal = document.getElementById("myModal");
let btn = document.querySelectorAll(".myBtn.myBtn2"); 
// var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function myFunction() {
  document.getElementById("myForm").reset();
}
