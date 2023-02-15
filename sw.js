/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/About.310aa8a7.css",
    "revision": null
  }, {
    "url": "assets/About.acf52f2d.js",
    "revision": null
  }, {
    "url": "assets/AppListItem.5e5cde9f.js",
    "revision": null
  }, {
    "url": "assets/AppListItem.8ff0c17f.css",
    "revision": null
  }, {
    "url": "assets/AuthLayout.89bb4804.js",
    "revision": null
  }, {
    "url": "assets/BaseButton.3c58cd34.js",
    "revision": null
  }, {
    "url": "assets/BaseButton.9aaf353b.css",
    "revision": null
  }, {
    "url": "assets/Bot.8a1ae71c.js",
    "revision": null
  }, {
    "url": "assets/Bot.bf2ac054.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.88c6ad12.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.caa075a8.js",
    "revision": null
  }, {
    "url": "assets/ConfirmResetPasswordOTP.c972182f.css",
    "revision": null
  }, {
    "url": "assets/ConfirmResetPasswordOTP.cc27178f.js",
    "revision": null
  }, {
    "url": "assets/Faq.e10fbc8d.css",
    "revision": null
  }, {
    "url": "assets/Faq.e1d78cb6.js",
    "revision": null
  }, {
    "url": "assets/index.0e4293b5.css",
    "revision": null
  }, {
    "url": "assets/index.23bbb581.js",
    "revision": null
  }, {
    "url": "assets/LoginView.4cda2e99.js",
    "revision": null
  }, {
    "url": "assets/LoginView.e0ed9f0b.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.128bc287.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.d192051b.css",
    "revision": null
  }, {
    "url": "assets/SetNewPasswordView.4548a134.js",
    "revision": null
  }, {
    "url": "assets/SetNewPasswordView.503a671c.css",
    "revision": null
  }, {
    "url": "assets/Settings.3d715829.css",
    "revision": null
  }, {
    "url": "assets/Settings.c621cecd.js",
    "revision": null
  }, {
    "url": "assets/SignUpView.3f634e26.css",
    "revision": null
  }, {
    "url": "assets/SignUpView.bcf680e0.js",
    "revision": null
  }, {
    "url": "assets/SocialAccountAuth.6b149134.css",
    "revision": null
  }, {
    "url": "assets/SocialAccountAuth.c1657299.js",
    "revision": null
  }, {
    "url": "assets/Spinner.29f6e7a9.js",
    "revision": null
  }, {
    "url": "assets/Spinner.731170bb.css",
    "revision": null
  }, {
    "url": "assets/SplashScreen.cd8827b0.js",
    "revision": null
  }, {
    "url": "assets/SplashScreen.f276c480.css",
    "revision": null
  }, {
    "url": "assets/Support.7da73a90.css",
    "revision": null
  }, {
    "url": "assets/Support.a7e0f929.js",
    "revision": null
  }, {
    "url": "assets/vue-countdown.esm.28b7ccf0.js",
    "revision": null
  }, {
    "url": "assets/web.74a31314.js",
    "revision": null
  }, {
    "url": "assets/web.d2a772cf.js",
    "revision": null
  }, {
    "url": "assets/web.e9b0f97a.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "773c06fecde8891f130be55cdc0d7cad"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "manifest.webmanifest",
    "revision": "2278a49869c66e44212511dd80370d3c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
