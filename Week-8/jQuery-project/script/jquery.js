$(document).ready(function(){
   var $navitem1 = $('nav>a:nth-child(1)');
   var $ul1 = $('#ul1');
   $($navitem1).mouseover(function(){
        $($ul1).show();
    });
    $($navitem1).mouseleave(function(){
        $($ul1).hide();
    });

    var $navitem2 = $('nav>a:nth-child(2)');
    var $ul2 = $('#ul2');
    $($navitem2).mouseover(function(){
         $($ul2).show();
     });
     $($navitem2).mouseleave(function(){
         $($ul2).hide();
     });

     var $navitem3 = $('nav>a:nth-child(3)');
     var $ul3 = $('#ul3');
     $($navitem3).mouseover(function(){
          $($ul3).show();
      });
      $($navitem3).mouseleave(function(){
          $($ul3).hide();
      });

      var $navitem4 = $('nav>a:nth-child(4)');
      var $ul4 = $('#ul4');
      $($navitem4).mouseover(function(){
           $($ul4).show();
       });
       $($navitem4).mouseleave(function(){
           $($ul4).hide();
       });

       var $navitem5 = $('nav>a:nth-child(5)');
       var $ul5 = $('#ul5');
       $($navitem5).mouseover(function(){
            $($ul5).show();
        });
        $($navitem5).mouseleave(function(){
            $($ul5).hide();
        });

        var $navitem6 = $('nav>a:nth-child(6)');
        var $ul6 = $('#ul6');
        $($navitem6).mouseover(function(){
             $($ul6).show();
         });
         $($navitem6).mouseleave(function(){
             $($ul6).hide();
         });

         var $navitem7 = $('nav>a:nth-child(9)');
         var $ul7 = $('#ul7');
         $($navitem7).mouseover(function(){
              $($ul7).show();
          });
          $($navitem7).mouseleave(function(){
              $($ul7).hide();
          });

          // var $search = $('nav>a:nth-child(7)');
          // var $input = $('#input');
          // $($search).mouseover(function(){
          //      $($search).show();
          //  });
          //  $($search).mouseleave(function(){
          //      $($search).hide();
          //  });

    $('.fa-commenting').draggable();
});
