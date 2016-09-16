// Get a list of users in JSON form
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     // console.log(this);
//     // console.log( this.responseText );
//   });
// xhr.open("GET", "http://reqres.in/api/users", true);
// xhr.send();

function jsonToQueryString(json) {
    return "?" + Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
    }).join('&');
  };



var $ = (function(){

  var ajax = function(data) {
    var xhr = new XMLHttpRequest();

    var async = data.async || true; 

    if(data.type = "GET") {
      data.url += jsonToQueryString(data.data);
      console.log(data.url);
    }    

    xhr.open(data.type, data.url, async);

    if (data.headers) {
      for (headers in data.headers) {
        xhr.setRequestHeader(headers, data.headers[headers]);
      }
    }
    
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
      xhr.send(jsonToQueryString(data.data));
    } else {
      xhr.send();
    }
  };

  var get = function(url, data, success, dataType) {
    var data = {
      type: "GET",
      url: url,
      data: data,
      success: success,
      headers: {"Data-Type": dataType}
    }
    ajax(data);
  };

  var post = function(url, data, success, dataType) {
    var data = {
      type: "POST",
      url: url,
      data: data,
      success: success,
      headers: {"Data-Type": dataType}
    }
    ajax(data);
  };


  return {
    ajax: ajax,
    get: get,
    post: post
  }

})();

$.get("http://reqres.in/api/users",  {page: 3}, function( json ) {
    console.log(JSON.parse(json));
  }, "application/json");

$.post("http://reqres.in/api/users",  { "name": "adrian", "job":"roll shoulders" }, function( json ) {
    console.log(JSON.parse(json));
  }, "application/json");

// $.ajax({
//   url: "http://reqres.in/api/users",
//   type: "GET",

//   data: {
//     page: 2,
//   },

//   headers: {
//     "Data-Type": 'json',
//     "Content-Type" : 'application/json' 
//   },


//   success: function( json ) {
//     //console.log(JSON.parse(json));
//     // for example, build a post object onto the body
//   },

//   // Error callback to run if the request fails
//   // (e.g. server returns an error code like 301)
//   // The raw request and any status codes are 
//   // passed to the callback
//   error: function( xhr, status, errorThrown ) {
//       alert( "Sorry, there was a problem!" );
//       // console.log( "Error: " + errorThrown );
//       // console.log( "Status: " + status );
//       // console.dir( xhr );
//   },

//   // Complete callback to run regardless of the outcome
//   complete: function( xhr, status ) {
//       alert( "The request is complete!" );
//   }
// });
