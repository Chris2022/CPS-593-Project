/" I found this JS code to use to help me with having a "smooth" transition*/

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});