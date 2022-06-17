let data = [];
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let contacts = document.getElementById("tel");
let email = document.getElementById("email");
let password = document.getElementById("password");

const mySubmit = (event) => {
  event.preventDefault();

  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  contacts = document.getElementById("tel").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (
    firstName === "" ||
    lastName === "" ||
    contacts === "" ||
    email === "" ||
    password === ""
  ) {
    alert("Please fill in all the boxes before you submit");
  } else {
    data.push({
      name: firstName,
      surname: lastName,
      number: contacts,
      email: email,
      pass: password,
    });
    //    console.log('data :>> ', data);
    localStorage.setItem("data", JSON.stringify(data));
    //    console.log('retrievedUsername', retrievedUsername);

    myDisplay();
  }
};

function myDisplay() {
  //    location.replace("./output.html")
  let output = document.getElementById("output");

  // var answer = localStorage.key(1);

  for (i = 0; i < localStorage.length; i++) {
    var retrievedUsername = JSON.parse(localStorage.getItem("data")) + "<br>";
    output.innerHTML += retrievedUsername;
  }
  console.log("retrievedUsername", retrievedUsername);
}
