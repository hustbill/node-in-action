import moment from 'moment';

// Use of Date.now() function
var startDate = Date.now();

var d = Date(startDate);

// Converting the number of millisecond in date string
a = d.toString();

// Printing the current date
console.log("The current date is: " + a);

var localDate = moment(startDate).format('LLL');
console.log('\nlocalDate : ' + localDate);

var gmtDate = moment(startDate).utc().format('LLL');
console.log('\ngmtDate : ' + gmtDate + " GMT");
