const toggleButton = document.getElementsByClassName('nav-icon')[0];
const navbarLinks = document.getElementsByClassName('nav-links');
let allItams = document.querySelector(`.row-portfolio`);
toggleButton.addEventListener('click', function () {
  console.log(`clicked`);
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle(`active`)
    console.log(navbarLinks[i].classList);
    if (navbarLinks[i].classList.value == 'nav-links active') {

    } else {

    }
  }
});

function onClick(element) {

  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

function filterSelection(e) {
  if (e != `all`) {
    for (let itam of allItams.children) {
      console.log(e);
      let currentClass = itam.classList.value.split(`column `)[1];
      currentClass = currentClass.trim();
      console.log(currentClass);
      if (currentClass == e && currentClass != `modal`) {
        itam.style.display = ``;
      } else {
        itam.style.display = `none`;
      }
    }
  } else {
    for (let itam of allItams.children) {
      let currentClass = itam.classList.value.split(`column `)[1];
      currentClass = currentClass.trim();
      if (currentClass != `modal`) {
        itam.style.display = ``;
      }
    }
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}