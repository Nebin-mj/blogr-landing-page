//Selecting Elements
const mobHeaderLi = document.querySelectorAll(".mob-menu .header-li");
const mobHeaderHeading = document.querySelectorAll(
  ".mob-menu .header-li-heading"
);
const mobHeaderSub = document.querySelectorAll(".mob-menu .header-li-sub");
const burger = document.querySelector(".burger");

//Event Listeners
burger.addEventListener("click", toggleHiddenClass);

mobHeaderHeading.forEach((val) => {
  val.addEventListener("click", toggleShowClass, { capture: true });
  val.parentElement.children[1].addEventListener(
    "transitionend",
    removeWorkingClass
  );
});

//Function
function removeWorkingClass(e) {
  e.target.removeAttribute("style");
  e.target.parentElement.classList.toggle("show");
  e.target.classList.remove("working");
}

function toggleShowClass(e) {
  let workingTarget;
  if (e.target.matches("img")) {
    workingTarget = e.target.parentElement.nextElementSibling;
  } else {
    workingTarget = e.target.nextElementSibling;
  }
  mobHeaderLi.forEach((val) => {
    if (val.classList.contains("show") && workingTarget.parentElement != val) {
      val.children[1].classList.add("working");
      val.children[1].setAttribute("style", "height:0");
    }
  });
  mobHeaderLi.forEach((val) => {
    if (
      val.classList.contains("active") &&
      val != workingTarget.parentElement
    ) {
      val.classList.remove("active");
    }
  });
  workingTarget.parentElement.classList.toggle("active");
  workingTarget.classList.add("working");
  workingTarget.setAttribute("style", "height:11.5rem");
  if (workingTarget.parentElement.classList.contains("show")) {
    workingTarget.setAttribute("style", "height:0");
  }
}

function toggleHiddenClass() {
  burger.parentElement.classList.toggle("hidden");
  mobHeaderLi.forEach((val) => {
    val.classList.remove("active");
    val.classList.remove("show");
  });
  if (burger.getAttribute("src") == "Images/icon-hamburger.svg") {
    burger.setAttribute("src", "Images/icon-close.svg");
  } else {
    burger.setAttribute("src", "Images/icon-hamburger.svg");
  }
}
