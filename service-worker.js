/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "89addf38aff1a27d65f85c93968030e7"
  },
  {
    "url": "assets/css/0.styles.9bea9cf5.css",
    "revision": "6e34a76e281b638d0d4b03f00e411275"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.cae91ebf.js",
    "revision": "f7081d2cc4bcae5893666303b0ff985e"
  },
  {
    "url": "assets/js/10.10569e39.js",
    "revision": "ab4ef0a62e780d25a9e7ef12610c9278"
  },
  {
    "url": "assets/js/11.1240a4ff.js",
    "revision": "6ca5838f877d81175debc487126bc8de"
  },
  {
    "url": "assets/js/12.3d2e78ee.js",
    "revision": "464ca0ce9b65587d41a631f416998a66"
  },
  {
    "url": "assets/js/13.e22778d9.js",
    "revision": "7867387019cb810d71ed04d5610d77e7"
  },
  {
    "url": "assets/js/14.913458b8.js",
    "revision": "7b40d047ed4170d401e108b981f0c7d0"
  },
  {
    "url": "assets/js/15.3c268edf.js",
    "revision": "d866659bdb58fb00c75b7cea60401a4b"
  },
  {
    "url": "assets/js/16.28626815.js",
    "revision": "2d0be2193dd9606f5a1fa7432cea0756"
  },
  {
    "url": "assets/js/17.008e71d6.js",
    "revision": "be3a4adeee182e37e2e56b3ece222bcc"
  },
  {
    "url": "assets/js/18.44a9a453.js",
    "revision": "0a5516a7aff68ce44f739086a04196cc"
  },
  {
    "url": "assets/js/19.9bc4d466.js",
    "revision": "2498f5b51195618dbc0483618b66a7cf"
  },
  {
    "url": "assets/js/2.52416223.js",
    "revision": "3af89cb8d3607c7bd146db1ee243e97f"
  },
  {
    "url": "assets/js/20.7eaa71cb.js",
    "revision": "2da4fab257fac109ef9e877ccae3b2ce"
  },
  {
    "url": "assets/js/21.744265c4.js",
    "revision": "db0d2487c2e9a899ea97edd97441fb51"
  },
  {
    "url": "assets/js/22.87ebc32c.js",
    "revision": "e1eba5fa8dc98b0feb5fd7f4ef7d3560"
  },
  {
    "url": "assets/js/23.59d8e53f.js",
    "revision": "0d405d8a5d466802fef95c2833e6bac0"
  },
  {
    "url": "assets/js/24.0eeb1812.js",
    "revision": "b04a3d0a961efecb4c74e724bcf73301"
  },
  {
    "url": "assets/js/25.3caecbe7.js",
    "revision": "52863fd975fa57fa2dfdacd26f4d6760"
  },
  {
    "url": "assets/js/26.bb3ab05a.js",
    "revision": "fa6d99784a1e28e3c3702a124cf3e4de"
  },
  {
    "url": "assets/js/27.13149d2a.js",
    "revision": "b8126ef62c487219b9295cb8a8d344b2"
  },
  {
    "url": "assets/js/28.0d3631cb.js",
    "revision": "e71aa4b639c11b0355aa03d9cef88f86"
  },
  {
    "url": "assets/js/29.aa9e1a84.js",
    "revision": "507d5e4d5a80f42fe0b8a9c1d38aa844"
  },
  {
    "url": "assets/js/30.f7a390db.js",
    "revision": "c7992f32e20a420382eaa21b87bc9d32"
  },
  {
    "url": "assets/js/31.b5c7fb07.js",
    "revision": "6e359e4a59d38c1bfdd993d12e7c2ac8"
  },
  {
    "url": "assets/js/32.c7312a5c.js",
    "revision": "3be7fa6858189372232bd706f33bff8b"
  },
  {
    "url": "assets/js/33.ef81116d.js",
    "revision": "baf88b7c0b8f5e47c02c6ceacd6cff81"
  },
  {
    "url": "assets/js/34.77d3ca84.js",
    "revision": "8c0de8a6131ccd1522e83940f9792162"
  },
  {
    "url": "assets/js/35.196c44c6.js",
    "revision": "79b46d943518e4ebdef24d8a16d3dd4d"
  },
  {
    "url": "assets/js/36.7a5d7a97.js",
    "revision": "ed0bec3cdbc231b18b7762629b01c19b"
  },
  {
    "url": "assets/js/37.c61e7e41.js",
    "revision": "309f21c2949515384397af5d924e1908"
  },
  {
    "url": "assets/js/38.c970e11e.js",
    "revision": "7b4c988a1692fc80d2f3aa4a58f86770"
  },
  {
    "url": "assets/js/39.9c48b517.js",
    "revision": "10d6c615c36bd5a0aafc0af5950e4778"
  },
  {
    "url": "assets/js/40.99938c55.js",
    "revision": "48899aa567ec1024fcc76dc27608d163"
  },
  {
    "url": "assets/js/41.6d475e27.js",
    "revision": "3699c2c476571a867c359f90fe8df425"
  },
  {
    "url": "assets/js/42.574b486e.js",
    "revision": "af1ba97b73a21c992ecfc5e1070d5478"
  },
  {
    "url": "assets/js/43.b49297ef.js",
    "revision": "b220d07bb4d4e49c7d7896dd236e5dcf"
  },
  {
    "url": "assets/js/44.2db2aaad.js",
    "revision": "c4f30db208431572904d17aad821d191"
  },
  {
    "url": "assets/js/45.a0000709.js",
    "revision": "3840da4db3864855d0f1037df6f8a433"
  },
  {
    "url": "assets/js/46.17b22373.js",
    "revision": "0b9103fa951466aca941d434f900557f"
  },
  {
    "url": "assets/js/47.63aecb13.js",
    "revision": "398c21f336df202b05bd8f21a841fc7a"
  },
  {
    "url": "assets/js/48.f7756b95.js",
    "revision": "0411aa362a9e2e07f48d5019f2ec26b2"
  },
  {
    "url": "assets/js/49.4dcb2b10.js",
    "revision": "69cccd4ef04a508ed0366f6fb748337b"
  },
  {
    "url": "assets/js/50.10f3ea41.js",
    "revision": "9ab8f9e13ba3bcb38040d6bf5285a15d"
  },
  {
    "url": "assets/js/51.87e5c995.js",
    "revision": "2f22f7dd056217cb3c321d440d8f8646"
  },
  {
    "url": "assets/js/52.5a0899a7.js",
    "revision": "632617f523f6ebd3165d890ae7e0b6ba"
  },
  {
    "url": "assets/js/53.3d5678c0.js",
    "revision": "344162f68198435aa2fcdd48fbd6998e"
  },
  {
    "url": "assets/js/54.9d26db83.js",
    "revision": "d96b62bc5cd84ffdaf8723b943431116"
  },
  {
    "url": "assets/js/55.c8d2cf9f.js",
    "revision": "b52d89a43625f5e343361569bd038551"
  },
  {
    "url": "assets/js/56.9b885754.js",
    "revision": "48b9ae18dbba4701e5541f65e5266c9a"
  },
  {
    "url": "assets/js/57.0cb16a29.js",
    "revision": "7c9a317ed7570169898295caaf9173eb"
  },
  {
    "url": "assets/js/58.5cf6910b.js",
    "revision": "15b2696c82d1cf5654f4e5361f1706ed"
  },
  {
    "url": "assets/js/59.17144d08.js",
    "revision": "963555ed035fc7f891a4f0e99201e204"
  },
  {
    "url": "assets/js/6.3221a1ed.js",
    "revision": "836107e9559162bd6e433195a51de68c"
  },
  {
    "url": "assets/js/60.7bb20c02.js",
    "revision": "387fec26c61b340ed598ef056fb7adc3"
  },
  {
    "url": "assets/js/61.35bc51ef.js",
    "revision": "61d4d14f431f672da5ca5c5cb60ae66e"
  },
  {
    "url": "assets/js/62.9b07a751.js",
    "revision": "666fc58083eac9cb254813116e14adfc"
  },
  {
    "url": "assets/js/63.a732ffaa.js",
    "revision": "349ae40b3d716b996cd8030e4271d1d8"
  },
  {
    "url": "assets/js/64.f67eb43d.js",
    "revision": "9c1fe2a19a9290d9f6bef9e6a24a3d2c"
  },
  {
    "url": "assets/js/65.f7d77b9d.js",
    "revision": "01843b761a5702065f6cc4d230fadd53"
  },
  {
    "url": "assets/js/66.583eae18.js",
    "revision": "d2029f991faa3cd04d6449f8f953c924"
  },
  {
    "url": "assets/js/67.92d826f0.js",
    "revision": "7ed2eb3cc09c3a2a3f06a4d6c80662d0"
  },
  {
    "url": "assets/js/68.847f28e3.js",
    "revision": "f47de78a3a9c87d289809f5c5d0b4df9"
  },
  {
    "url": "assets/js/69.724e8114.js",
    "revision": "76aafa6b463e95f4adb5f376a4edb8c1"
  },
  {
    "url": "assets/js/7.7c00c340.js",
    "revision": "eb5bf568b31292cc717ec5a40f4ede48"
  },
  {
    "url": "assets/js/8.79c6303c.js",
    "revision": "3ca6511ddb3a1641bf7c154410281193"
  },
  {
    "url": "assets/js/9.852fb858.js",
    "revision": "6ff2706e254b3505d9640ec966154763"
  },
  {
    "url": "assets/js/app.e4947c0f.js",
    "revision": "e2384747f6e8eb8dbb7ec6b237d21d2a"
  },
  {
    "url": "assets/js/vendors~docsearch.887b96ff.js",
    "revision": "cbf6c5ac9f32ce8af9f16b3bbeb6d1f1"
  },
  {
    "url": "assets/js/vendors~flowchart.67d7bb3a.js",
    "revision": "e8c26505eb570a750a107269b418044a"
  },
  {
    "url": "categories/index.html",
    "revision": "4e6f54bd321166481d5eaca00316e712"
  },
  {
    "url": "index.html",
    "revision": "83a0fcae14ffe588d3bef1576541e567"
  },
  {
    "url": "tag/index.html",
    "revision": "162a9f990af81dc844af811c84af3a9a"
  },
  {
    "url": "timeline/index.html",
    "revision": "aac2a140f937a475b7759bc2ea6c755c"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "fbe8a29f437fcb3d9ea57d5ba7735a8b"
  },
  {
    "url": "views/api/summary.html",
    "revision": "1212e90567494d78f3583bf55bd47f4b"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "0a2abed44a9efd88d2c4f7e1e76c1e6f"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "187452cc65754dcd0b03cb334967cbff"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "c84ebdbfa90b47781436c8288e347ab3"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "fddabfc43b471fecc22e4dae02b21ef1"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "d4d6fc1fb8847c5e6b4fe23a8febfdc0"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "a91e130c8fadb1fc91703f8129e14da5"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "a73bcde0665ca79ea8f49ee45ddace4e"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "967062c51a41c87867cc29795dd8c9d3"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "5e949be36fbb3bcc4f1af1e755a60a5f"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "20ea124ef57094a511c4500bd01fd333"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "dc731e83b078f99576a4a3c724fe24ef"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "2968e81c9663bc12ded976a476274c2f"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "4d1c09bea81ce9b45e983d2b532479ec"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "765b4181921b1f6ba93762a8fade7692"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "959ad11cd93e4ea5744eeeb011e88a9b"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "122e310ef1a3e7dd8a7cf20edd042584"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "3704f5efe020f2d094b367f3bc6b23d2"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "0aeaffcd2ca45b9000e950b00da1eac2"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "23b02944552e54cebdd5db142e0bf731"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "b0553f6b02a0a1064fd2692e8243f38b"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "6d46fee5eb5271e47f9cca3116d68877"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "efd7fe0ab564cec389b33661e3ad4c58"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "5d1e070ff707592818b5bbe2dc2fd9dc"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "08d30e49b92ac611da4f99161807b7c7"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "5cfac26d9f29cc291e528248bd123436"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "7d6f3045de7321ec0d97c5e5828794c1"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "cb4cbf3122a277986ff455ed24a929bf"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "a455003715216d4e5ae6d78881143487"
  },
  {
    "url": "views/starter/index.html",
    "revision": "d4bada001c72f9bd20ac30a0764433aa"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "3ebd80dbfa0a026e38f4622d4f98c42c"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "6b4f2a6a62f48f7c29c2391148dfef7d"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "e363ffcddec4e50a762d656bb53fd9d6"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "aafac48394af0dffe0ff3e581174df14"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "22b3996e3271e8ca682df8bbe2fac60d"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "9855b694241db8d4bff18cc26a77e7e5"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "b41dd17f8f65d1b4c7a8573c75059d34"
  },
  {
    "url": "views/support/faq.html",
    "revision": "7a34a2750b9159dc78d7c4e9e274a068"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "c55f262ec88d4cc66e4cbeb46c514820"
  },
  {
    "url": "views/web/nginx/nginxregex.html",
    "revision": "b72f891303dcdd3a8ebe1cf15f697203"
  },
  {
    "url": "views/web/nginx/nginxrewrite.html",
    "revision": "381fbcf7ff6aba8a110ed0aac475fd4b"
  },
  {
    "url": "views/web/nginx/redirectconf.html",
    "revision": "1b9f0a0b03ca4aea5f306d879686b8ac"
  },
  {
    "url": "views/web/shiro/index.html",
    "revision": "25ae978deaa603eab3b3ab009f93bae9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
