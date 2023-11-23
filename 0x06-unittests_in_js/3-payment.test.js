const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const sendPaymentRequestToApi = require("./3-payment.js");
const Utils = require("./utils.js");

describe("sendPaymentRequestToApi", function () {
  it("should use Utils.calculateNumber correctly", function () {
    const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith("SUM", 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});
