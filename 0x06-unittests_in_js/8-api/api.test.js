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
});
