function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.fullOrder = function() {
  return "Your toppings are: " + this.toppings + " " + "and your size is: " + this.size + "." + "Your total is: " + this.price;
};

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
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaSelection").addEventListener("submit", handleForm);
});