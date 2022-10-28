$(document).ready(function() {
    $('#about').hide();
    $('#skills').hide();

    $('#projects-area').hide();
    

    $(window).scroll(function() {
        if ($(this).scrollTop()<200) {
            $('#about').hide(500);
            $('#skills').hide(500);
         } else {
          $('#about').show(700);
         }

         if ($(this).scrollTop()>500) {
            $('#skills').show(1500);
         }

         if ($(this).scrollTop()>900) {
            $('#projects-area').show(1200);
         } else {
            $('#projects-area').hide();
         }
     });
});
