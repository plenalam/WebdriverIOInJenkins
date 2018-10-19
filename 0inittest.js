const webdriverio = require("webdriverio");
const EnvironmentVars = require("../helpers/EnvironmentVars");
const chai = require("chai");
const loginSelectors = require('../helpers/selectors/login').selectorDic;
const chaiAsPromised = require('chai-as-promised');

chai.Should();
chai.use(chaiAsPromised);
const client  = webdriverio.remote(EnvironmentVars.capabilities);
chaiAsPromised.transferPromiseness = client.transferPromiseness;

describe('#创建Session', () => {
  before(function () {
    return client.init();
  });


  it("创建Session1", function () {
    return client.waitForExist(loginSelectors.LoginBtn, 5000);
  });

});

exports.client = client;