import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import LoginErrors from '../screenobjects/components/LoginErrors';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

       it('should be able sign up successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);

        it('can not login successfully with invalid password (<8 characters)', async () => {
            // Always make sure you are on the right tab
            await LoginScreen.tapOnLoginContainerButton();
            // Submit the data
            await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test' });
            // Wait for the alert and validate it
            await LoginErrors.waitForPassMessageIsShown();
            await expect(await LoginErrors.PassMessageText()).toEqual('Please enter at least 8 characters');
          
        });

        it('can not sign up successfully with empty username field', async () => {
            // Always make sure you are on the right tab
            await LoginScreen.tapOnSignUpContainerButton();
            // Submit the data
            await LoginScreen.submitSignUpForm({ username: '', password: 'Test1234!' });
            // Wait for the alert and validate it
            await LoginErrors.waitForEmailMessageIsShown();
            await expect(await LoginErrors.EmailMessageText()).toEqual('Please enter a valid email address');
    
        });
    });
});
