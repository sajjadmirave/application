// when clicked on open menu btn
let openMenu = () => {
  document.getElementById("nav").style.width = "290px";
  document.getElementById("nav-data").style.display = "block";
  document.getElementById("openMenu").style.left = "300px";
};

// when clicked on close menu btn
let closeMenu = () => {
  document.getElementById("nav").style.width = "0px";
  document.getElementById("nav-data").style.display = "none";
  document.getElementById("openMenu").style.left = "10px";
};
