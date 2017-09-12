var DirectionsPlugin = require("nativescript-directions").Directions;
var directions = new DirectionsPlugin();

describe("available", function () {
  it("exists", function () {
    expect(directions.available).toBeDefined();
  });

  it("returns a promise", function () {
    expect(directions.available()).toEqual(jasmine.any(Promise));
  });
});

describe("navigate", function () {
  it("exists", function () {
    expect(directions.navigate).toBeDefined();
  });

  it("returns a promise", function () {
    expect(directions.navigate()).toEqual(jasmine.any(Promise));
  });
});
