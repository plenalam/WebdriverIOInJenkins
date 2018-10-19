const path = require('path');

if (process.env.SAUCE_LABS) {
  exports.iosTestApp = "http://appium.github.io/appium/assets/TestApp7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
} else {
  exports.iosTestApp = path.resolve(__dirname, "..", "..", "apps", "TestApp.app.zip");
  exports.androidApiDemos = path.resolve(__dirname, "..", "..", "apps", "ApiDemos-debug.apk");
}

exports.simulatorOpt = {
  host: 'localhost',
  port: 4723,
  desiredCapabilities: {
    platformName: "iOS",
    platformVersion: "11.4",
    deviceName: "GXXmobile",
    automationName: "XCUITest",
    xcodeOrgId: "W7Q3L59QS3",
    xcodeSigningId: "iPhone Developer",
    udid: "B9EB98B9-3348-40B9-AD50-7CDE5E5227AF",
    //app: path.resolve(__dirname, "..", "AppiumDemo.app"),
    app: "/Users/yingjielee/Desktop/gitworkspace/webdriverioclient/AppiumDemo.app",
    bundleId: "com.gosuncn.appiumdemo.AppiumDemo",
    autoAcceptAlerts: true,
    showIOSLog: true,
    screenshotPath: "./sc/crash/"
  }
};

exports.realOpts = {
  host: 'localhost',
  port: 4723,
  desiredCapabilities: {
    platformName: "iOS",
    platformVersion: "9.4",
    deviceName: "GXXmobile",
    automationName: "XCUITest",
    xcodeOrgId: "W7Q3L59QS3",
    xcodeSigningId: "iPhone Developer",
    udid: "dbaf9b9f351f0928cca949d3dea06b514e07b97d",
    app: "/Users/yingjielee/Desktop/gitworkspace/webdriverioclient/AppiumDemo.ipa",
    bundleId: "com.gosuncn.appiumdemo.AppiumDemo",
    autoAcceptAlerts: true,
    showIOSLog: true,
    screenshotPath: "./sc/crash/"
  }
};