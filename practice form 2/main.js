let lastName = document.getElementById("lastName");
let firstName = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");






const mySubmit = (event) => {
    event.preventDefault();
    
     lastName = document.getElementById("lastName").value;
     firstName = document.getElementById("name").value;
     username = document.getElementById("username").value;
     email = document.getElementById("email").value;
    
    console.log("first" , firstName)
  console.log("first" , username)
if(username == "" || lastName == "" || firstName == "" || email == ""){
    return alert("Please fill in all the boxes")
}else{
    return myDisplay()
}

}

const myDisplay = () => [

    document.getElementById("output").innerHTML = `<ul>
    <li>${username}</li>
    <li>${lastName}</li>
    <li>${firstName}</li>
    <li>${email}</li>
     </ul>`
]