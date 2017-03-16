$(document).ready(function(){
   var $navitem = $('nav>a')
   $($navitem).mouseover(function(){
        $('.test').show();
    });
    $($navitem).mouseleave(function(){
        $('.test').hide();
    });
});
