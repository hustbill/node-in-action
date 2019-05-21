var reverse = function(s) {
  var res = '';
  for (var i = s.length - 1; i >=0; i--) {
    res += s[i];
  }
  return res;
}


const inputstr = 'hello world, hua';
const res = reverse(inputstr);

console.log("inputstr: ", inputstr);
console.log("res: ", res);


// O(n)
var reverse2 = function(str){
  var res = [];
  if (!str || typeof str != 'string' || str.length < 2) return str;

  for (var i = str.length-1; i>=0; i--) {
    res.push(str[i]);
  }

  return res.join('');
}


console.log("inputstr: ", inputstr);
console.log("res: ", reverse2(inputstr));

// can you do it in a recursive way?
function reverse3(str) {
  if (str === "" )  {
    return "";
  } else {
    return  reverse3(str.substr(1)) + str.charAt(0);
  }
}
console.log("inputstr: ", inputstr);
console.log("res: ", reverse3(inputstr));
