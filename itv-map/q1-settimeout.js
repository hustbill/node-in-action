function test () {
  for ( var i = 1; i<=5; i++) {
    
      setTimeout( function timer(j) {
        console.log(j);
      }, i * 1000, i);
    
  }
}

test();

/*
WM-C02RQ2PMG8WM:itv-map huazhang$ node q1-settimeout.js
1
2
3
4
5
*/