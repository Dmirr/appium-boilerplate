const SELECTORS = {
 ANDROID: {
 ALERT_INVALID_PASS: '*//android.widget.ScrollView[@content-desc="Login-screen"]//android.widget.TextView[2]',
 ALERT_INVALID_EMAIL: '*//android.widget.ScrollView[@content-desc="Login-screen"]//android.widget.TextView[1]'
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

static async waitForEmailMessageIsShown (isShown = true) {
    const selector = driver.isAndroid
        ? SELECTORS.ANDROID.ALERT_INVALID_EMAIL
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

static async EmailMessageText ():Promise<string> {
    if (driver.isIOS) {
        return driver.getAlertText();
    }

    return `${await $(SELECTORS.ANDROID.ALERT_INVALID_EMAIL).getText()}`;
}

}

export default LoginErrors