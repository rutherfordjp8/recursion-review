// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if(obj === null){
    return 'null';  
  }

  if(obj === undefined || obj instanceof Function){
    return '';
  }

  if(typeof obj === 'string') {
    return '"' + obj.toString() + '"' ;

  } else if(typeof obj === 'number' || typeof obj === 'boolean') {
    return "" + obj;

  } else if(Array.isArray(obj)) {

    var string = '[';

    if(obj.length === 0) {
      return '[]';
    }

    if(obj.length === 1) {
      return '[' + stringifyJSON(obj[0]) + ']';

    }else{
      
      for(var i = 0; i< obj.length; i++){

        if(i === obj.length-1){

          string += stringifyJSON(obj[i]);

        }else{
          string += stringifyJSON(obj[i]) + ",";
        }
      }
    }
    return string + ']';

  } else if(obj.constructor === Object){
    var keylist = Object.keys(obj);
    var string2 = '{';
  
    if (keylist.length === 0){

      return '{}';

    } else if (keylist.length === 1){

      for(var  j in obj){

        string2 += '"' + j + '":' + stringifyJSON(obj[j]); 
      }

    }else{

      for(var k in obj){


        if(obj[k] === undefined || obj[k] instanceof Function){

          string2 += stringifyJSON(obj[k]);
        } else if (k === keylist[keylist.length-1]){

          string2 += '"' + k + '":' + stringifyJSON(obj[k]);
        }else{

          string2 += '"' + k + '":' + stringifyJSON(obj[k]) + ',';
        }

      }
    }
      
    return string2 + '}';      

  }

};
