* run: npx react-native run-android and npx react-native start.
* connection react native to xiaomi users: 
1. setting - about phone - press MIUI version 10 times (you are developer).
2. setting - additional settings - Developer options - Debugging - USB Debugging (ON) - Install Via USB (ON).
* if SDK not found: create local.properties on android folder. and where is your android sdk file when install. if you don't know the directory when want passing into local.properties when we found, we can use PWD on terminal (print working directory).
* install adb: sudo apt-get install android-tools-adb android-tools-fastboot.
* adb devices to see how many devices attached.