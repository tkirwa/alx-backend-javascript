const chai = require("chai");
const request = require("request");
const expect = chai.expect;

describe("Index page", function () {
  it("should have status code 200", function (done) {
    request("http://localhost:7865", function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct page content", function (done) {
    request("http://localhost:7865", function (error, response, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("should return correct status code and message when id is a number", function (done) {
    request("http://localhost:7865/cart/12", function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return 404 status code when id is not a number", function (done) {
    request(
      "http://localhost:7865/cart/hello",
      function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }
    );
  });
});
