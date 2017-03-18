$(document).ready(function() {
    var $navitem1 = $('nav>a:nth-child(1)');
    var $ul1 = $('#ul1');
    $($navitem1).hover(function() {
      $($ul1).removeClass('fback');
      //$($ul1).show();
    });
    //$('ul').mouseout(function() {
    $(document).click(function() {
      $($ul1).addClass('fback');
        //$($ul1).hide();
    });

    var $navitem2 = $('nav>a:nth-child(2)');
    var $ul2 = $('#ul2');
    $($navitem2).mouseover(function() {
        $($ul2).show();
    });
    $(document).click(function() {
        $($ul2).hide();
    });

    var $navitem3 = $('nav>a:nth-child(3)');
    var $ul3 = $('#ul3');
    $($navitem3).mouseover(function() {
        $($ul3).show();
    });
    $(document).click(function() {
        $($ul3).hide();
    });

    var $navitem4 = $('nav>a:nth-child(4)');
    var $ul4 = $('#ul4');
    $($navitem4).mouseover(function() {
        $($ul4).show();
    });
    $(document).click(function() {
        $($ul4).hide();
    });

    var $navitem5 = $('nav>a:nth-child(5)');
    var $ul5 = $('#ul5');
    $($navitem5).mouseover(function() {
        $($ul5).show();
    });
    $(document).click(function() {
        $($ul5).hide();
    });

    var $navitem6 = $('nav>a:nth-child(6)');
    var $ul6 = $('#ul6');
    $($navitem6).mouseover(function() {
        $($ul6).show();
    });
    $(document).click(function() {
        $($ul6).hide();
    });

    var $navitem9 = $('nav>a:nth-child(9)');
    var $ul9 = $('#ul9');
    $($navitem9).mouseover(function() {
        $($ul9).show();
    });
    $(document).click(function() {
        $($ul9).hide();
    });

    var $search = $('.fa-search');
    var $input = $('#input');
    $($search).click(function() {
        $($input).show();
    });
    $(document).dblclick(function() {
        $($input).hide();
    });

    var $shopbag = $('.fa-shopping-bag');
    var $shoplist = $('#shoptable');
    $($shopbag).click(function() {
        $($shoplist).show();
    });
    $(document).dblclick(function() {
        $($shoplist).hide();
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
});
