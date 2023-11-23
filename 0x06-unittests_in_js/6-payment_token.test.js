const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = require("./6-payment_token.js");

describe("getPaymentTokenFromAPI", function () {
  it("should resolve with correct data when input is true", function (done) {
    getPaymentTokenFromAPI(true)
      .then(function (response) {
        expect(response).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });
});
