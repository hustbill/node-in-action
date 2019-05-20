/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length; 
    var n = matrix[0].length;
    
    var start = 0;
    var end = m * n - 1;
    var row = 0, col = 0;
    var mid;
    
    
    if (matrix[0][0] > target || target > matrix[m-1][n-1])  return false;
    
    while (start <= end) {
        mid = parseInt(start + (end -start) /2 );
        row = parseInt(mid / n);
        col = mid % n;
        
        if (matrix[row][col] == target)  {
            return true;
        } else if (matrix[row][col] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return false;
};
// http://www.cnblogs.com/Liok3187/p/4676054.html
