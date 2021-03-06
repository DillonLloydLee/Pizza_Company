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
  if (newItem == "a 2 liter of Coca-Cola") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "a 2 liter of Sprite") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "a 2 liter of Diet Coke") {
    this.totalFood.push(newItem);
    this.totalPrice += 1.50;
  } else if (newItem == "an order of cheesy bread") {
    this.totalFood.push(newItem);
    this.totalPrice += 3.50;
  } else if (newItem == "an order of garlic bread") {
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


// function for determining if something is in an array :

var isInArray = (function(value, array) {
  return array.indexOf(value) > -1;
});


// Starting an initial order :

var order = new Order([], 0.00);
var pizza = new Pizza(" ", " ", [], 0.00);


// Add info to confirm page :

var fillConfirmPage = (function() {
  var description = "";
  $(".food").empty().val();
  $(".price").empty().val();
  if (order.totalFood == "") {
    description = "No Food.";
    $(".food").append(description);
  } else {
    order.totalFood.forEach(function(foodItem) {
      $(".food").append(foodItem + "<br>");
    });
  }
  $(".price").append(order.totalPrice.toFixed(2));

});


// jQuery functions :

$(document).ready(function() {
  $(".container").addClass('animated rollIn');

  $(".go-to-order").click(function() {
    $(".initial-page").toggle();
    $(".choose-page").removeClass('animated fadeInUp');
    $(".choose-page").addClass('animated fadeInUp');
    $(".choose-page").toggle();
  });

  $(".go-to-about").click(function() {
    $(".initial-page").toggle();
    $(".about-page").removeClass('animated fadeInUp');
    $(".about-page").addClass('animated fadeInUp');
    $(".about-page").toggle();
  });

  $(".go-to-initial").click(function() {
    $(".about-page").toggle();
    $(".initial-page").removeClass('animated fadeInUp');
    $(".initial-page").addClass('animated fadeInUp');
    $(".initial-page").toggle();
  });

  $(".go-to-pizzas").click(function() {
    $(".choose-page").toggle();
    $(".pizza-page").removeClass('animated fadeInUp');
    $(".pizza-page").addClass('animated fadeInUp');
    $(".pizza-page").toggle();
  });

  $(".go-to-sides").click(function() {
    $(".choose-page").toggle();
    $(".side-page").removeClass('animated fadeInUp');
    $(".side-page").addClass('animated fadeInUp');
    $(".side-page").toggle();
  });

  $(".go-to-sodas").click(function() {
    $(".choose-page").toggle();
    $(".soda-page").removeClass('animated fadeInUp');
    $(".soda-page").addClass('animated fadeInUp');
    $(".soda-page").toggle();
  });

  $(".go-to-confirm-from-choose").click(function() {
    $(".choose-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-confirm-from-pizzas").click(function() {
    if (pizza.pizzaSize == " " || pizza.pizzaCrust == " ") {
      $(".pizza-incomplete").toggle();
    } else {
      order.addItem(pizza);
      $(".pizza-page").toggle();
      fillConfirmPage();
      $(".confirm-page").removeClass('animated fadeInUp');
      $(".confirm-page").addClass('animated fadeInUp');
      $(".confirm-page").toggle();
    }
  });

  $(".go-to-confirm-with-cheesy").click(function() {
    order.addItem("an order of cheesy bread");
    $(".side-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-confirm-with-garlic").click(function() {
    order.addItem("an order of garlic bread");
    $(".side-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-confirm-with-coke").click(function() {
    order.addItem("a 2 liter of Coca-Cola");
    $(".soda-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-confirm-with-diet").click(function() {
    order.addItem("a 2 liter of Diet Coke");
    $(".soda-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-confirm-with-sprite").click(function() {
    order.addItem("a 2 liter of Sprite");
    $(".soda-page").toggle();
    fillConfirmPage();
    $(".confirm-page").removeClass('animated fadeInUp');
    $(".confirm-page").addClass('animated fadeInUp');
    $(".confirm-page").toggle();
  });

  $(".go-to-choose-from-sodas").click(function() {
    $(".soda-page").toggle();
    $(".choose-page").removeClass('animated fadeInUp');
    $(".choose-page").addClass('animated fadeInUp');
    $(".choose-page").toggle();
  });

  $(".go-to-choose-from-sides").click(function() {
    $(".side-page").toggle();
    $(".choose-page").removeClass('animated fadeInUp');
    $(".choose-page").addClass('animated fadeInUp');
    $(".choose-page").toggle();
  });

  $(".go-to-choose-from-pizza").click(function() {
    $(".pizza-page").toggle();
    $(".choose-page").removeClass('animated fadeInUp');
    $(".choose-page").addClass('animated fadeInUp');
    $(".choose-page").toggle();
  });

  $(".go-to-final").click(function() {
    $(".confirm-page").toggle();
    $(".final-page").removeClass('animated fadeInUp');
    $(".final-page").addClass('animated fadeInUp');
    $(".final-page").toggle();
  });

  $(".go-back-to-pizzas").click(function() {
    $(".confirm-page").toggle();
    $(".pizza-page").removeClass('animated fadeInUp');
    $(".pizza-page").addClass('animated fadeInUp');
    $(".pizza-page").toggle();
  });

  $(".go-back-to-sides").click(function() {
    $(".confirm-page").toggle();
    $(".side-page").removeClass('animated fadeInUp');
    $(".side-page").addClass('animated fadeInUp');
    $(".side-page").toggle();
  });

  $(".go-back-to-sodas").click(function() {
    $(".confirm-page").toggle();
    $(".soda-page").removeClass('animated fadeInUp');
    $(".soda-page").addClass('animated fadeInUp');
    $(".soda-page").toggle();
  });

  $(".start-over").click(function() {
    order.startOver();
    $(".confirm-page").toggle();
    $(".choose-page").removeClass('animated fadeInUp');
    $(".choose-page").addClass('animated fadeInUp');
    $(".choose-page").toggle();
  });


// Pizza Selectors :

  $(".p-small").click(function() {
    pizza.addSize("small");
    $(".p-small").addClass("selected");
    $(".p-medium").removeClass("selected");
    $(".p-large").removeClass("selected");
  });

  $(".p-medium").click(function() {
    pizza.addSize("medium");
    $(".p-small").removeClass("selected");
    $(".p-medium").addClass("selected");
    $(".p-large").removeClass("selected");
  });

  $(".p-large").click(function() {
    pizza.addSize("large");
    $(".p-small").removeClass("selected");
    $(".p-medium").removeClass("selected");
    $(".p-large").addClass("selected");
  });

  $(".p-original").click(function() {
    pizza.addCrust("original");
    $(".p-stuffed").removeClass("selected");
    $(".p-deep-dish").removeClass("selected");
    $(".p-original").addClass("selected");
  });

  $(".p-stuffed").click(function() {
    pizza.addCrust("stuffed");
    $(".p-stuffed").addClass("selected");
    $(".p-deep-dish").removeClass("selected");
    $(".p-original").removeClass("selected");
  });

  $(".p-deep-dish").click(function() {
    pizza.addCrust("deep dish");
    $(".p-stuffed").removeClass("selected");
    $(".p-deep-dish").addClass("selected");
    $(".p-original").removeClass("selected");
  });

  $(".p-turkey").click(function() {
    if (isInArray("turkey", pizza.pizzaToppings)){
      pizza.removeTopping("turkey");
      $(".p-turkey").removeClass("selected");
    } else {
      pizza.addTopping("turkey");
      $(".p-turkey").addClass("selected");
    }
  });

  $(".p-sausage").click(function() {
    if (isInArray("sausage", pizza.pizzaToppings)){
      pizza.removeTopping("sausage");
      $(".p-sausage").removeClass("selected");
    } else {
      pizza.addTopping("sausage");
      $(".p-sausage").addClass("selected");
    }
  });

  $(".p-herb").click(function() {
    if (isInArray("herb", pizza.pizzaToppings)){
      pizza.removeTopping("herb");
      $(".p-herb").removeClass("selected");
    } else {
      pizza.addTopping("herb");
      $(".p-herb").addClass("selected");
    }
  });

  $(".p-onion").click(function() {
    if (isInArray("onion", pizza.pizzaToppings)){
      pizza.removeTopping("onion");
      $(".p-onion").removeClass("selected");
    } else {
      pizza.addTopping("onion");
      $(".p-onion").addClass("selected");
    }
  });

  $(".p-bacon").click(function() {
    if (isInArray("bacon", pizza.pizzaToppings)){
      pizza.removeTopping("bacon");
      $(".p-bacon").removeClass("selected");
    } else {
      pizza.addTopping("bacon");
      $(".p-bacon").addClass("selected");
    }
  });

  $(".p-olive").click(function() {
    if (isInArray("olive", pizza.pizzaToppings)){
      pizza.removeTopping("olive");
      $(".p-olive").removeClass("selected");
    } else {
      pizza.addTopping("olive");
      $(".p-olive").addClass("selected");
    }
  });

  $(".p-pepperoni").click(function() {
    if (isInArray("pepperoni", pizza.pizzaToppings)){
      pizza.removeTopping("pepperoni");
      $(".p-pepperoni").removeClass("selected");
    } else {
      pizza.addTopping("pepperoni");
      $(".p-pepperoni").addClass("selected");
    }
  });

});
