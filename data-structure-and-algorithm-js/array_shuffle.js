function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.random() * m--  | 0;
        t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
}

var array = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

var shuffledArray = shuffle(array);

console.log("array: " + array);
console.log("shuffled array: " + shuffledArray);