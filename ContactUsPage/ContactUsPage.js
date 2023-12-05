let nameError = document.getElementById("name-error");
let lastNamenameError = document.getElementById("lastName-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let messagenameError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) { 
    nameError.innerHTML = "<p>Name is required<p/>";
    return false;
  }
  if (!name.match(/[a-zA-Z]{2,}/)) {
    nameError.innerHTML = "<p> Write  name </p>";
    return false;
  }
  if (!name.match(/[a-zA-Z]{2,}([^0-9]*)$/)) {
    nameError.innerHTML = " <p>Write  name  numbers are not allowed</p>";
    return false;
  }
  nameError.innerHTML =
    '<h4> correct </h4> <ion-icon name="checkmark-circle"></ion-icon>';
  return true;
}

function validateLastName() {
  let lastName = document.getElementById("lastName").value;
  if (lastName.length == 0) {
    lastNamenameError.innerHTML = " <p>Last Name is required</p>";
    return false;
  }
  if (!lastName.match(/[a-zA-Z]{2,}/)) {
    lastNamenameError.innerHTML = "<p> Write  Last Name </p>";
    return false;
  }
  if (!lastName.match(/[a-zA-Z]{2,}([^0-9]*)$/)) {
    lastNamenameError.innerHTML = "<p>Write  name numbers are not alowed </p> ";
    return false;
  }
  lastNamenameError.innerHTML =
    '<h4> correct </h4> <ion-icon name="checkmark-circle"></ion-icon>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = " <p>Phone  is required</p>";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "<p>Phone  should be 10 digits</p>";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "<p>Only 10 digits please</p>";
    return false;
  }
  phoneError.innerHTML =
    '<h4> correct </h4> <ion-icon name="checkmark-circle"></ion-icon>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "<p>Name is required</p>";
    return false;
  }
  
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailError.innerHTML = "<p>Email invalid</p> ";
    return false;
  }

  emailError.innerHTML =
  '<h4> correct </h4> <ion-icon name="checkmark-circle"></ion-icon>';
return true;


}

function validateMessage(){
  let message = document.getElementById("message").value;
  

  let required =30;
  let left = required -message.length
  if (left>0) {
    messagenameError.innerHTML=  `<p>${left} more character required</p>`
    return false
  }
  messagenameError.innerHTML =
  '<h4 style="color:seagreen"> correct </h4> <ion-icon name="checkmark-circle"></ion-icon>';
return true;
}


function SendEmail() {

  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let body = `Name: ${name} ${lastName} <br/>
      Phone no: ${phone} <br/>
      Email from : ${email} <br/>
      Message:${message}`;

  Email.send(
    {
    SecureToken: "f0340721-f56d-4f91-98fc-00e78192f5e6",
    To: "shefaelona@gmail.com",
    From: "VaskuConstruction ",
    Subject: "This is the a message from ",
    Body: body,
  })
  .then( alert("Email was Sent")
      )
}

function validateForm(){
  if(!validateName() || !validateLastName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    
    
    submitError.style.display ="block"
    submitError.innerHTML = "please fix error to submit "
    setTimeout(function () {submitError.style.display ="none"
      
    } ,3000)
    return  false
  
  }
else {
  SendEmail();
  
}  
}




 

