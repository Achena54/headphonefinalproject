 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

   btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  new Swiper(".headphoneSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });