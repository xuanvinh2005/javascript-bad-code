

var userData = {};

// Fetch the location data for the current user.
load();
return;
// Output the location of the user. Oops, it doesn't work! Why?
console.log('Hello! Your IP address is ' + userData.ip + ' and your country is ' + userData.country_name);

// The load function will detect the current visitor's ip and location with ajax, using the
// freegeoip service. It will place the returned data in the userData variable when it's ready.

function load(){

    $.getJSON('https://freegeoip.net/json/?callback=?', function(response){
        userData = response;

        // Uncomment this line to see what is returned:
        // console.log(response);
    });
}