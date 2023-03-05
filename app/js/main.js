$(function() {
	$(".menu a, .gallery__btn, .header__logo-link").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1200);
	});

  // $('.menu__button, .menu__list-link').on('click', function () { 
  //   $('.menu__list').toggleClass('menu__list--active');
  // });

  $('.slider__items').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true
  });
  

});

const burgerButton = document.querySelector('.menu__button');
const burgerMenu = document.querySelector('.menu__list');
const burgerMenuItems = document.querySelectorAll('.menu__list-link');
burgerButton.addEventListener('click', function (e) {
  if (burgerButton) {
    burgerMenu.classList.toggle('menu__list--active');
  }
});

burgerMenuItems.forEach(burgerMenuItem => {
  burgerMenuItem.addEventListener("click", function () {
    burgerMenu.classList.remove('menu__list--active');
  });
});


