// 2020-1-14 React Adanced Topics, (NodeJS part)
// const fs = require('fs');
// const {spawn} = require('child_process')
// // const spawnedProcess = spawn("node spawn.js");
// const spawnedProcess = spawn("ls");

// // Ref: https://zaiste.net/nodejs-child-process-spawn-exec-fork-async-await/

// process.stdin.pipe(spawnedProcess.stdin)

// for await (const data of spawnedProcess.stdout) {
//     console.log(`stdout from the child: ${data}`);
// };


const { spawn } = require('child_process')

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

async function main() {
    for await (const data of wc.stdout) {
        console.log(`number of files: ${data}`);
    };
}

main().catch(e => console.error(e.stack));


// pm2 monitor the child process


// console.log('past')
// fs.readFile('./oneline.txt', 'utf8', (error, data) => {
//     console.log(data);
// });

// // fs.readFile('./script-node.js', 'utf8', (error, data) => {
// //     console.log(data);
// // });

// process.nextTick(() => {
//     console.log('next tick code');
// })
// setTimeout(() => {
//     console.log('future')
//     console.log('set timeout')
// }, 1000)
// console.log('present')

/*
 fs 读写有时候比 current 慢， 
past
current
hell world
future

*/
