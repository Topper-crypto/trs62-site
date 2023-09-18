const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


 effect: "cube",
grabCursor: true,
cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}, 
 
  

  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
     
});

AOS.init();

/* var btn = $('#up'); //создаем переменную для кнопки

    $(window).scroll(function() {
      if ($(window).scrollTop() > 500) { //отслеживаем высоту от верха страницы в 100px
        btn.addClass('show'); // присваиваем кнопке класс show для управления видимостью
      } else {
        btn.removeClass('show'); // если меньше 500px от верха страницы убираем класс show
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300'); //при клике на кнопку плавно прокручиваем до верха body
    });
 */




/*   effect: "cube",
grabCursor: true,
cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}, */