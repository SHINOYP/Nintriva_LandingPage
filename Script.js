function myFunction() {
  var x = document.getElementsByClassName("nav-items");
  console.log("hello");
  if (x.className === "nav-items") {
    x.className += "responsive";
  } else {
    x.className = "nav-items";
  }
}
