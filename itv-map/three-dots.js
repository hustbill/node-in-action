// ...
// 和shalldow copy 类似

let a = {
  age: 1
}

let b = {...a}
a.age = 2
console.log(b.age) //1
