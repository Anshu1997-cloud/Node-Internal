// Using `process.nextTick()` to execute a function after the current event loop iteration:

function delayedFunction() {
      console.log("Function executed after 2 seconds");
}

console.log("Start");

process.nextTick(() => {
      setTimeout(() => {
        delayedFunction
      }, 2000)
});

console.log("End");

// In this code, process.nextTick() is used to ensure that the function inside setTimeout is executed after the current event loop iteration completes
