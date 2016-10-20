/*********Challenges*********/
// Hair Color
// Create a variable called hairColor and set it equal to a string of your hair color.

var hairColor = "blonde";

// whichChild
// Create a function called whichChild that takes one parameter: a child's name. // When passed in ‘Dave’ return ‘Oldest’
// When passed in ‘Michelle’ return ‘Middle’
// When given any other value return ‘Not my kid!”

function whichChild(childName) {
  if (childName === "Dave") {
    return "Oldest";
  }
  else if (childName === "Michelle") {
    return "Middle";
  } else {
    return "Not my kid!";
  }
}

// Sum
// Create a function called sum that returns the sum of two numbers passed in as parameters.

function sum(num1, num2) {
  return num1 + num2;
}

// Triple
// Create a function called triple that takes in a number as a parameter, triples the number, and returns the result.

function triple(num) {
  return num * 3;
}

// numbaOne
// Create a function called numbaOne that returns the first element of an array that is passed in as a parameter. Hint: This should work for an array of any size.

function numbaOne(myArr) {
  return myArr[0];
}

// theLastOne
// Create a function called theLastOne that returns the last element of an array that is passed in. Hint: This should work for an array of any size.

function theLastOne(myArr) {
  return myArr[myArr.length - 1];
}

// addThemUp
// Create a function called addThemUp that takes in an array of numbers and returns the total of all of the items in the array added together.

function addThemUp(numArr) {
  var total = 0;
  for (var i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }
  return total;
}

// loveTheThrees
// Write a function called loveTheThrees that takes in an array full of numbers. It should loop through the array and adds any numbers that are divisible by 3 to a new array called threes. Once you have added all the numbers that are divisible by 3 to the new array, then return the threes array.

function loveTheThrees(myArr) {
  var threes = [];
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] % 3 === 0) {
      threes.push(myArr[i]);
    }
  }
  return threes;
}

// Hobbit
// Create an object called "hobbit". Give it a key called "name" with a value of "Gollum" and another key called "my" with a value of "precious".

var hobbit = {
  name: "Gollum",
  my: "precious"
};

// superSecret
// In the "superSecret" function “spy” will be a passed in as an object that represents a spy. Loop through all the properties on the spy object and change all values to the string “redacted”, then return the updated spy object.

// var superSecret = function(spy){
// // Code Here
// }

var superSecret = function(spy) {
  for (var prop in spy) {
    spy[prop] = "redacted";
  }
  return spy;
};

// onlyTruthy
// Make a function called onlyTruthy that takes in an object, loops through all its properties, and removes any that are falsy. Then return the object that was passed in. (hint: delete)

function onlyTruthy(obj) {
  for (var prop in obj) {
    if (!obj[prop]) {
      delete obj[prop];
    }
  }
  return obj;
}
