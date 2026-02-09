function sumbitForm(){
    // var userName =document.getElementById("name").value;
    // var fatherName =document.getElementById("fName").value;
    var userEmail =document.getElementById("email").value;
    var userCnic =document.getElementById("cnic").value;
    // var userDob = document.getElementById("dob").value;

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
  

    }
}