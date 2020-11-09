// Create a function that accepts an array called ‘myarray’ as an
// argument, iterates through ‘myarray’, and returns a new array which
// contains all the even numbers in ‘myarray’.
// Sample input: [1,2,3,4,5,6,7,8]
// Sample output: [2,4,6,8]

const evenArr = (myarray) => {
  let even = [];

  for (let i = 0; i < myarray.length; i++) {
    if (i % 2 !== 0) {
      even.push(myarray[i]);
    }
  }
  return even;
};

console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = evenArr;
