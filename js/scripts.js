function SavedPizzaChoices() {
  this.pizzas ={};
  this.pizzaId = 0;
}

SavedPizzaChoices.prototype.assignId = function() {
  this.pizzaId += 1
  return this.pizzaId
}

SavedPizzaChoices.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

SavedPizzaChoices.prototype.findPizza = function(id) {
  if (this.pizzas[id]) {
    return this.pizzas[id];
  }
  return false;
}

function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.fullOrder = function() {
  return "Your toppings are: " + this.toppings + " " + "and your size is: " + this.size + "." + "Your total is: " + this.price;
};

//Pizza.prototype.size = function() {
//   let size = document.querySelectorAll("input[name=size]:checked")
// }

Pizza.prototype.pizzaPrice = function() {
  if(this.size === "small") {
    this.price = 7.00
  } else if (this.size === "medium") {
    this.price = 10.00
  } else if (this.size === "large") {
    this.price = 15.00
  } 
  return this.price
} 

function handleForm(event) {
  event.preventDefault();
  let totalPrice = this.price;
  const userToppings = document.querySelectorAll("input[name=toppings]:checked");
  const userToppingsArray = Array.from(userToppings);
const userSize = document.querySelectorAll("input[name=size]:checked");
  const userSizeArray = Array.from(userSize);


  userToppingsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
  userSizeArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
  document.querySelector("p#order").innerText = totalPrice;
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaSelection").addEventListener("submit", handleForm);
});