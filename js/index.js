$(document).ready(function() {

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
     });
});
