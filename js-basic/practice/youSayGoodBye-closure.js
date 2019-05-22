function youSayGoodBye() {
   console.log("Good Bye!");

  function andISayHello() {
    console.log("Hello!");
  }

  return andISayHello;
}


var result = youSayGoodBye();

//console.log("result: ", result);


function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    var elapsedTime = Date.now() - startTime;
    console.log("elapsedTime: ", elapsedTime);
    return elapsedTime;
  }

  return getDelay;
}

var timer = stopWatch();

// do something that takes some time
for (var i = 0; i < 400; i++) {
   var foo = Math.random() * 10000;
   console.log("foo: ", foo.toFixed(2));
}

// invoke the returned function
timer();
// console.log("timer: ", timer());
