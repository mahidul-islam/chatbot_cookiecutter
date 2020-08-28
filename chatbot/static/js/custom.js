document.getElementById("showMenu").addEventListener("click", openMenu);
document.getElementById("hideMenu").addEventListener("click", closeMenu);

function openMenu() {
  document.getElementById("logo-area-mobile").style.visibility = "hidden";
  document.getElementById("side-bar").style.marginLeft = "0";
}

function closeMenu() {
  document.getElementById("logo-area-mobile").style.visibility = "visible";
  document.getElementById("side-bar").style.marginLeft = "-310px";
}

/*Media query*/
function myFunction(x) {
  if (x.matches) {
    document.getElementById("logo-area-mobile").style.visibility = "visible";
    document.getElementById("side-bar").style.marginLeft = "0";
  } else {
    document.getElementById("logo-area-mobile").style.visibility = "visible";
    document.getElementById("side-bar").style.marginLeft = "-310px";
  }
}

var x = window.matchMedia("(min-width: 768px)");
myFunction(x);
x.addListener(myFunction);

/*Dropdown Menu*/


// var el = document.querySelector(".dropdown");
// el.addEventListener("click", showDropdown);

// function showDropdown() {
//   document.querySelector(".dropdown").classList.add('showMenu');
//   document.querySelector(".d-menu").style.display = "block";
//   document.querySelector(".showMenu").addEventListener("click", hideDropdown);
// }
// function hideDropdown() {
//   document.querySelector(".dropdown").classList.remove('showMenu');
//   document.querySelector(".d-menu").style.display = "none";
// }


$(document).ready(function () {
  $('.dropdown').on('click', function () {
    $(this).toggleClass("expand");

  });
});
