// Tests :

describe("Pizza", function() {

  it("creates a pizza with the specified properties.", function() {
    var testPizza = new Pizza("large", "deep dish",
      ['pepperoni', 'black olives'], 11.00);
    expect(testPizza.pizzaSize).to.eql("large");
    expect(testPizza.pizzaCrust).to.eql("deep dish");
    expect(testPizza.pizzaToppings).to.eql(['pepperoni', 'black olives']);
    expect(testPizza.pizzaPrice).to.eql(11.00);
  });

  it("adds a size to the pizza.", function() {
    var testPizza = new Pizza(" ", " ",
      [], 0.00);
    testPizza.addSize("large");
    expect(testPizza.pizzaSize).to.eql("large");
  });

  it("changes price when you add a size.", function() {
    var testPizza = new Pizza(" ", " ",
      [], 0.00);
    testPizza.addSize("large");
    expect(testPizza.pizzaSize).to.eql("large");
    expect(testPizza.pizzaPrice).to.eql(8.00);
  });

  it("adds a crust to the pizza.", function() {
    var testPizza = new Pizza("large", " ",
      [], 8.00);
    testPizza.addCrust("original");
    expect(testPizza.pizzaCrust).to.eql("original");
  });

  it("changes price when you add a crust.", function() {
    var testPizza = new Pizza(" ", " ",
      [], 8.00);
    testPizza.addCrust("deep dish");
    expect(testPizza.pizzaCrust).to.eql("deep dish");
    expect(testPizza.pizzaPrice).to.eql(9.00);
  });

  it("adds toppings to the pizza.", function() {
    var testPizza = new Pizza("large", "stuffed",
      [], 10.00);
    testPizza.addTopping("pepperoni");
    expect(testPizza.pizzaToppings).to.eql(['pepperoni']);
  });

  it("changes price when you add a crust.", function() {
    var testPizza = new Pizza("large", "stuffed",
      [], 10.00);
    testPizza.addTopping("pepperoni");
    expect(testPizza.pizzaToppings).to.eql(['pepperoni']);
    expect(testPizza.pizzaPrice).to.eql(11.00);
  });

  it("changes price when you add a crust.", function() {
    var testPizza = new Pizza("large", "stuffed",
      [], 10.00);
    testPizza.addTopping("pepperoni");
    testPizza.addTopping("black olives");
    expect(testPizza.pizzaToppings).to.eql(['pepperoni', 'black olives']);
    expect(testPizza.pizzaPrice).to.eql(12.00);
  });

  it("can remove a topping.", function() {
    var testPizza = new Pizza("large", "stuffed",
      ["pepperoni", "bacon"], 12.00);
    testPizza.removeTopping("bacon");
    expect(testPizza.pizzaToppings).to.eql(["pepperoni"]);
    expect(testPizza.pizzaPrice).to.eql(11.00);
  });

});
