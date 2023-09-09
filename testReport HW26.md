## "spec" Reporter:

[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing D:\TestQA\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-0] Session ID: f4c13bf1-9d8a-4db5-a2d4-d43bac2f0bea
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] » \tests\specs\app.login.spec.ts
[emulator-5554 Android 10 #0-0] WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 10 #0-0] ✖ should be able login successfully
[emulator-5554 Android 10 #0-0] ? can not login successfully with invalid password (<8 characters)
[emulator-5554 Android 10 #0-0] ✖ "before each" hook for WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 2 failing (1m 12s)
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 1) WebdriverIO and Appium, when interacting with a login form, should be able login successfully
[emulator-5554 Android 10 #0-0] Can't call getText on element with selector "//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]" because element wasn't found
[emulator-5554 Android 10 #0-0] Error: Can't call getText on element with selector "//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]" because element wasn't found
[emulator-5554 Android 10 #0-0] at implicitWait (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\utils\implicitWait.js:34:19)
[emulator-5554 Android 10 #0-0] at async Element.elementErrorHandlerCallbackFn (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:20:29)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Function.text (D:\TestQA\appium-boilerplate\tests\screenobjects\components\NativeAlert.ts:85:71)
[emulator-5554 Android 10 #0-0] at async Context.<anonymous> (D:\TestQA\appium-boilerplate\tests\specs\app.login.spec.ts:19:22)
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 2) WebdriverIO and Appium, when interacting with a login form, "before each" hook for WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 10 #0-0] element ("~Home") still not displayed after 20000ms
[emulator-5554 Android 10 #0-0] Error: element ("~Home") still not displayed after 20000ms
[emulator-5554 Android 10 #0-0] at D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Element.elementErrorHandlerCallbackFn (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Element.elementErrorHandlerCallbackFn (D:\TestQA\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 10 #0-0] at async Element.wrapCommandFn (D:\TestQA\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 10 #0-0] at async Context.<anonymous> (D:\TestQA\appium-boilerplate\tests\specs\app.login.spec.ts:7:9)

Spec Files: 0 passed, 1 failed, 1 total (100% completed) in 00:01:47

2023-09-09T13:23:05.377Z INFO @wdio/local-runner: Shutting down spawned worker
2023-09-09T13:23:05.636Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-09-09T13:23:05.637Z INFO @wdio/local-runner: shutting down

Dmitry@DESKTOP-F2BPP54 MINGW64 /d/TestQA/appium-boilerplate (main)
