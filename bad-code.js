var Color = 'red';
var SomeNumber = 234;
var AnArray = [1,2,3];
var Foo = { bar: 123 };


/* This is a regular function. */
function sum() {
    var total = 0, i = 0, len = arguments.length;
    for ( ; i < len; ++i ) {
        total += arguments[i];
    }
    return total;
}
 
/* This is a constructor function */
function Widget(innerText, styles) {
    this.innerText = innerText;
    this.cssStyles = styles;
}


foo = 3; // NO!
var foo = 3; // YES


var someVar1 = 'a';
var someVar2 = 'b';
var someVar3 = 'c';
 
// Much easier:
var someVar1 = 'a',
    someVar2 = 'b',
    someVar3 = 'c';
	
	
1 == "1"; // true
false == " nt "; // true
[[],[]] == true; // true
 
// ... Confused?


function myFunction(arg) {
 
    var configObj = {
        option1: 123,
        option2: 456
    };
 
    // do stuff
 
}

var myFunction = (function(){
 
    var configObj = {
        option1: 123,
        option2: 456
    };
 
    return function(arg) {
        // do stuff
    };
 
})();


document.getElementById('foo').style.border = '3px solid #FFF';
document.getElementById('foobar').style.border = '3px solid #FFF';
document.getElementById('foofoobar').style.border = '3px solid #FFF';
document.getElementById('foofoobarbar').style.border = '3px solid #FFF';

exports.getUsers = (req, res)=>{
User.find({})
 .exec((err, data)=>{
 res.send(data);
 });
};
module.exports = exports;


function book(name,author,content,date) {
  var name = name;
  var author = author;
  var content = content;
  var date = date;

  var self = { 
    findWord: function(word) { 
      return content.indexOf(word)>=0;
    },
    removeWord: function(word) { 
      return content.indexOf(word)>=0?content.replace(word + ' ',''):content;
    },
    replaceWord: function(oldWord,newWord) { 
      return content.indexOf(oldWord)>=0?content.replace(oldWord,newWord):content;
    },
    getName: function() {return name;},
    getAuthor: function() {return author;},
    getContent: function() {return content;},
    getDate: function() {return date;}
  };

  return self;
};