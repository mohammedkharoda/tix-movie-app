var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-forward",
    prevEl: ".arrow-back",
  },
  lazy: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper3 = new Swiper(".swiper3", {
  spaceBetween: 30,
  pagination: {
    el: ".round-btn-poster",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".poster-btn-back",
    prevEl: ".poster-btn-forward",
  },
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  let res = headerEl.classList.toggle("nav-open");
  if (res === "menu-icon") {
    headerEl.classList.add("menu-outline");
  } else {
    headerEl.classList.toggle("close-outline");
  }
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
