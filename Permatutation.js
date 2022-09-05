function permutations(string){
    var permArr = [],
    usedChars = [];
    
    var arr = string.split('');
    
    var permute = function(array){
      var i, ch;
      for (i = 0; i < array.length; i++) {
        ch = array.splice(i, 1)[0];
        usedChars.push(ch);
        if (array.length === 0) {
          permArr.push(usedChars.slice());
        }
        permute(array);
        array.splice(i, 0, ch);
        usedChars.pop();
      }
      
      return permArr;
    };
    
    var result = permute(arr);
    
    for (var i = 0; i < result.length; i++){
      var str = "";
        for(var j = 0; j< result[i].length; j++){
          str += result[i][j];
        }
      result[i] = str;
    }
    
    return result.filter(function(item, pos) { return result.indexOf(item) == pos; });
  }
  
  permutations('aabb');
  //done