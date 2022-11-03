$(document).ready(function () {
   $('#about').hide();
   $('#skills').hide();
   $('#projects').hide();
   $('#experience').hide();

   $('#one').hide();
   $('#two').hide();
   $('#three').hide();
   $('#four').hide();


   //CÓDIGO PARA DISPOSITIVOS ABAIXO DE 768PX
   if ($(window).width() < 768) {
      //codigo para os efeitos do menu
      $("#nav").hide();
      $("#exit-icon").hide();

      $("#menu-icon").click(function () {
         $("#menu-icon").hide();
         $("#exit-icon").fadeIn();
         $("#nav").slideDown(300);
      });
      $("#exit-icon").click(function () {
         $("#exit-icon").hide();
         $("#menu-icon").fadeIn();
         $("#nav").slideUp(300);
      });

      //codigo para os efeitos durante o scroll
      $(window).scroll(function () {
         if ($(this).scrollTop() < 100) {
            $('#about').hide(700);
         } else {
            $('#about').show(1000);
         }
   
         if ($(this).scrollTop() > 750) {
            $('#skills').show(1500);
         } else {
            $('#skills').hide(1500);
         }

         if ($(this).scrollTop() > 1500) {
            $('#projects').show(1500);
         } else {
            $('#projects').hide(1500);
         }

         if ($(this).scrollTop() > 2850) {
            $('#experience').show(1500);
         } else {
            $('#experience').hide(1500);
         }
         if ($(this).scrollTop() > 3000) {
            $('#one').fadeIn(1500, function () {
               $('#two').fadeIn(1500, function () {
                  $('#three').fadeIn(1500, function () {
                     $('#four').fadeIn(1500)
                  });
               });
            });
         } else {
            $('#one').hide();
            $('#two').hide();
            $('#three').hide();
            $('#four').hide();
         }
      });

      //CÓDIGO PARA DISPOSITIVOS A PARTIR DE 768PX
   } else {
      //codigo para os efeitos durante o scroll
      $(window).scroll(function () {
         if ($(this).scrollTop() < 150) {
            $('#about').hide(1500);
         } else {
            $('#about').show(1500);
         }
   
         if ($(this).scrollTop() > 700) {
            $('#skills').show(1500);
         } else {
            $('#skills').hide(1500);
         }

         if ($(this).scrollTop() > 1200) {
            $('#projects').show(1500);
         } else {
            $('#projects').hide(1500);
         }

         if ($(this).scrollTop() > 1850) {
            $('#experience').show(1500);
         } else {
            $('#experience').hide(1500);
         }
         if ($(this).scrollTop() > 2200) {
            $('#one').fadeIn(1500, function () {
               $('#two').fadeIn(1500, function () {
                  $('#three').fadeIn(1500, function () {
                     $('#four').fadeIn(1500)
                  });
               });
            });
         } else {
            $('#one').hide();
            $('#two').hide();
            $('#three').hide();
            $('#four').hide();
         }
      });
   }

});
