
var async = require('async');
var objs = [{name:'A'}, {name:'B'}, {name:'C'}];

function doSomething(obj, cb)
{
    console.log("我在做" + obj.name + "这件事!");
    cb(null, obj);
}

async.waterfall([
    //A这件事
    function(cb)
    {
        doSomething(objs[0], function(err, dataA){
            console.log(dataA);
            cb(err, dataA);     //如果发生err， 则瀑布就完了，后续流程都不会执行，B和C都不会执行
        });
    },
    //B这件事，dataA就是上一步cb(err, dataA)中传进来的dataA
    function(dataA, cb)
    {
        doSomething(objs[1], function(err, dataB){
            console.log(dataB);
            cb(err, dataA, dataB);  //如果发生err， 则瀑布就完了，后续流程都不会执行，C不会执行
        });
    },
    //C这件事
    function(dataA, dataB, cb)
    {
        doSomething(objs[2], function(err, dataC){
            console.log(dataC);
            cb(err, dataA, dataB, dataC);
        });
    }
], function (err, dataA, dataB, dataC) {    //瀑布的每一布，只要cb(err, data)的err发生，就会到这
    if(err)
    {
        console.log('处理错误!');
    }
    else
    {
        console.log('处理成功！');
        console.log(dataA);
        console.log(dataB);
        console.log(dataC);
    }
});
