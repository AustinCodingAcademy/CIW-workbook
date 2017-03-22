$(document).ready(function() {

    $('nav a').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);

$('.searchbox').click(function(){
  $("input").toggleClass("fback");
});

$('.tglclass').click(function(){
  $("table").toggleClass("fback");
});
    var $purchaseshiraz = "<tr><td>Foundry Shiraz $50</td></tr>";
    $('#shiraz').click(function() {
        $('#shoptable').append($purchaseshiraz);
    });

    var $purchasechard = "<tr><td>Foundry Chardonnay $60</td></tr>";
    $('#chard').click(function() {
        $('#shoptable').append($purchasechard);
    });

    var $purchasecab = "<tr><td>Foundry Cabernet $80</td></tr>";
    $('#cab').click(function() {
        $('#shoptable').append($purchasecab);
    });

    $('#signingup').click(function() {
        var $email = $('input[name="email"]').val();
        var $mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        $('div').remove(".emailerror");
        if ($email.length > 0 && $mailformat.test($email)) {
            alert("Welcome to our site " + $email);
            $('input[name="email"]').val("");
        } else {
            $('#emailerror').append('<div class="emailerror" style="color:red">Valid email is required!</div>');
            $('input[name="email"]').val("");
        }
    });

    $('#commenticon').click(function() {
        $('.comments').show();
    });

    $('#exit').click(function() {
        $('.comments').hide();
    });

    $('#post').click(function() {
        var $usercomm = $('#comm').val();
        var $actualcomm = "<b id='actualcomm' style='color: #82192c'>" + $usercomm + "<br/></b>";
        if ($usercomm.length > 0) {
            $('#postcomments').append($actualcomm);
            $('#comm').val("");
        }
    });

    $('#clear').click(function(){
      $('b').remove("#actualcomm");
    });

    $('#comm').keypress(function(e) {
        var key = e.which;
        if (key === 13) {
            $('#post').click();
        };
    });

    $('.fa-bars').click(function(){
      $('.top-logo').toggleClass('fback');
      $('nav>a').toggleClass('menu-anc');
    });

    // $('.').click(function() {
    //     $("#accordion" ).accordion();
    //   } );

});
