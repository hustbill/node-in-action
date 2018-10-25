// find random count numbers from array
/*
著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
链接:http://caibaojian.com/get-random-element.html
来源:http://caibaojian.com

逻辑：

1.首先从整个数组中抽取一个随机值，然后把这个值和最后面一个没有查过的项交换位置

2.循环遍历的结果就是所有随机值都放到最后面，循环次数为要取的随机数组长度。

3.最后把最后面的数组取出来就得到我们的随机数组了。
*/

function getRandomArrayElements(arr, count) {
 var len = arr.length ;
 var shuffled = arr.slice(0);
 var i = arr.length;
 var min = len - count;

 var temp, index;

 while (i-- > min) {
   index = Math.floor((i + 1) * Math.random());
   temp = shuffled[index];
   shuffled[index] = shuffled[i];
   shuffled[i] = temp;
 }
 return shuffled.slice(min);
}

let items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

console.log(getRandomArrayElements(items, 4));