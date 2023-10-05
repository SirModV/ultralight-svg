const { Triangle, Circle, Square } = require("./shapes");
//coded with help from coding tutor
describe("Shapes", () => {
    test("Triangle √", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });

    test("Circle √", () => {
        const shape = new Circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');
    });

    test("Square √", () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
    });
});
