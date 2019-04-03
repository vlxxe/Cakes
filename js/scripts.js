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
    loop: true, //Зацикливаем слайдер
    margin: 50, //Отступ от элемента справа в 50px
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1
      },
      768: {
        items: 1,
        dots: false,
        nav: true
      }
    }
  });
});

$(function () {
  $('.custom-order__item--size .owl-carousel').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: -20, //Отступ от элемента справа в 50px
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1
      },
      768: {
        loop: false,
        items: 4,
        autoWidth: true
      }
    }
  });
});

$(function () {
  $('.custom-order__item--decor .owl-carousel').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 50, //Отступ от элемента справа в 50px
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1
      },
      768: {
        loop: false,
        items: 2
      }
    }
  });
});

/* $(function () {
  $('.owl-carousel').owlCarousel;
}); */

