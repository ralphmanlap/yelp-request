  $(document).on("click", "#food", function() {
      event.preventDefault();

      console.log("working");


      
      
      var parameters = {
        grant_type: "client_credentials",
        client_id: "mEbfEMyYnU1EgNm2o3TOiw",
        client_secret:"ZIfhF7t2INthL9ut5BBvMWG4QgZeRNyWepOUDf96g9MXZzpZdfeUcSkBN5f4ZDn8",
      };

      var restaurant = "Wendys";
      var location = "Clifton,NJ";

      var queryURL = "https://dry-plateau-27231.herokuapp.com/?term=" + restaurant + "&location=" + location;

      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){
        console.log(response);
      });
       //  .then(function(response) {
       //   console.log(response);
       //   console.log(response.access_token);

       //   var token = response.access_token;

       //  var queryURL =  "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
       //  onCreate: (function(response) { // here comes the fix
       //          var t = response.transport; 
       //          t.setRequestHeader = t.setRequestHeader.wrap(function(original, k, v) { 
       //              if (/^(accept|accept-language|content-language)$/i.test(k)) 
       //                  return original(k, v); 
       //              if (/^content-type$/i.test(k) && 
       //                  /^(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)(;.+)?$/i.test(v)) 
       //                  return original(k, v); 
       //              return; 
       //          }); 

       //   return $.ajax({
       //    url: queryURL,
       //    method: "GET",
       //    headers: {authorization: "Bearer " + token},

          
          

       //    })
       // }).done(function(response) {
       //   console.log(response);




       //  });


      });


    