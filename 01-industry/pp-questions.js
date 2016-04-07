/*
 Mar 30, 2015
Accepted Offer
Positive Experience
Average Interview
Application
I applied through college or university. The process took 2+ months. I interviewed at PayPal in January 2015.
Interview
I interviewed on many different teams and the interview style differed from team to team. The interview process was pretty standard. Ranged from your typical algorithm questions to javascript stuff since they are now heavily invested in JS/Node. It really depends on the team and the job.

Interview Questions
Explain this:
var Bob = {
     name: "Bob",
     name_fn: function(){
          return this.name;
     }
}

console.log(Bob.name_fn()) //"Bob"
var fn = Bob.name_fn
console.log(fn()) //undefined  
*/

var Bob = {
     name: "Bob",
     name_fn: function(){
          return this.name;
     }
}

console.log(Bob.name_fn()) //"Bob"
var fn = Bob.name_fn
console.log(fn()) //undefined  



console.log("first");
setTimeout(function() {
    console.log("second");
}, 0);
console.log("third");
// first , third, second

console.log('node.js version')


console.log("first");
setImmediate(function(){
    console.log("second");
});
console.log("third");
