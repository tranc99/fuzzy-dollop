// cat_school.js

// import the cat module
var cats = require('./cat');
var Cat = cats.Cat;

// creates some cats
var cat1 = new Cat("Manny");
var cat2 = new Cat("Lizzie");

// Let's find out the names and ages of cats in the class
console.log("There are two cats in the class, " + cat1.name + " and " + cat2.name + ".");
console.log("Manny is " + cat1.age + " years old " +  " and Lizzie is " + cat2.age + " years old.");
