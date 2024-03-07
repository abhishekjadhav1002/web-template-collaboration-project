const menuIcon = document.querySelector(".menuIcon");
const nav = document.querySelector("nav");
let navOpen = false;

menuIcon.addEventListener("click", () => {
  navOpen = !navOpen;

  if (navOpen) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});
