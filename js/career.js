document.addEventListener("DOMContentLoaded", function () {
// When the user clicks on <div>, open the popup
var popup= document.getElementById("submit");
function myfunction()  {
  popup.innerHTML='SUBMITTED!';
}
popup.addEventListener('click', myfunction);


});