// Get a list of users in JSON form
var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    // console.log(this);
    // console.log( this.responseText );
});
xhr.open("GET", "http://reqres.in/api/users", true);
xhr.send();


var $ = (function(){



  var ajax = function(data) {

    var xhr = new XMLHttpRequest();

    var async = data.async || true; 
    xhr.open(data.type, data.url, async);

    if (data.success) {
      xhr.onload = function() {
      };
    }

    if (data.error) {
      xhr.onerror = function() {

      };
    }
    
    if (data.complete) {
      xhr.onsuccess = function() {

      }
    }

    xhr.send("" + data.data);
  }

  return {

    ajax: ajax,

  }


})()

// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");