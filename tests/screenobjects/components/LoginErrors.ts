const SELECTORS = {
 ANDROID: {
 ALERT_INVALID_PASS: '*//android.widget.ScrollView[@content-desc="Login-screen"]//android.widget.TextView[2]',
 ALERT_INVALID_PASS2: '*//android.widget.ScrollView[@content-desc="Login-screen"]//android.widget.TextView[3]'
 },

 IOS: {
    ALERT: '-ios predicate string:type == \'XCUIElementTypeAlert\'',
},

}

class LoginErrors {

static async waitForPassMessageIsShown (isShown = true) {
    const selector = driver.isAndroid
        ? SELECTORS.ANDROID.ALERT_INVALID_PASS
        : SELECTORS.IOS.ALERT;

    return $(selector).waitForExist({
        timeout: 11000,
        reverse: !isShown,
    });
}

static async waitForNotSamePassIsShown (isShown = true) {
    const selector = driver.isAndroid
        ? SELECTORS.ANDROID.ALERT_INVALID_PASS2
        : SELECTORS.IOS.ALERT;

    return $(selector).waitForExist({
        timeout: 11000,
        reverse: !isShown,
    });
}
static async PassMessageText ():Promise<string> {
    if (driver.isIOS) {
        return driver.getAlertText();
    }

    return `${await $(SELECTORS.ANDROID.ALERT_INVALID_PASS).getText()}`;
}

static async NotSamePassText ():Promise<string> {
    if (driver.isIOS) {
        return driver.getAlertText();
    }

    return `${await $(SELECTORS.ANDROID.ALERT_INVALID_PASS2).getText()}`;
}

}

export default LoginErrors