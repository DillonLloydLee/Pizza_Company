// Tests :

describe("Pizza", function() {

  it("creates a pizza with the specified properties.", function() {
    var testPizza = new Pizza("large", "deep dish",
      "['pepperoni', 'black olives']", "$10.00");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaCrust).to.equal("deep dish");
    expect(testPizza.pizzaToppings).to.equal("['pepperoni', 'black olives']");
    expect(testPizza.pizzaPrice).to.equal("$10.00");
  });

});
