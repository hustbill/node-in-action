//Node.js Error Handling Patterns
// ref: http://www.nodewiz.biz/nodejs-error-handling-pattern/
//
var match = function match(foo,bar,next) {
    if ( foo !== bar ) {
        next( new Error("no match") );
    } else {
        var result = true;
        next(null, result);
    }
};
match(2, 2, function handleMatch(err,result){
  if ( err ) {
      console.log('Error: ', err);
  } else {
      console.log('Result: ', result);
  }
});
