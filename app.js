$(document).ready(function () {
  $(".image__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});

const toggle = document.querySelector(".header__bars");
const menu = document.querySelector(".header__menu-list");
const activeClass = "is-show";
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.add(activeClass);
});

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header__bars")) {
    menu.classList.remove(activeClass);
  }
});
