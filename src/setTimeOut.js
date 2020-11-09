// Consider the code below:
// setTimeout(() => {
//   console.log("Time 1")
// }, 3000)
// setTimeout(() => {
//   console.log("Time 2")
// }, 2000)
// setTimeout(() => {
//   console.log("Time 3")
// }, 1000)
// Output of the above code is
// Time 3
// Time 2
// Time 1
// Without updating the timings change the code using asynchronous
// methodologies such that it prints the following output.
// Time 1
// Time 2
// Time 3

// Promise.resolve()
//   .then(() => {
//     setTimeout(() => {
//       console.log("Time 1");
//     }, 3000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Time 2");
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Time 3");
//     }, 1000);
//   });

let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Time 1");
    resolve();
  }, 3000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Time 2");
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("Time 3");
    }, 3000);
  });
