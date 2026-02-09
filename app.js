function sumbitForm() {
  var userName = document.getElementById("name").value;
  var fatherName = document.getElementById("fName").value;
  var userEmail = document.getElementById("email").value;
  var userCnic = document.getElementById("cnic").value;
  var userDob = document.getElementById("dob").value;

  if (
    userName === "" &&
    userCnic === "" &&
    userDob === "" &&
    userEmail === "" &&
    fatherName === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "fill the form",
      timer: 1500,
    });
  }
  if (userEmail.length > 30) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User email is too long",
    });
  }

  if (userCnic.length > 14) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "CNIC should be 14 characters long",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Your form has been sumbit",
    });
  }

  document.getElementById("card").style.display = "block";
  document.getElementById("uName").innerHTML =
    `Full Name: ${userName} ${fatherName}`;
  document.getElementById("uemail").innerHTML = `Email: ${userEmail}`;
  document.getElementById("ucnic").innerHTML = `CNIC: ${userCnic}`;
  document.getElementById("udob").innerHTML = `DOB: ${userDob}`;
  document.getElementById("form").style.display = "none";
}

function preview() {
  var userName = document.getElementById("name").value;
  var fatherName = document.getElementById("fName").value;
  var userEmail = document.getElementById("email").value;
  var userCnic = document.getElementById("cnic").value;
  var userDob = document.getElementById("dob").value;

  document.getElementById("card").style.display = "block";

  document.getElementById("uName").innerHTML =
    `Full Name: ${userName} ${fatherName}`;
  document.getElementById("uemail").innerHTML = `Email: ${userEmail}`;
  document.getElementById("ucnic").innerHTML = `CNIC: ${userCnic}`;
  document.getElementById("udob").innerHTML = `DOB: ${userDob}`;

  document.getElementById("form").style.display = "none";
}
