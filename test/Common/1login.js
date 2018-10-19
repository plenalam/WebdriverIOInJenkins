const loginSelectors = require('../../helpers/selectors/login').selectorDic;
const EnvironmentVars = require("../../helpers/EnvironmentVars");
const chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
const webdriverio = require("webdriverio");

chai.Should();
chai.use(chaiAsPromised);


describe('#登录', () => {

  let client;

  before(function () {
    client = webdriverio.remote(EnvironmentVars.capabilities);
    chaiAsPromised.transferPromiseness = client.transferPromiseness;
    return client.init();
  });

  after(function () {
    return client.end();
  });

  it("登录是否可见", function () {
    client.waitForExist(loginSelectors.LoginBtn, 5000);
    return client.isVisible(loginSelectors.LoginBtn).should.eventually.be.true;
  });

  it("用户名为空", function () {
    return client.waitForExist(loginSelectors.UserNameTextField, 5000)
      .click(loginSelectors.LoginBtn)
      .waitForExist(loginSelectors.Toast, 5000)
      .getText(loginSelectors.Toast, function (result) {
        result.should.be.equal("用户名不能为空");
      })
      .pause(4000);
  });

  it("用户名设置", function () {
    return client
      .element(loginSelectors.UserNameTextField)
      .setValue(EnvironmentVars.UserName)
      .getText(loginSelectors.UserNameTextField).should.eventually.be.equal(EnvironmentVars.UserName);
  });

  it("密码为空", function () {
    return client
      .click(loginSelectors.LoginBtn)
      .waitForExist(loginSelectors.Toast, 5000)
      .getText(loginSelectors.Toast, function (result) {
        result.should.be.equal("密码不能为空");
      })
      .pause(4000); 
  });

  it("密码设置", function () {
    return client
      .waitForExist(loginSelectors.PassWordTextField, 5000)
      .element(loginSelectors.PassWordTextField)
      .setValue("123")
      .getText(loginSelectors.PassWordTextField).should.eventually.be.equal('123');
  });

  it("密码错误", function () {
    return client
      .click(loginSelectors.LoginBtn)
      .waitForExist(loginSelectors.Toast, 5000)
      .getText(loginSelectors.Toast, function (result) {
        result.should.be.equal("登录失败,密码错误");
      })
      .pause(4000);
      
  });

  it("登录成功", function () {
    return client
      .waitForExist(loginSelectors.PassWordTextField, 5000)
      .element(loginSelectors.PassWordTextField)
      .setValue(EnvironmentVars.PassWord)
      .click(loginSelectors.LoginBtn)
      .waitForExist("~homelable", 100000);  
  });



});