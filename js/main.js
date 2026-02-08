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

  $(function () {

  $('#mailcheck').hide();
  $('#pwdcheck').hide();

  let user_no_err = true;
  let pass_no_err = true;

  $('#mailuser').on('keyup', mail_check)

  function mail_check() {
    let data = $('#mailuser').val();
    console.log("mailuser", data);
    if (data.length < 1) {

      $('#mailcheck').show();
      $('#mailcheck').html("* required field")
      user_no_err = false;

    }
    else if (data.length < 4) {
      $('#mailcheck').show();
      $('#mailcheck').html("* min length 4")
      user_no_err = false;
    }

    else {
      $('#mailcheck').hide();
      user_no_err = true;
    }

  }
  $('#pwduser').on('keyup', pass_check)

  function pass_check() {
    let data = $('#pwduser').val();
    console.log("pwduser", data);
    if (data.length < 1) {

      $('#pwdcheck').show();
      $('#pwdcheck').html("* required field")
      pass_no_err = false;

    }
    else if (data.length < 4) {
      $('#pwdcheck').show();
      $('#pwdcheck').html("* min length 4")
      pass_no_err = false;
    }

    else {
      $('#pwdcheck').hide();
      pass_no_err = true;
    }

  }

  $('#rform').submit(function () {
    mail_check();
    pass_check();

    if (user_no_err == true && pass_no_err == true) {
      return true;
    }
    else {
      return false;
    }
  })
})