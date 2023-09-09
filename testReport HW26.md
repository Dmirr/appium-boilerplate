## "spec" Reporter:

[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing D:\TestQA\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-0] Session ID: bb560e8e-3349-44b1-983e-6c889e777909
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] » \tests\specs\app.login.spec.ts
[emulator-5554 Android 10 #0-0] WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 10 #0-0] ✖ should be able login successfully
[emulator-5554 Android 10 #0-0] ✓ can not login successfully with invalid password (<8 characters)
[emulator-5554 Android 10 #0-0] ✖ should be able sign up successfully
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 1 passing (2m 23.4s)
[emulator-5554 Android 10 #0-0] 2 failing
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 1) WebdriverIO and Appium, when interacting with a login form, should be able login successfully
[emulator-5554 Android 10 #0-0] Can't call getText on element with selector "_//android.widget.TextView[@resource-id="android:id/message"]" because element wasn't found
[emulator-5554 Android 10 #0-0] Error: Can't call getText on element with selector "_//android.widget.TextView[@resource-id="android:id/message"]" because element wasn't found
[emulator-5554 Android 10 #0-0] at implicitWait (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\utils\implicitWait.js:34:19)
[emulator-5554 Android 10 #0-0] at async Element.elementErrorHandlerCallbackFn (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:20:29)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Function.text (D:\TestQA\appium-boilerplate\tests\screenobjects\components\NativeAlert.ts:85:131)
[emulator-5554 Android 10 #0-0] at async Context.<anonymous> (D:\TestQA\appium-boilerplate\tests\specs\app.login.spec.ts:19:22)
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 2) WebdriverIO and Appium, when interacting with a login form, should be able sign up successfully
[emulator-5554 Android 10 #0-0] Can't call getText on element with selector "_//android.widget.TextView[@resource-id="android:id/message"]" because element wasn't found
[emulator-5554 Android 10 #0-0] Error: Can't call getText on element with selector "_//android.widget.TextView[@resource-id="android:id/message"]" because element wasn't found
[emulator-5554 Android 10 #0-0] at implicitWait (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\utils\implicitWait.js:34:19)
[emulator-5554 Android 10 #0-0] at async Element.elementErrorHandlerCallbackFn (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:20:29)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Function.text (D:\TestQA\appium-boilerplate\tests\screenobjects\components\NativeAlert.ts:85:131)
[emulator-5554 Android 10 #0-0] at async Context.<anonymous> (D:\TestQA\appium-boilerplate\tests\specs\app.login.spec.ts:44:22)

Spec Files: 0 passed, 1 failed, 1 total (100% completed) in 00:02:37

2023-09-09T14:03:33.805Z INFO @wdio/local-runner: Shutting down spawned worker
2023-09-09T14:03:34.060Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-09-09T14:03:34.060Z INFO @wdio/local-runner: shutting down

Dmitry@DESKTOP-F2BPP54 MINGW64 /d/TestQA/appium-boilerplate (main)
