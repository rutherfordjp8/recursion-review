// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var increment = 0;
  var char = json.charAt(0);

  var next = function() {
    increment++;
    char = json.charAt(increment);
  };

  var number = function() {
    var string = '';

    while ( typeof char === 'number' && parseInt(char) !== NaN) {
      string += char;
      next();
    }
    
    return +string;
  };

  var letter = function() {
    var string = '';
    if (char === '"') {
      next();
    }
    while (typeof char === 'string' && char !== '"') {
      string += char;  
      next();
    }
    return string;
  };

  


};
