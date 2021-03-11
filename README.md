# map-and-UI

run npm install

IF SUCH ERROR OCCUR:

1- unable to load script from assets 'index.android.bundle'

SOLUTION:

run:
'mkdir android\app\src\main\assets'
'react-native bundle --platform android --dev false --entry-file index.js --bundle-output android\app\src\main\assets\index.android.bundle --assets-dest android\app\src\main\res'
'cd..'
'react-native run-android'

2- Error: Command failed: gradlew.bat app:installDebug
cd android
gradlew.bat installDebug
cd ..
react-native run-android
