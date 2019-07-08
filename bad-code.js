
// Create an array with four elements:

var elem4 = new Array(1,2,3,4);

console.log('Four element array: ' + elem4.length);

// Create an array with one element. It doesn't do what you think it does:

var elem1 = new Array(23);

console.log('One element array? ' + elem1.length);

/* String objects also have their warts */

var str1 = new String('JavaScript'),
    str2 = "JavaScript";

// Strict equality breaks:

console.log("Is str1 the same as str2?", str1 === str2);

// Print the numbers from 1 to 10, 100ms apart. Or not.

for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i+1);
    }, 100*i);
}

/* To fix the bug, wrap the code in a self-executing function expression:

for(var i = 0; i < 10; i++){

    (function(i){
        setTimeout(function(){
            console.log(i+1);
        }, 100*i);
    })(i);

}               

*/

var userData = {};

// Fetch the location data for the current user.
load();

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