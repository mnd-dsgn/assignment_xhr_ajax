// Get a list of users in JSON form
var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    // console.log(this);
    // console.log( this.responseText );
  });
xhr.open("GET", "http://reqres.in/api/users", true);
xhr.send();



var $ = (function(){

  function jsonToQueryString(json) {
    return Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
    }).join('&');
  };


  var ajax = function(data) {

    var xhr = new XMLHttpRequest();

    var async = data.async || true; 
    xhr.open(data.type, data.url, async);

    // if (data.headers) {
    //   var headers = JSON.parse(data.headers);
    //   xhr.setRequestHeader(headers);
    // }

    
    if (data.success) {
      xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 400) {
          data.success(xhr.responseText);
        } // may have to parse from JSON
      }
    }

    if (data.error) {
      xhr.onerror = data.error;
    }
    
    if (data.complete) {
      xhr.onsuccess = data.complete;
    }

    if (data.type === "POST") {
      xhr.send(jsonToQueryString(data.type));
    }
  }

  return {

    ajax: ajax,

  }


})()

$.ajax({
    url: "http://reqres.in/api/users",
    type: "GET",
    data: {
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    },
    success: function(response){
        console.log(response);
    }
});

// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");