$(document).ready(function () {
   $('#about').hide();
   $('#skills').hide();
   $('#projects-area').hide();


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
            $('#about').hide(500);
            $('#skills').hide(500);
         } else {
            $('#about').show(700);
         }
   
         if ($(this).scrollTop() > 350) {
            $('#skills').show(1500);
         } else {
            $('#skills').hide(1500);
         }

         if ($(this).scrollTop() > 300) {
            $('#projects-area').show(1500);
         } else {
            $('#projects-area').hide(1500);
         }
      });

      //CÓDIGO PARA DISPOSITIVOS A PARTIR DE 768PX
   } else {
      //codigo para os efeitos durante o scroll
      $(window).scroll(function () {
         if ($(this).scrollTop() < 200) {
            $('#about').hide(500);
            $('#skills').hide(500);
         } else {
            $('#about').show(700);
         }
   
         if ($(this).scrollTop() > 500) {
            $('#skills').show(1500);
         } else {
            $('#skills').hide(1500);
         }

         if ($(this).scrollTop() > 1000) {
            $('#projects-area').show(1500);
         } else {
            $('#projects-area').hide(1500);
         }
      });
   }

});
