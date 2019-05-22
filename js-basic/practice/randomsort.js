// 著作权归作者所有。
// 商业转载请联系作者获得授权,非商业转载请注明出处。
// 链接:http://caibaojian.com/20190316-interview.html
// 来源:http://caibaojian.com


var arr = [1,2,3,4,5,6,7,8,9]
function randomsort1 (arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		const ran = parseInt(Math.random() * len)
		const temp = arr[ran]
		arr[ran] = arr[i]
		arr[i] = temp
	}
	return arr
}


var rdmarr = randomsort1(arr);

console.log("rdmarr: ", rdmarr);
