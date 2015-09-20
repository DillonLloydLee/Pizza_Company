// Pizza prototype :

function Pizza(pizzaSize, pizzaCrust, pizzaToppings, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = pizzaPrice;
}

Pizza.prototype.addSize = function(newSize) {
  if (this.pizzaSize == "small") {
    this.pizzaPrice -= 5.00;
  } else if (this.pizzaSize == "medium") {
    this.pizzaPrice -= 6.50;
  } else if (this.pizzaSize == "large") {
    this.pizzaPrice -= 8.00;
  }
  this.pizzaSize = newSize;
  if (this.pizzaSize == "small") {
    this.pizzaPrice += 5.00;
  } else if (this.pizzaSize == "medium") {
    this.pizzaPrice += 6.50;
  } else if (this.pizzaSize == "large") {
    this.pizzaPrice += 8.00;
  }
};

Pizza.prototype.addCrust = function(newCrust) {
  if (this.pizzaCrust == "deep dish") {
    this.pizzaPrice -= 1.00;
  } else if (this.pizzaCrust == "stuffed") {
    this.pizzaPrice -= 2.00;
  }
  this.pizzaCrust = newCrust;
  if (this.pizzaCrust == "regular") {
    this.pizzaPrice += 0.00;
  } else if (this.pizzaCrust == "deep dish") {
    this.pizzaPrice += 1.00;
  } else if (this.pizzaCrust == "stuffed") {
    this.pizzaPrice += 2.00;
  }
};

Pizza.prototype.addTopping = function(newTopping) {
  this.pizzaToppings.push(newTopping);
  this.pizzaPrice += 1.00;
};

Pizza.prototype.removeTopping = function(oldTopping) {
  var index = this.pizzaToppings.indexOf(oldTopping);
  this.pizzaToppings.splice(index, 1);
  this.pizzaPrice -= 1.00;
};


// Order prototype :

function Order(totalFood, totalPrice) {
  this.totalFood = totalFood;
  this.totalPrice = totalPrice;
}



// jQuery functions :

$(document).ready(function() {
  $(".first-page").addClass('animated rollIn');

});
