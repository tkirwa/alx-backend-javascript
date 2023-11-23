const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return 6 when inputs are 1.4 and 4.5", function () {
      assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
    });
  });
  describe("SUBTRACT", function () {
    it("should return -4 when inputs are 1.4 and 4.5", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });
  });
  describe("DIVIDE", function () {
    it("should return 0.2 when inputs are 1.4 and 4.5", function () {
      assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });
    it("should return Error when second input is 0", function () {
      assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });
  });
});
