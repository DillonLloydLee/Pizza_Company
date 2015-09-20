// Tests :

describe("Pizza", function() {

  it("creates a pizza with the specified properties.", function() {
    var testPizza = new Pizza("large", "deep dish",
      "['pepperoni', 'black olives']", 10.00);
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaCrust).to.equal("deep dish");
    expect(testPizza.pizzaToppings).to.equal("['pepperoni', 'black olives']");
    expect(testPizza.pizzaPrice).to.equal(10.00);
  });

  it("adds a size to the pizza.", function() {
    var testPizza = new Pizza(" ", " ",
      "[' ', ' ']", 0.00);
    testPizza.addSize("large");
    expect(testPizza.pizzaSize).to.equal("large");
  });

  it("changes price when you add a size.", function() {
    var testPizza = new Pizza(" ", " ",
      "[' ', ' ']", 0.00);
    testPizza.addSize("large");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaPrice).to.equal(8.00);
  });

  it("adds a crust to the pizza.", function() {
    var testPizza = new Pizza("large", " ",
      "[' ', ' ']", 8.00);
    testPizza.addCrust("original");
    expect(testPizza.pizzaCrust).to.equal("original");
  });

  it("changes price when you add a crust.", function() {
    var testPizza = new Pizza(" ", " ",
      "[' ', ' ']", 8.00);
    testPizza.addCrust("deep dish");
    expect(testPizza.pizzaCrust).to.equal("deep dish");
    expect(testPizza.pizzaPrice).to.equal(9.00);
  });

});
