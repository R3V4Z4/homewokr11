// let errors //lesson 11
"use strict";

// validation
const form = document.getElementById("login");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // console.log(this); //form
  let errors = {};

  //
  let username = document.getElementById("userfield").value;

  if (username === "") {
    errors.username = "Username field can not be empty";
  }

  //
  let passw1 = document.getElementById("passwfield").value;
  let passw2 = document.getElementById("passw2field").value;

  if (passw1 === "") {
    errors.passw = "password field can not be empty";
  }

  if (passw1 != passw2) {
    errors.passw2 = "Passwords do not match";
  }

  //
  let gender = false;
  this.querySelectorAll(".radio-gender").forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select your gender";
  }

  //
  let agree = document.getElementById("checkagree").checked;
  if (!agree) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.innerHTML = " ";
  });

  for (let item in errors) {
    console.log(item); //key

    let errorElement = document.getElementById("error-" + item);
    console.log(errorElement);

    if (errorElement) {
      errorElement.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

let showPass = document.getElementById("show");
let passw = document.getElementById("passwfield");

showPass.addEventListener("click", function (e) {
  e.preventDefault();
  if (passw.type === "password") {
    passw.type = "text";
  } else {
    passw.type = "password";
  }
});

//   agree: "You must agree our terms and conditions",
//   gender: "Select your gender",
//   passw: "password field can not be empty",
//   username: "Username field can not be empty",
// };
