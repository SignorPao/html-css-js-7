// mobile menu
const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = menuBtn.querySelector("i"),
  link = navLinks.querySelectorAll("li > a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-fill");
  navLinks.scrollTo(0, 0);
});

// remove menu when mobile menu link click
link.forEach((l) =>
  l.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-fill");
    navLinks.scrollTo(0, 0);
  })
);
