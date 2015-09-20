// Pizza prototype constructor :

function Pizza(pizzaSize, pizzaCrust, pizzaToppings, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = pizzaPrice;
}


// Pizza prototype, adding a size :

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
}


// Pizza prototype, adding a crust :

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
}


// Pizza prototype, adding a topping :

Pizza.prototype.addTopping = function(newTopping) {
  this.pizzaToppings.push(newTopping);
  this.pizzaPrice += 1.00;
}


// Pizza prototype, removing a topping :

Pizza.prototype.removeTopping = function(oldTopping) {
  var index = this.pizzaToppings.indexOf(oldTopping);
  this.pizzaToppings.splice(index, 1);
  this.pizzaPrice -= 1.00;
}


// Order prototype constructor :

function Order(totalFood, totalPrice) {
  this.totalFood = totalFood;
  this.totalPrice = totalPrice;
}


// Order prototype, adding an item :

Order.prototype.addItem = function(newItem) {
  if (newItem == "2 liter of Coca-Cola") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "2 liter of Sprite") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "2 liter of Diet Coke") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "cheesy bread") {
    this.totalFood.push(newItem);
    this.totalPrice += 3.50;
  } else if (newItem == "garlic bread") {
    this.totalFood.push(newItem);
    this.totalPrice += 2.50;
  } else {
    var description = "a " + newItem.pizzaSize + " " + newItem.pizzaCrust +
      " with " + newItem.pizzaToppings.length + " toppings";
    this.totalFood.push(description);
    this.totalPrice += newItem.pizzaPrice;
  }
}


// Order prototype, starting over :

Order.prototype.startOver = function() {
  this.totalFood = [];
  this.totalPrice = 0.00;
}


// Starting an initial order :

var order = new Order([], 0.00);


// jQuery functions :

$(document).ready(function() {
  $(".container").addClass('animated rollIn');

  $(".go-to-order").click(function() {
    $(".initial-page").toggle;
    $(".choose-page").toggle;
  });

  $(".go-to-about").click(function() {
    $(".initial-page").toggle;
    $(".about-page").toggle;
  });

  $(".go-to-initial").click(function() {
    $(".about-page").toggle;
    $(".initial-page").toggle;
  });

  $(".go-to-pizzas").click(function() {
    $(".choose-page").toggle;
    $(".pizza-page").toggle;
    var thisPizza = new Pizza(" ", " ", [], 0.00);
  });

  $(".go-to-sides").click(function() {
    $(".choose-page").toggle;
    $(".side-page").toggle;
  });

  $(".go-to-sodas").click(function() {
    $(".choose-page").toggle;
    $(".soda-page").toggle;
  });

  $(".go-to-confirm-from-pizzas").click(function() {
    $(".pizza-page").toggle;
    $(".confirm-page").toggle;
  });

  $(".go-to-confirm-from-sides").click(function() {
    $(".side-page").toggle;
    $(".confirm-page").toggle;
  });

  $(".go-to-confirm-from-sodas").click(function() {
    $(".soda-page").toggle;
    $(".confirm-page").toggle;
  });

  $(".go-to-final").click(function() {
    $(".confirm-page").toggle;
    $(".final-page").toggle;
  });

  $(".go-back-to-pizzas").click(function() {
    $(".confirm-page").toggle;
    $(".pizza-page").toggle;
  });

  $(".go-back-to-sides").click(function() {
    $(".confirm-page").toggle;
    $(".side-page").toggle;
  });

  $(".go-back-to-sodas").click(function() {
    $(".confirm-page").toggle;
    $(".soda-page").toggle;
  });

});
