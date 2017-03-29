$(document).ready(function(){
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/posts',
    method: 'GET'
  }).then(function(data) {
    data.forEach(function(obj) {
      var $row = "<tr><td>"+obj.id+"</td><td>"+obj.userId+"</td><td>"+obj.title+"</td><td>"+obj.body+"</td></tr>";
        $("table").append($row);
  });
});
});
