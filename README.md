- ionic cordova build android --prod --release

- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ritmo-app-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name

- zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ritmo-app.apk
