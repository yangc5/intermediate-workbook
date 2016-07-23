'use strict';

$(document).ready(function() {
    // You code here
    var url = 'https://reqres-api.herokuapp.com/api/users/';
    $.ajax(url, {

      success: function(users) {
        //generate the users list: master
        users.forEach(function(user){

          var str = '<tr>';
          str += '<td>'+user.id+'</td>';
          str += '<td>'+user.first_name+'</td>';
          str += '<td>'+user.last_name+'</td>';
          str += '</tr>';
          str += '<td><a href="#" data-id="'+user.id+'">view</a></td>';

          $('tbody').append(str);

        });

        $('a').click(function(event){
          event.preventDefault();
          var id = $(this).data('id');
          var userUrl = url+id.toString();
          console.log(userUrl);

          $.ajax(userUrl, {
            success: function(user) {

              //populate user detail based on the user clicked: detail
              var str = '<h3>'+user.first_name+'</h3>';
              str += '<h4>'+user.occupation+'</h4>';
              str +='<p>'+user.phone+'</p>';
              str +='<p>'+user.address+'</p>';
              str += '<img src="'+user.avatar+'">';

              $('#details').html(str);
            }
          });
        });
      }
    });
});
