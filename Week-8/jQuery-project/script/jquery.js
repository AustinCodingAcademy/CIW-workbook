$(document).ready(function(){
   var $navitem1 = $('nav>a:nth-child(1)')
   $($navitem1).mouseover(function(){
        $('.test').show();
    });
    $($navitem1).mouseleave(function(){
        $('.test').hide();
    });

    var $navitem2 = $('nav>a:nth-child(2)')
    $($navitem2).mouseover(function(){
         $('.dropdown').show();
     });
     $($navitem2).mouseleave(function(){
         $('.dropdown').hide();
     });






    $('.fa-commenting').draggable();
});
