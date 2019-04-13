var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs'); // Открытие-закрытие мобильного меню
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

$(function () {
  $('.custom-order__item--filling .owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1,
        dots: false,
        nav: false
      }
    }
  });
});

$(function () {
  $('.custom-order__item--size .owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        loop: false,
        items: 4
      }
    }
  });
});

$(function () {
  $('.custom-order__item--decor .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        loop: false,
        items: 2,
        dots: false,
        autoWidth: true
      }
    }
  });
});

$(function () {
  $('.reviews .owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        loop: true,
        items: 1,
        dots: false
      }
    }
  });
});

