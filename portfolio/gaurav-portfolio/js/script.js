document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("nav-toggle");
});

window.addEventListener("scroll", function () {
  document.getElementById("menu").classList.remove("fa-times");
  document.querySelector(".navbar").classList.remove("nav-toggle");
});
