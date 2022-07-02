function loginMessage() {
 clear();
 document.getElementById("content")
  .innerHTML =
  '<b>Please log in to proceed</b>';
}

function clear() {

 document.getElementById("content")
  .innerHTML =
  "";
}
