// window on scroll call check elements
window.addEventListener("scroll", checkElements);
// window on load call check elements
window.addEventListener("load", checkElements);

function checkElements() {
  console.log("checkElements");
  var elements = document.querySelectorAll(".fadeIn");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("visible");
    }
  }
}
