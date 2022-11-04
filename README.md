Describe: Pizza();

Test: "It should create a pizza object with toppings and size properties"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should add a price property to the pizza object"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium", 0);
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" price: 0}

Describe: Pizza.prototype.fullOrder = function();

Test: "It will call on the Pizza object and return the order concatenated together.
Code: let test = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: 'anchovies,pineapple medium'

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output: