import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nitride.app",
  appName: "360 Devs",
  webDir: "./dist",
  bundledWebRuntime: false,
  plugins: {
    /* "SplashScreen": {
      "launchShowDuration": 3000,
      "launchAutoHide": true,
      "backgroundColor": "#000000",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": true,
      "splashImmersive": true,
      "layoutName": "launch_screen",
      "useDialog": true
    } */
  },
};

export default config;
