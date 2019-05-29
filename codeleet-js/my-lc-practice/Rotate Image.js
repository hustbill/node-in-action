var rotate = function(matrix) {
    var len = matrix.length,
        i,
        level,
        tmp;

    level = 0;

    while (level < len/2) {
        for (i = level; i < len - level - 1; i++) {
           tmp = matrix[level][i];
           matrix[level][i] = matrix[len - i - 1][level];
           matrix[len - i - 1][level] = matrix[len - 1 - level][len - 1 - i];
           matrix[len - 1 - level][len - 1 - i] = matrix[i][len - 1 - level];
           matrix[i][len - 1 - level] = tmp;
        }
        level++;
    }
};


var mnMatrix = [[1, 2, 3], [4, 5, 6]];
console.log("mnMatrix: ", mnMatrix);

rotate(mnMatrix);


console.log("rotate_mnMatrix: ", mnMatrix);
