App.info({
  id: 'com.weaworking.workbase',
  name: 'WorkBase',
  version: "0.0.1",
  description: '',
  author: 'Lian Wang',
  email: 'wanglian1024@gmail.com',
  website: 'https://wanglian.github.io/workbase-server'
});

App.accessRule('*');
App.accessRule('*', {type: 'intent'});
App.accessRule('*', {type: 'navigation'});

App.setPreference('KeyboardDisplayRequiresUserAction', false);
App.setPreference('DisallowOverscroll', true); // don't want the WebView to rubber-band
App.setPreference('BackupWebStorage', 'none');
App.setPreference('KeyboardShrinksView', true); // shrink the WebView when the keyboard comes up
App.setPreference('CordovaWebViewEngine', 'CDVWKWebViewEngine', 'ios');
App.setPreference('AllowBackForwardNavigationGestures', true, 'ios');
App.setPreference('Allow3DTouchLinkPreview', false, 'ios');

App.configurePlugin('phonegap-plugin-push', {
  // SENDER_ID: 1076307378807 // android
});

App.icons({
  "app_store": "private/ios/icon-app_store.png",
  "iphone_2x": "private/ios/icon-iphone_2x.png",
  "iphone_3x": "private/ios/icon-iphone_3x.png",
  "ipad_2x": "private/ios/icon-ipad_2x.png",
  "ipad_pro": "private/ios/icon-ipad_pro.png",
  "ios_settings_2x": "private/ios/icon-ios_settings_2x.png",
  "ios_settings_3x": "private/ios/icon-ios_settings_3x.png",
  "ios_spotlight_2x": "private/ios/icon-ios_spotlight_2x.png",
  "ios_spotlight_3x": "private/ios/icon-ios_spotlight_3x.png",
  "ios_notification_2x": "private/ios/icon-ios_notification_2x.png",
  "ios_notification_3x": "private/ios/icon-ios_notification_3x.png",
  "ipad": "private/ios/icon-ipad.png",
  "ios_settings": "private/ios/icon-ios_settings.png",
  "ios_spotlight": "private/ios/icon-ios_spotlight.png",
  "ios_notification": "private/ios/icon-ios_notification.png",
  "iphone_legacy": "private/ios/icon-iphone_legacy.png",
  "iphone_legacy_2x": "private/ios/icon-iphone_legacy_2x.png",
  "ipad_spotlight_legacy": "private/ios/icon-ipad_spotlight_legacy.png",
  "ipad_spotlight_legacy_2x": "private/ios/icon-ipad_spotlight_legacy_2x.png",
  "ipad_app_legacy": "private/ios/icon-ipad_app_legacy.png",
  "ipad_app_legacy_2x": "private/ios/icon-ipad_app_legacy_2x.png",
  // "android_mdpi": "private/android/icon-android_mdpi.png",
  // "android_hdpi": "private/android/icon-android_hdpi.png",
  // "android_xhdpi": "private/android/icon-android_xhdpi.png",
  // "android_xxhdpi": "private/android/icon-android_xxhdpi.png",
  // "android_xxxhdpi": "private/android/icon-android_xxxhdpi.png"
});

App.launchScreens({
  "iphone5": "private/ios/launch-iphone5.png",
  "iphone6": "private/ios/launch-iphone6.png",
  "iphone6p_portrait": "private/ios/launch-iphone6p_portrait.png",
  "iphone6p_landscape": "private/ios/launch-iphone6p_landscape.png",
  "iphoneX_portrait": "private/ios/launch-iphoneX_portrait.png",
  "iphoneX_landscape": "private/ios/launch-iphoneX_landscape.png",
  "ipad_portrait_2x": "private/ios/launch-ipad_portrait_2x.png",
  "ipad_landscape_2x": "private/ios/launch-ipad_landscape_2x.png",
  "iphone": "private/ios/launch-iphone.png",
  "iphone_2x": "private/ios/launch-iphone_2x.png",
  "ipad_portrait": "private/ios/launch-ipad_portrait.png",
  "ipad_landscape": "private/ios/launch-ipad_landscape.png",
  // "android_mdpi_portrait": "",
  // "android_mdpi_landscape": "",
  // "android_hdpi_portrait": "",
  // "android_hdpi_landscape": "",
  // "android_xhdpi_portrait": "",
  // "android_xhdpi_landscape": "",
  // "android_xxhdpi_portrait": "",
  // "android_xxhdpi_landscape": "",
  // "android_xxxhdpi_portrait": "",
  // "android_xxxhdpi_landscape": ""
});
