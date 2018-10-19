const webdriverio = require("webdriverio");
const chai = require("chai");
const EnvironmentVars = require("../../helpers/EnvironmentVars");
var chaiAsPromised = require('chai-as-promised');
const loginSelectors = require('../../helpers/selectors/login').selectorDic;
const homeSelectors = require('../../helpers/selectors/home').selectorDic;

chai.Should();
chai.use(chaiAsPromised);

describe('#主页', () => {
  let client;

  before(function () {
    client = webdriverio.remote(EnvironmentVars.capabilities);
    chaiAsPromised.transferPromiseness = client.transferPromiseness;
    return client
      .init()
      .waitForExist(loginSelectors.UserNameTextField, 5000)
      .element(loginSelectors.UserNameTextField).setValue(EnvironmentVars.UserName)
      .element(loginSelectors.PassWordTextField).setValue(EnvironmentVars.PassWord)
      .click(loginSelectors.LoginBtn);
  });


  after(function () {
    return client.end();
  });

  it("正确跳转到home", function () {
    return client.waitForExist(homeSelectors.HomeLable, 10000);
  });

  it("isVisible", function () {
    return client.isVisible(homeSelectors.HiddenLable).should.eventually.be.false;
  });

  // it("点击崩溃", function () {
  //   var screen = client.element('~crashbtn');
  //   screen.touchAction([
  //       { action: 'tap', x: 10, y: 5 },
  //     ]);
  //   return client.waitForExist("~hiddenLable", 10000);
  // });


  it("长按后hiddenLable显示", function () {
    return client
      .execute("mobile: touchAndHold",{"x":170,"y":500,"duration":3})
      .pause(1000)
      .isVisible(homeSelectors.HiddenLable).should.eventually.be.true;
  });

});
