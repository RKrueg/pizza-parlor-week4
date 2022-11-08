function PizzaChoices() {
  this.pizzas = {};
  this.pizzaId = 0;
}

PizzaChoices.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaChoices.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

PizzaChoices.prototype.findPizza = function(id) {
  if (this.pizzas[id]) {
    return this.pizzas[id];
  }
  return false;
}

// PizzaChoices.prototype.deletePizzaOrder = function(id) {
// 	if (this.pizzas[id] === undefined) {
// 		return false;
// 	}
// 	delete this.pizzas[id];
// 	return true;
// }

function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
  this.id = 0;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === "small") {
     this.price = '$7'
    return this.price;
  } else if (this.size === "medium") {
     this.price = '$10'
    return this.price;
  } else if (this.size === "large") {
    this.price = '$15'
    return this.price;
  } 
} 

Pizza.prototype.fullOrder = function() {
  return "Your toppings are: " + this.toppings + " " + "and your size is: " + this.size + ". " + "Your total is: " + this.price + ". " + "Click here to see pizza order in a list!"
};

let choice = new PizzaChoices();

PizzaChoices.prototype.listPizzas = function() {
  let newArray =[];
  for (const key in this.pizzas) {
    newArray.push(this.pizzas[key]);
  }
  let pizzaDetails = document.querySelector("div#pizzas");
  const ul = document.createElement("ul");
  newArray.forEach(function(pizza) {
    const li = document.createElement("li");
    li.append(pizza.fullOrder());
    li.setAttribute("id", pizza.id);
    ul.append(li);
  });
  pizzaDetails.append(ul);
}

function displayPizzaChoice(event) {
  const pizza = choice.findPizza(event.target.id);
  document.querySelector(".topping-chosen").innerText = pizza.toppings;
  document.querySelector(".size-chosen").innerText = pizza.size;
  document.querySelector(".total-price").innerText = pizza.price;
  document.querySelector("div#pizza-details").removeAttribute("class");
}

function handleFormSubmission (event) {
  event.preventDefault();
  debugger;
  const userToppings = document.querySelector("input[name=toppings]:checked").value;
  const userSize = document.querySelector("input[name=size]:checked").value;

  let newPizza = new Pizza(userToppings, userSize);
  newPizza.pizzaPrice();
  choice.addPizza(newPizza);
	choice.listPizzas();
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaSelection").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#pizzas").addEventListener("click", displayPizzaChoice);
})