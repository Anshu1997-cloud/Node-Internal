 const fs = require("file-system");

// Proving the order of execution of event loop phases:

console.log("Start");

process.nextTick(() => console.log("process.nextTick 1"));

setTimeout(() => console.log("setTimeout 1"), 0);

setImmediate(() => console.log("setImmediate 1"));

Promise.resolve().then(() => console.log("Promise 1"));

fs.readFile('example.txt', 'utf8', (err, data) => {
  console.log("File reading");
});

setInterval(() => console.log("setInterval 1"), 0);

process.nextTick(() => console.log("process.nextTick 2"));

setTimeout(() => console.log("setTimeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

setImmediate(() => console.log("setImmediate 2"));

setInterval(() => console.log("setInterval 2"), 0);

console.log("End");

// This code combines various timers, promises, and file reading to demonstrate the order of execution. Note that the actual order may vary based on the system and environment, but this should give you a general idea of the sequence.