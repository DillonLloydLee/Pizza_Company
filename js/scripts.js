// Pizza prototype constructor :

function Pizza(pizzaSize, pizzaCrust, pizzaToppings, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = pizzaPrice;
}

Pizza.prototype.addSize = function(newSize) {
  this.pizzaSize = newSize;
}


// jQuery functions :

$(document).ready(function() {
  $(".first-page").addClass('animated rollIn');

});
