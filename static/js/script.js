// ! 1000 is 1 sec
$(document).ready(function () {
  //? Bootstrap Carousel
  $('.carousel').carousel({
    interval: 3000,
  });
  //? Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,
    navText: ['navigate_before', 'navigate_next'],
    navClass: ['material-icons btn btn-prev', 'material-icons btn btn-next'],
    navId: ['prevv', 'nexxt'],
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    autoplay: true,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },

      500: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-item');

  //?toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //? animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //?burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();