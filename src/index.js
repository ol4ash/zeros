module.exports = function getZerosCount(number) {

var num = number;

var zeros=0;
var i = 1;

while (parseInt(num/Math.pow(5,i))>0) {

zeros = zeros + parseInt(num/Math.pow(5,i));
i++;
}

  
return zeros



  // your implementation
}
