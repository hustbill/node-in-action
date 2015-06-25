# node.js 编码规范

## 项目结构

*后续补充*

## 命名规则

确保所有的命名都是有意义的,尽量避免用单字符变量和少见单词来命名。

  * 文件和文件夹: 单词直接使用 _ (underscore)来分隔, 私有文件可以用_开头. child_process.js, _linklist.js
  * 函数和变量：functionNamesLikeThis, variableNamesLikeThis,
  * 类名和枚举类型：ClassNamesLikeThis, EnumNamesLikeThis,
  * 类方法：methodNamesLikeThis
  * 常量：SYMBOLIC_CONSTANTS_LIKE_THIS

## 文件编码

文件编码统一采用 `UTF-8`

Sublime Text 2 设置(perfernces > Settings - User)：

```
  "default_encoding": "UTF-8"
```

## 代码缩进

使用2个空格而不是 tab 来进行代码缩进，同时绝对不要混用空格和 tab 。

Sublime Text 2 设置(perfernces > Settings - User)：

```
  "tab_size": 2,
  "translate_tabs_to_spaces": true
```

## 换行

使用 UNIX 风格的换行符 (`\n`)，同时在每个文件的结尾添加一个换行符。
Windows 风格的换行符 (`\r\n`) 是绝对禁止出现在任何项目中的。

Sublime Text 2 设置(perfernces > Settings - User)：

```
  "default_line_ending": "unix"
```

## JavaScript 使用严格模式

```js
"use strict"
```

或者

```bash
node --use_strict
```

## 去除行末尾的多余空格

就像吃完饭要刷牙一样，在提交 (commit) 代码之前你需要清理掉所有的不必要的空格。

Sublime Text2 设置(perfernces > Settings - User)：

```
  "trim_trailing_white_space_on_save": true
```

## 使用分号

每行结束必需使用分号。


## 每行80个字符

限制你每行代码不超过80个字符。尽管现在的显示器越来越大，但是你的大脑并没有变大，并且你还可以把你的大显示器切分成多屏来显示。

Sublime Text 2 设置(perfernces > Settings - User)：

```
  "rulers": [80]
```

多屏：`view > Layout > Columns 2`

## 使用单引号

除非编写.json文件或是SQL Statment，其他时候都请用单引号包裹字符串。

*Right:*

```js
var foo = 'bar';
```

*Wrong:*

```js
var foo = "bar";
```

## 函数定义

 * 同步函数:1个参数 options (object)
```
function funcName(options){
...
}
```

 * 异步函数: 2个参数 options (object), callback (function)

```
function funcName(options, callback){
...
}
```


## 函数注释: [Google 的js 规范](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#Comments)

 注释包含:  函数说明, 参数说明, 返回值说明
 
```
/**
 *  Function Description
 * @param  {Object}   options
 *  options:
 *     key: type, required or optional, default, description
 * @param  {Function} callback [description]
 * @return {array}            [description]
 */
function funcName(options, callback){
...
}
```

## 写精简的函数

保持你的函数尽可能的精简。逻辑尽量简单,并且是可复用的.
不写大函数,尽量不要超过50行。



## 大括号位置

请把你的所有的左大括号都放在语句开始的这一行。

*Right:*

```js
if (true) {
  console.log('winning');
}
```

*Wrong:*

```js
if (true)
{
  console.log('losing');
}
```

同时，请注意在条件判断前后都添加一个空格。

## 每个变量声明都带一个 var

每个变量声明都带一个 var ，这样删除或者调整变量声明的顺序会更加容易。
不要把变量都声明在最前面，而是声明在它最有意义的地方。

*Right:*

