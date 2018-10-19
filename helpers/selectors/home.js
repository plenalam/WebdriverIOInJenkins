var platformName = require("../EnvironmentVars").platformName;
var selector;
if (platformName == "iOS") {
  selector = {
    HomeLable: "~homelable",
    HiddenLable: "~hiddenLable",
    CrashBtn: "~crashbtn",
    GestureView: "~gestureview"
  };
} else {
  selector = {
    HomeLable: "~homelable",
    HiddenLable: "~hiddenLable",
    CrashBtn: "~crashbtn",
    GestureView: "~gestureview"
  };
}
exports.selectorDic = selector;