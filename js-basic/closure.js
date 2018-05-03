/*
Closure.js
首先要明确f函数即是所谓的闭包，我们看到它嵌套在fn函数内，而且访问了外部的变量a，
同时console的结果也证明了变量a贮存在了内存中！为什么会这样呢？原因在于f被赋予给了一个全局变量b，
导致始终存在在内存中，而f的存在必须依赖于fn，这导致fn也始终存在在内存中，
于是变量a不会在执行后被垃圾回收机制回收。以上例子很好地避免了全局变量的使用，避免了全局变量的污染。

Ref: 
1. http://www.cnblogs.com/zichi/p/4563435.html
2. http://www.cnblogs.com/geek12/p/4529573.html
*/

function fn() {
  var a = 0;
  function f() {
    console.log(a++);
  }
  return f;
}

var b = fn();
b();  // 0
b();  // 1
b();  // 2



//　　闭包还可用于模块化代码，减少全局变量的污染：

var abc = (function(){ //abc为外部匿名函数的返回值
  var a = 1;
  return function(){
    a++;
     console.log(a);
  }
})();
console.log('abc() :');
abc(); //2     
abc(); //3


// 
var obj = function(){
  var num = 0;
  function a() {
    num++;
    return num;
  }

  function b() {
    num++;
    return num;
  }

  return {
    a: a,
    b: b
  }
}();

console.log(obj.a()); // 1
console.log(obj.b()); // 2