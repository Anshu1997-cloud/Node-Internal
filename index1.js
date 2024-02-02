// Using process.hrtime() to measure the time it takes to execute a function:

  function sumNumbers() {
       let sum = 0;
       for(let i = 1; i <= 1000000; i++){
        sum += i;
       }
       console.log("Sum :" , sum );
  }

  const start = process.hrtime();
  sumNumbers();
  const end = process.hrtime(start);

  console.log("Execution time (nanoseconds):", end[0] * 1e9 + end[1]);

//   This code calculates the sum of numbers from 1 to 1000000 and measures the execution time using process.hrtime().