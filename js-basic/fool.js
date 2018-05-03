function foo1()
{
	  return {
		        bar: "hello"
		    };
}

function foo2()
{
	  return
	  {
		        bar: "hello"
		    };
}


console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());  // undefined
// return , a semicolon is automatically inserted immediately after the retun statment
//  placing an opening crly brace at then end of a line in JavaScript.
// https://www.toptal.com/javascript/interview-questions
