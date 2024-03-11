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

// slider swiper
const slider = new Swiper(".swiper", {
  loop: true,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.3,
    },
    890: {
      // slidesPerView: 2.3,
    },
    1150: {
      slidesPerView: 3.3,
    },
  },
});
