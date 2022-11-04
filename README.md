# _Pizza Parlor_

#### By _**Ryan Krueger**_

#### _A simple page where a user can order pizza._

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

_The application allows users to place a custom order for pizza by checking what toppings they would like added as well as what size of pizza they want. After hitting submit, their order will be placed on the screen with a price._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _Currently, the site only displays what they selected in the checkbox and does not display a price._

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _October 21, 2022_ _Ryan Krueger_

```
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