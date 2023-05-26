const { Triangle, Circle, Square } = require("./shapes.js");

//Testing suite for Shapes is created
describe("Shapes", () => {
  // Test case to check render function equals properties of said shapes
  describe("Triangle", () => {
    it("should pass the render function equalling triangle properties", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        `<polygon width ="300" height ="200" points="150, 18 250, 159 56, 160" fill="red" />`
      );
    });
  });
  describe("Circle", () => {
    it("should pass the render function equalling circle properties", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="green" />`
      );
    });
  });
  describe("Square", () => {
    it("should pass the render function equalling square properties", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<rect width ="300" height ="300" fill="blue" />`
      );
    });
  });
});