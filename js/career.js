document.addEventListener("DOMContentLoaded", function () {
// When the user clicks on <div>, open the popup

function check() {
  const form = new FormData();
  const firstName = form.get("fname");
  console.log(firstName);
  const lastName = form.get("lname");
  console.log(lastName);
  const email = form.get("email");
  console.log(email);
  const cellNumber = form.get("cnum");
  console.log(cellNumber);
}


});