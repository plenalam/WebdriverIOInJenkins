var platformName = require("../EnvironmentVars").platformName;
var selector;
if (platformName == "iOS") {
  selector = {
    LoginBtn: "~loginbtn",
    UserNameTextField: "~UNTextField",
    PassWordTextField: "~PWTextField",
    Toast: "~loginhub"
  };
} else {
  selector = {
    LoginBtn: "~loginBtn",
    UserNameTextField: "~UNTextField",
    PassWordTextField: "~PWTextField",
    Toast: "~loginhub"
  };
}
exports.selectorDic = selector;