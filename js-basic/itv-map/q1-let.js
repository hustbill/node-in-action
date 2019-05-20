// using Let

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

/*

因为对于 let 来说，他会创建一个块级作用域，相当于
{ // 形成块级作用域
 let i = 0
 {
 let ii = i
 setTimeout( function timer() {
 console.log( i );
 }, i*1000 );
 }
 i++
 {
 let ii = i
 }
 i++
 {
 let ii = i
 }
 ...
}
*/
