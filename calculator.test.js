process.env.NODE_ENV = "test";

const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("./calculator");

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("should add negative numbers", () => {
    expect(add(-1, -2)).to.equal(-3);
  });

  it("should add decimal numbers", () => {
    expect(add(1.5, 2.5)).to.equal(4);
  });
});

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(1, 2)).to.equal(-1);
  });

  it("should subtract negative numbers", () => {
    expect(subtract(-1, -2)).to.equal(1);
  });

  it("should subtract decimal numbers", () => {
    expect(subtract(1.5, 2.5)).to.equal(-1);
  });
});

describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply(1, 2)).to.equal(2);
  });

  it("should multiply negative numbers", () => {
    expect(multiply(-1, -2)).to.equal(2);
  });

  it("should multiply decimal numbers", () => {
    expect(multiply(1.5, 2.5)).to.equal(3.75);
  });
});

describe("divide", () => {
  it("should divide two numbers", () => {
    expect(divide(1, 2)).to.equal(0.5);
  });

  it("should divide negative numbers", () => {
    expect(divide(-1, -2)).to.equal(0.5);
  });

  it("should divide decimal numbers", () => {
    expect(divide(1.5, 2.5)).to.equal(0.6);
  });

  it("should throw an error when dividing by 0", () => {
    expect(() => divide(1, 0)).to.throw();
  });
});
