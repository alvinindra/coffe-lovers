(function ($) {
  'use strict';

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown')
          .on('mouseover', function () {
            $('.dropdown-toggle', this).trigger('click');
          })
          .on('mouseout', function () {
            $('.dropdown-toggle', this).trigger('click').blur();
          });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Date and time picker
  $('.date').datetimepicker({
    format: 'L',
  });
  $('.time').datetimepicker({
    format: 'LT',
  });

  // Testimonials carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(document).on('click', '.send_form', function () {
    var input_blanter = document.getElementById('wa_email');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
      phone = '6281394873595',
      walink2 = 'Halo saya ingin pesan meja',
      text_yes = 'Terkirim.',
      text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      var walink = 'whatsapp://send';
    }

    if ('' != input_blanter.value) {
      /* Call Input Form */
      var input_name1 = $('#wa_name').val(),
        input_email1 = $('#wa_email').val(),
        input_date1 = $('#wa_date').val(),
        input_time1 = $('#wa_time').val(),
        input_person1 = $('#wa_person').val();

      /* Final Whatsapp URL */
      var blanter_whatsapp =
        walink +
        '?phone=' +
        phone +
        '&text=' +
        walink2 +
        '%0A%0A' +
        '*Name* : ' +
        input_name1 +
        '%0A' +
        '*Email Address* : ' +
        input_email1 +
        '%0A' +
        '*Tanggal* : ' +
        input_date1 +
        '%0A' +
        '*Jam* : ' +
        input_time1 +
        '%0A' +
        '*Jumlah Orang* : ' +
        input_person1 +
        '%0A';

      /* Whatsapp Window Open */
      window.open(blanter_whatsapp, '_blank');
      document.getElementById('text-info').innerHTML =
        '<span class="yes">' + text_yes + '</span>';
    } else {
      document.getElementById('text-info').innerHTML =
        '<span class="no">' + text_no + '</span>';
    }
  });
})(jQuery);
