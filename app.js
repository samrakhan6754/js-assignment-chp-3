// Practice exercise 3.1

// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console. 

// Step 1: Create an array for your shopping list
var shoppingList = ["Milk", "Bread", "Apples"];

// Step 2: Check the length of the shopping list
console.log("Shopping list length:", shoppingList.length);

// Step 3: Update "Bread" to "Bananas"
var indexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList[indexOfBread] = "Bananas";
}

// Step 4: Output the entire list to the console
console.log("Updated Shopping List:", shoppingList);


// Practice exercise 3.2

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs"


// Step 1: Create an empty array for your shopping list
var shoppingList = [];

// Step 2: Add Milk, Bread, and Apples to your list
shoppingList.push("Milk", "Bread", "Apples");

// Step 3: Update "Bread" with "Bananas" and "Eggs"
var indexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");
}

// Step 4: Remove the last item from the array and output it
var lastItem = shoppingList.pop();
console.log("Removed item:", lastItem);

// Step 5: Sort the list alphabetically
shoppingList.sort();

// Step 6: Find and output the index value of "Milk"
var indexOfMilk = shoppingList.indexOf("Milk");
console.log("Index of 'Milk':", indexOfMilk);

// Step 7: After "Bananas," add "Carrots" and "Lettuce"
var indexOfBananas = shoppingList.indexOf("Bananas");
if (indexOfBananas !== -1) {
  shoppingList.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
}

// Step 8: Create a new list containing "Juice" and "Pop"
var newList = ["Juice", "Pop"];

// Step 9: Combine both lists, adding the new list twice to the end of the first list
shoppingList = shoppingList.concat(newList, newList);

// Step 10: Get the last index value of "Pop" and output it
var lastIndexOfPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of 'Pop':", lastIndexOfPop);

// Step 11: Display the final shopping list
console.log("Final Shopping List:", shoppingList);


// Practice exercise 3.3

// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console

// Step 1: Create an array containing three values: 1, 2, and 3
var originalArray = [1, 2, 3];

// Step 2: Nest the original array into a new array three times
var newArray = [originalArray, originalArray, originalArray];

// Step 3: Output the value 2 from one of the arrays into the console
var valueFromNestedArray = newArray[1][1]; // This will access the second array (index 1) and the second element (index 1) within that array.

console.log("Value from the nested array:", valueFromNestedArray);


// Practice exercise 3.4

// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers.
// JavaScript Multiple Values
// [ 64 ]
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.


// Step 1: Create a myCar object with some properties
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    forSale: true
  };
  
  // Step 2: Create a variable to hold the string value "color"
  var propertyName = "color";
  
  // Use the variable within square bracket notation to assign a new value to the "color" property
  myCar[propertyName] = "red";
  
  // Step 3: Assign a new property "forSale" using the variable and bracket notation
  propertyName = "forSale";
  myCar[propertyName] = false;
  
  // Step 4: Output make and model into the console
  console.log("Make:", myCar.make);
  console.log("Model:", myCar.model);
  
  // Step 5: Output the value of "forSale" into the console
  console.log("For Sale:", myCar.forSale);

  



//   Practice exercise 3.5


// 1. Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.



// Step 1: Create an object named "people" with an empty "friends" array
var people = {
    friends: []
  };
  
  // Step 2: Create three variables, each containing an object with friend information
  var friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 12345
  };
  
  var friend2 = {
    firstName: "Alice",
    lastName: "Johnson",
    id: 67890
  };
  
  var friend3 = {
    firstName: "Bob",
    lastName: "Smith",
    id: 54321
  };
  
  // Step 3: Add the three friends to the "friends" array
  people.friends.push(friend1, friend2, friend3);
  
  // Step 4: Output the "people" object to the console
  console.log(people);




//   Chapter projects


//   Manipulating an array


// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.



const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Remove the first and last items
theList.shift();
theList.pop();

// Add "FIRST" to the start of the array
theList.unshift("FIRST");

// Assign "hello World" to the fourth item value
theList[3] = "hello World";

// Assign "MIDDLE" to the third index value
theList[2] = "MIDDLE";

// Add "LAST" to the last position in the array
theList.push("LAST");

// Output the modified array to the console
console.log(theList);


// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.


// Step 1: Create an array to hold an inventory of store items
var inventory = [];

// Step 2: Create three items with name, model, cost, and quantity properties
var item1 = {
  name: "Laptop",
  model: "XPS 13",
  cost: 1200,
  quantity: 10
};

var item2 = {
  name: "Smartphone",
  model: "iPhone 13",
  cost: 1000,
  quantity: 15
};

var item3 = {
  name: "Headphones",
  model: "Sony WH-1000XM4",
  cost: 300,
  quantity: 20
};

// Step 3: Add all three objects to the main array
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log(inventory);

// Step 4: Access the quantity element of your third item and log it
console.log("Quantity of item3:", inventory[2].quantity);

// You can continue to add and access more elements within your data structure as needed.
