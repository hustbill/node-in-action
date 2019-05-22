var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
var total = 0;
var average = 0.0;

for (var row = 0; row < grades.length; ++row) {
    for( var col = 0; col < grades[row].length; ++col) {
      total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}
/*
Student 1 average: 81.33
Student 2 average: 79.67
Student 3 average: 91.33
*/

/*按照行访问  */
var grades = [[89, 77, 78 ], [76, 82, 81], [91, 94, 89]];
for (var col = 0; col < grades.length; ++col) {
    for( var row = 0; row < grades[col].length; ++row) {
      total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log("Test " + parseInt(col+1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

/*
Test 1 average: 85.33
Test 2 average: 84.33
Test 3 average: 82.67
*/
