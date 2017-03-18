$(document).ready(function(){
  var $agree = $("input[name='agree']");
  $($agree).change(agreecheck);

  var $submit = $("button[name='submit']");
  $($submit).click(fnameval);
  $($submit).click(lnameval);
  $($submit).click(emailval);
  $($submit).click(pnumberval);
  $($submit).click(insert);
});

var fnameval = function(){
  var $fname = $("input[name='fname']");
  $('p').remove('#firsterror');
  if($fname.val().length > 0){
    $('p').remove('#firsterror');
    return true;
  }else{
  $('#pfirst').append('<p id="firsterror" style="color:red">First name is required!</p>');
}
};

var lnameval = function(){
var $lname = $("input[name='lname']");
$('p').remove('#lasterror');
if($lname.val().length > 0){
  $('p').remove('#lasterror');
  return true;
}else{
$('#plast').append('<p id="lasterror" style="color:red">Last name is required!</p>');
}
};

var emailval = function(){
  var $email = $("input[name='email']");
  var $mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  $('p').remove("#emailerror");
  if($email.val().length > 0 && $mailformat.test($email.val())){
    $('p').remove("#emailerror");
    return true;
  }else{
    $('#pemail').append('<p id="emailerror" style="color:red">Correct email is required!</p>');
    $email.val("");
  }
};

var pnumberval = function(){
  var $pnumber = $("input[name='pnumber']");
  var $phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  $('p').remove('#phoneerror');
  if($pnumber.val().length > 0 && $phoneformat.test($pnumber.val())){
    $('p').remove('#phoneerror');
    return true;
  }else {
    $('#pphone').append('<p id="phoneerror" style="color:red">Correct phone number is required!</p>');
    $pnumber.val("");
  }
};

var agreecheck = function(){
  var $agree = $("input[name='agree']");
  if($agree.prop("checked") === true){
    $("button").removeAttr('disabled');
  }else{
    $("button").attr('disabled', 'true');
  }
};

var insert = function(){
  var $fname = $("input[name='fname']").val();
  var $lname = $("input[name='lname']").val();
  var $email = $("input[name='email']").val();
  var $tel = $("input[name='pnumber']").val();
  var $row = "<tr><td>"+$fname+"</td><td>"+$lname+"</td><td>"+$email+"</td><td>"+$tel+"</td></tr>";
  if(($fname.length > 0 && $lname.length > 0) && ($email.length > 0 && $tel.length > 0)){
    $("table").append($row);
    $("#inputboxes")[0].reset();
  };
};
