function test () {
  for ( var i = 1; i<=5; i++) {
    (function(j) {
      setTimeout( function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

test();

/*
WM-C02RQ2PMG8WM:itv-map huazhang$ node q1-closure.js
1
2
3
4
5
*/