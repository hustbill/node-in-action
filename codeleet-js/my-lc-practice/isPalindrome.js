/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var word = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    // https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric/5214668#5214668
    var stack = new Stack();
    for (var i = 0; i<word.length; i++){
      stack.push(word[i]);
    }
    var rs = "";
    while (stack.length() > 0) {
        rs += stack.pop();
    }

    if (rs == word) {
        return true;
    } else {
        return false;
    }
};

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function length() {
    return this.top;
}


const input = "A man, a plan, a canal: Panama";

console.log("input: " + input + ", is Palindrome: \n" + isPalindrome(input));

var isPalindrome = function(s) {
    var ts = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    var rs =  new Array();
    for (var i= ts.length -1 ; i >= 0; i--) {
        rs.push(ts[i]);
    }

    // console.log(rs.join(''));
    return rs.join('') == ts;
};
/*
Runtime: 68 ms, faster than 97.88% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 38.7 MB, less than 38.98% of JavaScript online submissions for Valid Palindrome.
*/
