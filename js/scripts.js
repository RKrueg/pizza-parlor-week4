function PizzaChoices() {
  this.pizzas ={};
  this.pizzaId = 0;
}

PizzaChoices.prototype.assignId = function() {
  this.pizzaId += 1
  return this.pizzaId
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

function Pizza(toppings, size) {
  this.toppings = [toppings];
  this.size = size;
  this.price = 0;
  this.id = 0;
}

Pizza.prototype.fullOrder = function() {
  return "Your toppings are: " + this.toppings + " " + "and your size is: " + this.size + ". " + "Your total is: " + this.price;
};

//Pizza.prototype.size = function() {
//   let size = document.querySelectorAll("input[name=size]:checked")
// }

Pizza.prototype.pizzaPrice = function() {
  if(this.size === "small") {
    this.price = 7
  } else if (this.size === "medium") {
    this.price = 10
  } else if (this.size === "large") {
    this.price = 15
  } 
  return this.price
} 

// function handleForm(event) {
//   event.preventDefault();
//   let totalPrice = this.price;
//   const userToppings = document.querySelectorAll("input[name=toppings]:checked");
//   const userToppingsArray = Array.from(userToppings);
// const userSize = document.querySelectorAll("input[name=size]:checked");
//   const userSizeArray = Array.from(userSize);


//   userToppingsArray.forEach(function(element) {
//     const paragraph = document.createElement("p");
//     paragraph.append(element.value);
//     document.body.append(paragraph);
//   });
//   userSizeArray.forEach(function(element) {
//     const paragraph = document.createElement("p");
//     paragraph.append(element.value);
//     document.body.append(paragraph);
//   });
//   document.querySelector("p#order").innerText = totalPrice;
// }

let pizzaChoice = new PizzaChoices();

PizzaChoices.prototype.listPizzaOptions = function() {
  let newArray =[];
  for (const key in this.pizzas) {
    newArray.push(this.pizzas[key]);
  }
  let pizzasList = document.querySelector("div#pizzas");
  //pizzasList.innerText = null;
  const ul = document.createElement("ul");
  newArray.forEach(function(pizza) {
    const li = document.createElement("li");
    li.append(pizza.fullOrder());
    li.setAttribute("id", pizza.id);
    ul.append(li);
  });
  pizzasList.append(ul);
}

// function displayPizzaChoice() {
//   const pizza = pizzaChoice.findPizza();
//   document.querySelector(".pizzas").innerText = pizza.toppings;
//   document.querySelector(".pizzas").innerText = pizza.size;
//   document.querySelector(".pizzas").innerText = pizza.price;
// }

function handleFormSubmission (event) {
  event.preventDefault();
  const userToppings = document.querySelector("input[name=toppings]:checked").value;
  const userSize = document.querySelector("input[name=size]:checked").value;
  let newPizza = new Pizza(userToppings, userSize);
  pizzaChoice.addPizza(newPizza);
	pizzaChoice.listPizzaOptions(newPizza);
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaSelection").addEventListener("submit", handleFormSubmission);
})