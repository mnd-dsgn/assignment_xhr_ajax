// Get a list of users in JSON form
var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    // console.log(this);
    // console.log( this.responseText );
});
xhr.open("GET", "http://reqres.in/api/users", true);
xhr.send();


// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");

var $ = (function(){



  var ajax = function(data) {

    var xhr = new XMLHttpRequest();

    if (data.success) {
      xhr.addEventListener()
    }

    if (data.error) {
      xhr.addEventListener()
    }

    if (data.complete) {
      xhr.addEventListener();
    }
  }

  return {

    ajax: ajax,

  }


})()