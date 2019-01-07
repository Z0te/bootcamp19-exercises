const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  return str.split("").reverse().join("");
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  let newarr = [];
  for (let element of arr) {
    if (!newarr.includes(element)) {
      newarr.push(element);
    }
  }
  return newarr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length !== arr2.length) {
    return -1;
  } else {
    arr = [];
    arr1 = arr1.concat(arr2);
    for (let i = 0; i < arr1.length - 1; i+= 2) {
      arr.push(arr1.slice(i, i + 2));
    }
    return arr;
  }
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  for (let miniarr of arr) {
    if (miniarr.length !== 2) {
      return -1;
    }
  }
  let temparr = [];
  for (let miniarr of arr) {
    temparr = temparr.concat(miniarr);
  }
  arr2 = temparr.splice(temparr.length / 2);
  arr1 = temparr;
  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  return str.substring(str.length - num) + str.substring(0, str.length - num);
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let date = new Date();
  return "Today's date is "
};

// Write tests here:
assert(tokenize("Hello, my name is David"));
assert(reverse("Hello, my name is David"));
assert(uniqueOnes([1, 1, 1, 2, 3, 4, 5, 1, 3, 2, 5, 3, 4, 1]));
assert(factorial(5));
assert(zip([1, 2, 3], [4, 5, 6]));
assert(unzip([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]));
assert(shiftRight("Hello", 3));
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
