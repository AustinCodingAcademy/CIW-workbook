$(document).ready(function(){
  var $fname = $("input[name='fname'].val()");
  var $lname = $("input[name='lname'].val()");
  var $email = $("input[name='email'].val()");
  var $tel = $("input[name='pnumber'].val()");
  var $agree = $("input[name='agree'].val()");
  var $button = $('button');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log($fname);
  if($fname.length > 0 && typeof($fname) === typeof("a")){
    if($lname.length > 0 && typeof($lname) === typeof("a")){
        if($email.value.match(mailformat)){
          if($tel.length > 0 && typeof($tel) === typeof(1)){
            if($agree.prop("checked") === true){
              $button.disable(false);
            }
          }
        }
    }
  }
});

//place all ifs in var and return true than create an if that if all are true enable button
//use ternary if statement
