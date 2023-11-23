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

  it("should return correct object", function (done) {
    request(
      "http://localhost:7865/available_payments",
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      }
    );
  });
});

describe("POST /login", function () {
  it("should return correct message", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      method: "POST",
      json: {
        userName: "Betty",
      },
    };
    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Welcome Betty");
      done();
    });
  });
});
