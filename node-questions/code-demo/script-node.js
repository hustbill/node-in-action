// 2020-1-14 React Adanced Topics, (NodeJS part)
// pm2 monitor the child process


console.log('past')
fs.readFile('./oneline.txt', 'utf8', (error, data) => {
    console.log(data);
});

fs.readFile('./script-node.js', 'utf8', (error, data) => {
    console.log(data);
});

process.nextTick(() => {
    console.log('next tick code');
})

setTimeout(() => {
    console.log('future')
    console.log('set timeout')
}, 1000)
console.log('present')

/*
 fs 读写有时候比 current 慢， 
past
current
hell world
future

*/
