// mobile menu
const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = menuBtn.querySelector("i"),
  link = navLinks.querySelectorAll("li > a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-fill");
});

// remove menu when mobile menu link click
link.forEach((l) =>
  l.addEventListener("click", () => {
    navLinks.classList.remove("open");
  })
);
