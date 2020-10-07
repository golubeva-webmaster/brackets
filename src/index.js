module.exports = function check(str, bracketsConfig) {
    let newBC = bracketsConfig.map(item => item.join(''));
    let lengthOld = str.length;
    while(lengthOld > 0){
      newBC.forEach(function(item){
        str = str.replace(item,'');
      });
      if (str.length === lengthOld)
        return false;
      else if(str.length === 0)
        return true;
      else
        lengthOld = str.length;
    }
}