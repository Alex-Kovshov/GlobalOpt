/*const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});*/

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      depth: 100,
      modifier: 3,
      scale: 0.9,
      stretch: -10,
      loop: true,
      
      
    },
  });
  
         /* burger menu */
$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
      
});
});

            /* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

      let scrollEl = $(this).data('scroll');
      let scrollElPos = $(scrollEl).offset().top;
      
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
        
  $("html, body").animate({
        scrollTop: scrollElPos - 30
    
      }, 500);
    
      
    });
 
                 /* Smooth scroll and page up */

$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.pageup').fadeIn();
  
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