```js
var keys   = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (items.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

*Wrong:*

```js
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (items.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```

## 使用字面表达式，用 '{}' ,'[]' 代替 `new Array` ，`new Object`

    不要使用 `string`，`bool`，`number` 的对象类型，即不要调用 `new String` ，`new Boolean` ，`new Number`

## Object ，Array 创建，当有多个元素时，注意分行排列时逗号的位置
  
    *Right：*

    ```js
    var a = ['hello', 'world'];
    var b = {
      good: 'code',
      'is generally': 'pretty',
    };
    ```
      
    *Wrong:*
    
    ```js
    var a = [
      'hello', 'world'
    ];
    var b = {"good": 'code'
      , is generally: 'pretty'
    };
    ```


## 使用 === 比较符

写代码并不是在背这些 [stupid rules][comparisonoperators] 。使用 `===` 操作符来进行比较操作，它会完全按照你的期望来执行。

*Right:*

```js
var a = 0;
if (a === '') {
  console.log('winning');
}

```

*Wrong:*

```js
var a = 0;
if (a == '') {
  console.log('losing');
}
```

[comparisonoperators]: https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators

## 过长的三元操作符分可以考虑写多行

过长的三元操作符不应该写在一行，将它分割到多行, 提高可读性同时便于调试。

```js
var foo = (a === b)
  ? (...)
  : (...);
```

## 不要扩展内建类型

不要扩展 javascript 内建对象的方法。将来的你会感谢你这个做法的。

*Right:*

```js
var a = [];
if (!a.length) {
  console.log('winning');
}
```

*Wrong:*

```js
Array.prototype.empty = function() {
  return !this.length;
}

var a = [];
if (a.empty()) {
  console.log('losing');
}
```

## 判断条件多的情况分行写

提高代码可读性,同时便于排错

```js
if ( 
  password.length >= 4 
  && /^(?=.*\d).{4,}$/.test(password)
) {
  console.log('losing');
}
```


## 尽早的从函数中返回

为了避免深入嵌套的 if 语句，请尽早的从函数中返回。

*Right:*

```js
function isPercentage(val) {
  if (val < 0) {
    return false;
  }

  if (val > 100) {
    return false;
  }

  return true;
}
```

*Wrong:*

```js
function isPercentage(val) {
  if (val >= 0) {
    if (val < 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

针对这个示例，甚至可以进一步精简优化：

```js
function isPercentage(val) {
  var isInRange = (val >= 0 && val <= 100);
  return isInRange;
}
```

## 给复杂的闭包函数命名

匿名函数的存在是减少不必要的函数名，增加代码易读性。
但是如果对于复杂的函数还是建议命名, 这让人知道你这个函数的意图，更重要的是，这将会产生可读性更好的堆栈跟踪和CPU调用信息等。

```js
req.on('end', function onEnd() {
  console.log('winning');
});
```

## 不要嵌套闭包

使用闭包，但是不要嵌套他们，否则你的代码将会一团糟。

*Right:*

```js
setTimeout(function() {
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('winning');
}
```

*Wrong:*

```js
setTimeout(function() {
  client.connect(function() {
    console.log('losing');
  });
}, 1000);
```

## 使用单行注释风格

不管是单行注释还是多行注释，都使用 `//` 。
同时请尝试在更高层次来编写注释（解释函数整体的思路），
只在解释一些难以理解代码的时候添加注释，而不是给一些琐碎的东西加上注释。

*Right:*

```js
// 'ID_SOMETHING=VALUE' -> ['ID_SOMETHING=VALUE'', 'SOMETHING', 'VALUE']
var matches = item.match(/ID_([^\n]+)=([^\n]+)/));

// This function has a nasty side effect where a failure to increment a
// redis counter used for statistics will cause an exception. This needs
// to be fixed in a later iteration.
function loadUser(id, cb) {
  // ...
}

var isSessionValid = (session.expires < Date.now());
if (isSessionValid) {
  // ...
}
```

*Wrong:*

```js
// Execute a regex
var matches = item.match(/ID_([^\n]+)=([^\n]+)/));

// Usage: loadUser(5, function() { ... })
function loadUser(id, cb) {
  // ...
}

// Check if the session is valid
var isSessionValid = (session.expires < Date.now());
// If the session is valid
if (isSessionValid) {
  // ...
}
```


## Getters 和 Setters

不要使用 setters ，他们会引发一些使用你的代码的人无法解决的问题。
当没有[副作用][sideeffect]的时候，可以使用 getters，例如提供一个集合类的长度属性的时候。

[sideeffect]: http://en.wikipedia.org/wiki/Side_effect_(computer_science)

## 异步回调函数

Node 的异步回调函数的第一个参数应该是错误指示，只有这样才能够享受许多流程控制模块的福利。

*Right:*

```js
function cb(err, data , ...) {...}
```

*Wrong:*

```js
function cb(data, ...) {...}
```

## 继承

尽管有许多的方法来实现继承，但是最为推荐的是 Node 的标准写法：

```js
function Socket(options) {
  // ...
  stream.Stream.call(this);
  // ...
}

util.inherits(Socket, stream.Stream);
```


## 空格

在所有的操作符前后都添加空格，`function` 关键字后面添加空格

*Right:*

```js
var add = function (a, b) {
  return a + b;
};
```

*Wrong:*

```js
var add=function(a,b){
  return a+b;
}
```

##不要把Array 当做关联数组或Object 使用,即你不应该用非数字作为Array 的索引

 *Right:*

    ```js
    var a = {};
    a.hello = 'shit';
    a.foo = 'bar';
    ```

  *Wrong :*
  
    ```js
    var a = []; // use '{}' instead
    a['hello'] = 'shit';
    a['foo'] = 'bar';
    ```
    

## 方法链 (Promise 风格)

如果你使用方法链，确保每行只调用一个方法。
同时你要合理使用缩进来表示他们的父对象是一致的。

*Right:*

```js
User
  .findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });
```

*Wrong:*

```js
User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
  .exec(function(err, user) {
    return true;
});
```
## 其他 Tips
 * 避免使用 with, eval, Object.freeze, Object.preventExtensions, Object.seal 
 * 不使用 ```const``` 关键字, 虽然V8 和 Mozilla 都支持它，但它不是ECMA 标准
 * for-in 循环，仅在 object/hash/map 时使用，绝不要对Array 使用



## 尽量参照 Node.js 源码的编码风格
 
 * 多参考、模仿 Node 源码的编程风格 ^_^
 * [Felix's Node.js Style Guide](https://github.com/felixge/node-style-guide)
 * [Google JavaScript Style Guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
 * [node 源码](https://github.com/joyent/node)
 * [Javascript编程风格](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)


