$(document).ready(function () {
   //codigo para dispositivos abaixo de 1024px
   if ($(window).width() < 1024) {
      
      //codigo para mostar e ocultar o menu
      $( function() {
         $( "#menu-icon" ).on( "click", function() {
            $( "#nav" ).animate({
               left: 0
            }, 1000 );

            $( "#menu-icon" ).hide();
            $( "#exit-icon" ).show();
         });

         $( "#exit-icon" ).on( "click", function() {
            $( "#nav" ).animate({
               left: -256
             }, 1000 );

             $( "#exit-icon" ).hide();
             $( "#menu-icon" ).show();
         });
      });

      //codigos para efeitos de scroll
      $( "#about-container" ).hide();
      $( "#skills" ).hide();
      $( "#resume" ).hide();
      $( "#portfolio" ).hide();

      $(window).scroll(function(){
         if ($(window).scrollTop() > 500) {
            $( "#about-container" ).show();
            $( "#about-photo" ).animate({
               left: 0
            }, 1000 );

            $( "#about-description" ).animate({
               right: 0
            }, 1500 );
         }

         if ($(window).scrollTop() > 1300) {
            $( "#skills" ).show();
         }

         if ($(window).scrollTop() > 2100) {
            $( "#resume" ).show();
            $( "#professional" ).animate({
               left: 0
            }, 1000 );

            $( "#education" ).animate({
               right: 0
            }, 1500 );
         }

         if ($(window).scrollTop() > 5600) {
            $( "#portfolio" ).show();
            $( "#portfolio-1" ).animate({
               left: 0
            }, 1000 );

            $( "#portfolio-2" ).animate({
               right: 0
            }, 1500 );
         }

      });


      //CÓDIGO PARA DISPOSITIVOS A PARTIR DE 1024PX
   } else {

      //codigos para efeitos de scroll
      $( "#about-container" ).hide();
      $( "#skills" ).hide();
      $( "#resume" ).hide();
      $( "#portfolio" ).hide();

      $(window).scroll(function(){
         if ($(window).scrollTop() > 300) {
            $( "#about-container" ).show();
            $( "#about-photo" ).animate({
               left: 0
            }, 1000 );

            $( "#about-description" ).animate({
               right: 0
            }, 1500 );
         }

         if ($(window).scrollTop() > 800) {
            $( "#skills" ).show();
         }

         if ($(window).scrollTop() > 1150) {
            $( "#resume" ).show();
            $( "#professional" ).animate({
               left: 0
            }, 1000 );

            $( "#education" ).animate({
               right: 0
            }, 1500 );
         }

         if ($(window).scrollTop() > 2200) {
            $( "#portfolio" ).show();
            $( "#portfolio-1" ).animate({
               left: 0
            }, 1000 );

            $( "#portfolio-2" ).animate({
               right: 0
            }, 1500 );
         }

      });
   }
   
   
}); // end ready
