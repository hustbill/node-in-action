function test () {
  for ( var i = 1; i<=5; i++) {
    setTimeout( function timer() {
      console.log(i);
    }, i * 1000);
  }
}

test();

/*
WM-C02RQ2PMG8WM:itv-map huazhang$ node question1.js
6
6
6
6
*/