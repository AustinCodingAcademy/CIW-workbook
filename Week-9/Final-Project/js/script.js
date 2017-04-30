$(document).ready(function() {


    $("button").click(function() {

        var $name = $("input[name='name']").val();
        var $email = $("input[name='email']").val();
        var $row = "<p>Hello " + $name + ". We will send you Dallas updates to " + $email + "</p>";
        $("p").append($row);

    });
});
