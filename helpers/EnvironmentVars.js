const cap = require("./capabilities").realOpts;
exports.capabilities = cap;
exports.platformName = cap.desiredCapabilities.platformName;

exports.UserName = "Admin";
exports.PassWord = "123456";

exports.iOS = "iOS";
exports.Android = "Android";