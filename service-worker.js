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
    "revision": "5ccedc67f8c04117a1f6222df8d68470"
  },
  {
    "url": "assets/css/0.styles.8f9d3113.css",
    "revision": "a3f1534a90b8674f85fe0ec0eff6976c"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.81f0b143.svg",
    "revision": "81f0b143cf6df495fb5f1ba4b32da0a4"
  },
  {
    "url": "assets/img/yesterday.8e49f298.svg",
    "revision": "8e49f298844ce8a7235c197d5d12e4c4"
  },
  {
    "url": "assets/img/代码.2b46deea.svg",
    "revision": "2b46deeaa49205fa1f831b7457ff430f"
  },
  {
    "url": "assets/img/架构设计.c4e6015e.svg",
    "revision": "c4e6015ed5c8d99646db63b6a6ecca1f"
  },
  {
    "url": "assets/img/监控运维.ab385565.svg",
    "revision": "ab3855656dfad3cb6cb3025998593fe7"
  },
  {
    "url": "assets/img/符号-部署.07df88c5.svg",
    "revision": "07df88c5279471953ba9dade7c47f727"
  },
  {
    "url": "assets/js/1.74e43295.js",
    "revision": "cd263e6e0083b8cc8fcf3354d481a546"
  },
  {
    "url": "assets/js/10.9234862f.js",
    "revision": "79b43aca0aa8cfc153082fd1a4cc7e6a"
  },
  {
    "url": "assets/js/11.faaf2a0b.js",
    "revision": "b3167cfe6846de414a68fe53f4cddd53"
  },
  {
    "url": "assets/js/12.99d8a8e1.js",
    "revision": "4eb7f144fbd014a29649b3c81262fa25"
  },
  {
    "url": "assets/js/13.a0de6678.js",
    "revision": "5cf2e52810dac845a31fd04aa506e667"
  },
  {
    "url": "assets/js/14.88f1efe8.js",
    "revision": "bcb59e03b59731afc3419833a39c35f4"
  },
  {
    "url": "assets/js/15.7c74cd9c.js",
    "revision": "3fcacdbb61c56e99b64b64708c80b795"
  },
  {
    "url": "assets/js/16.def86b44.js",
    "revision": "4028fc96e872e7dbda3413aaac7eb019"
  },
  {
    "url": "assets/js/17.c8f0c21a.js",
    "revision": "6bc259ba28ccb1b3cfcd8f99c9a70897"
  },
  {
    "url": "assets/js/18.461f5c76.js",
    "revision": "9bd0979a9cf65951ab407f635fd800b2"
  },
  {
    "url": "assets/js/19.6d47cd50.js",
    "revision": "b71ad2d84b5d7fca83cb7600171a3bd3"
  },
  {
    "url": "assets/js/2.d40390da.js",
    "revision": "0d2efff0bb97b0bebe5cf21ae560e305"
  },
  {
    "url": "assets/js/20.47ae4efd.js",
    "revision": "53ebf0698b62941a349f3bd18dbc6cc7"
  },
  {
    "url": "assets/js/21.ce6f9c93.js",
    "revision": "b40f40b943972e452272b60c658a5b78"
  },
  {
    "url": "assets/js/22.9a8ea2ec.js",
    "revision": "584357e7c4d82f57689a1fe0eb0cee14"
  },
  {
    "url": "assets/js/23.a35aab38.js",
    "revision": "28f39fa61647ce44f4aa5a438a57b3da"
  },
  {
    "url": "assets/js/24.a3da70e8.js",
    "revision": "78781d79ca456a1406c264feba694276"
  },
  {
    "url": "assets/js/25.6fd36c0f.js",
    "revision": "7608705076ef0bcff48e118d0fbc01d5"
  },
  {
    "url": "assets/js/26.c3b95b33.js",
    "revision": "0ab0f64f0603aaeea6e42f5f02a47aac"
  },
  {
    "url": "assets/js/27.b213690e.js",
    "revision": "9d156247d2159876c8ec3d28080a07c0"
  },
  {
    "url": "assets/js/28.2a881680.js",
    "revision": "36f4d9efb727999d7f4d2097273e4d10"
  },
  {
    "url": "assets/js/29.3615d5ab.js",
    "revision": "0fcc6d402cfaf8cd55c38c4139656abf"
  },
  {
    "url": "assets/js/30.0de7762e.js",
    "revision": "5dfd7ca4c335fe16678a8aedd9e147d6"
  },
  {
    "url": "assets/js/31.989af7ea.js",
    "revision": "8721f42f5915a436af2c10bd00fe0482"
  },
  {
    "url": "assets/js/32.d524aa2a.js",
    "revision": "f354ce89bac54e3ee8aa114935392d2f"
  },
  {
    "url": "assets/js/33.c6a9e36e.js",
    "revision": "7bc247cc661c377805a2f455f75964d0"
  },
  {
    "url": "assets/js/34.0783e803.js",
    "revision": "8b0ea2431a617172d0a252543688074d"
  },
  {
    "url": "assets/js/35.213a1255.js",
    "revision": "0b3156b313e0199fdfbba9f7a3970ba1"
  },
  {
    "url": "assets/js/36.6077013d.js",
    "revision": "4c7182a4c066d53de3ef0173eef35185"
  },
  {
    "url": "assets/js/37.b8216631.js",
    "revision": "384cd50dc6963f812e37f8d5268ee08b"
  },
  {
    "url": "assets/js/38.878e0d98.js",
    "revision": "a8bfdfded63961429dd45e8c916fa535"
  },
  {
    "url": "assets/js/39.6e4dd783.js",
    "revision": "8b34ba81a6f9bc73eae7bedf98d90c7a"
  },
  {
    "url": "assets/js/40.fd742953.js",
    "revision": "73bf1f911f188ff35694f0a19bcd0adf"
  },
  {
    "url": "assets/js/41.702f2e53.js",
    "revision": "26c6f082a08578a901afefeb059e35ee"
  },
  {
    "url": "assets/js/42.5ac74078.js",
    "revision": "0b571d512385c287452dab6593f29c34"
  },
  {
    "url": "assets/js/43.d8aa62e2.js",
    "revision": "de6087f1a3afb3df01f40d746d21519c"
  },
  {
    "url": "assets/js/44.3ff08b41.js",
    "revision": "5991f7de493e0900abb3c1cc4f0e6f7c"
  },
  {
    "url": "assets/js/45.835c788f.js",
    "revision": "e5d83f564f39ced27a2201662fce2522"
  },
  {
    "url": "assets/js/46.f00789b6.js",
    "revision": "6d43baad676c20bc7956a016f4ea9ccd"
  },
  {
    "url": "assets/js/47.b77c819c.js",
    "revision": "0afdd748ab2baa01ce3c72ee43844a08"
  },
  {
    "url": "assets/js/48.cb7cb28a.js",
    "revision": "1758be3d39377884a205300fcf621696"
  },
  {
    "url": "assets/js/49.3788de49.js",
    "revision": "bba46df591a384b55ddb9e36c57b5d85"
  },
  {
    "url": "assets/js/50.e1de5569.js",
    "revision": "c26fa82e7f70d1cb46fa7f15cf8b0748"
  },
  {
    "url": "assets/js/51.4d363665.js",
    "revision": "d5b253e758ad967ce03669d2c6af159f"
  },
  {
    "url": "assets/js/52.81ee51c4.js",
    "revision": "28e17c173d820c8b989a9c54c3337b15"
  },
  {
    "url": "assets/js/53.eadf5abb.js",
    "revision": "2e95b81e18c6ba4dcd30b3c46cf98c97"
  },
  {
    "url": "assets/js/54.16615147.js",
    "revision": "963f3092266953e80ae34a2ec878f5df"
  },
  {
    "url": "assets/js/55.d2180f39.js",
    "revision": "32258979b48b5a51ce5e0b471f8dda7a"
  },
  {
    "url": "assets/js/56.ab4a6c6f.js",
    "revision": "ff621b45444bf3d160afa1a80d1a9846"
  },
  {
    "url": "assets/js/57.ae58b540.js",
    "revision": "4c4f2a7096d1f95be0778d9ad57becdd"
  },
  {
    "url": "assets/js/58.f0f103e7.js",
    "revision": "2950e8b01161b992a46f28459718b0c3"
  },
  {
    "url": "assets/js/59.185baa8b.js",
    "revision": "ea1979248a617c29182c13ad1edd23e4"
  },
  {
    "url": "assets/js/6.9b59ca2d.js",
    "revision": "06eeb550e025bb2133a495e1db0af62b"
  },
  {
    "url": "assets/js/60.42f0a857.js",
    "revision": "14440d9cb3cf120cce904be1cd734fc4"
  },
  {
    "url": "assets/js/61.855abd61.js",
    "revision": "884c880b47ebbe680cce20485259b7cc"
  },
  {
    "url": "assets/js/62.228f6b74.js",
    "revision": "59dcd4e503147c32f362caa6117ed291"
  },
  {
    "url": "assets/js/63.748c4f7a.js",
    "revision": "ffb32f106da04eaabc4063a4fdfdb7d2"
  },
  {
    "url": "assets/js/64.1ecf4db2.js",
    "revision": "acb75624aa975ce04e34fcf6f2599626"
  },
  {
    "url": "assets/js/65.bd945995.js",
    "revision": "fdad3b7770d8359517348ce72af37b5e"
  },
  {
    "url": "assets/js/66.af7378f6.js",
    "revision": "bb88b4b8d894365a7e1b7c26c7a79162"
  },
  {
    "url": "assets/js/67.240009ce.js",
    "revision": "c553dc86200d2c90ee8ce55b47f3a5af"
  },
  {
    "url": "assets/js/68.5a349729.js",
    "revision": "a865415dae8fda01969d7e8380c49079"
  },
  {
    "url": "assets/js/69.f9e4dfb1.js",
    "revision": "3cd401afc133726b266f6abab3ccb4ab"
  },
  {
    "url": "assets/js/7.0d9ac290.js",
    "revision": "0575c55343ca426d2fd0777773c15d30"
  },
  {
    "url": "assets/js/70.3445e97c.js",
    "revision": "8c566f76fdeed232757cdd91ba4ff449"
  },
  {
    "url": "assets/js/71.4ba5fd2a.js",
    "revision": "72d104557547ddaaac60df6dc2181f0a"
  },
  {
    "url": "assets/js/72.4bfb1329.js",
    "revision": "8275ebbce1f5b1ee8106d2c888de4351"
  },
  {
    "url": "assets/js/73.41f803c6.js",
    "revision": "7cda8645bc2034e81a2563218f9273bd"
  },
  {
    "url": "assets/js/74.4e9e8a78.js",
    "revision": "32fa977b50566c5e47f579c68c939581"
  },
  {
    "url": "assets/js/8.873f1ca0.js",
    "revision": "b980db5b032d69fc0b69faf3293cb83b"
  },
  {
    "url": "assets/js/9.10a0bb51.js",
    "revision": "cc464b87684c2690089b12cf99fd4c6a"
  },
  {
    "url": "assets/js/app.6770edd9.js",
    "revision": "18ef4ebaa7d23bd2fc3caf12aaa628c0"
  },
  {
    "url": "assets/js/vendors~docsearch.ff70839f.js",
    "revision": "ce507261073effa77571dbda19210143"
  },
  {
    "url": "assets/js/vendors~flowchart.5e3c5f33.js",
    "revision": "253a937ccb3d16a68d97dada772b30f8"
  },
  {
    "url": "categories/index.html",
    "revision": "218a5b09889b8397f862dfc6b215b8e9"
  },
  {
    "url": "index.html",
    "revision": "02423781b4a7122a2bde0ee69e2a0000"
  },
  {
    "url": "tag/index.html",
    "revision": "933f2c363f991ec0cd6bc9fed27f1607"
  },
  {
    "url": "timeline/index.html",
    "revision": "c731d767d753bff4a7bd13b4d58c44be"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "cc1a3843e6133a1144327634d804fe61"
  },
  {
    "url": "views/api/summary.html",
    "revision": "e3435cde27cdc9377be987ccbd2053b6"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "0171b626fa623bb0b4789eea227e45f3"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "68f3820feed713e85cb8650e28efb0fb"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "5fd3769d2b627e0ebef08d1337100317"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "73ae6b838cd3c7f5a3c6cc5eb7868c93"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "b95f3e29270373e5aed6c027d2968d19"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "bb81f7c60e8e077d07d8bc6da7642cba"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "71b78879ff74c54393d693f52e21cb02"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "9d21b5ac0ccff743a08b160c9c0668ba"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "6778f5cd412c86f66e77850546e81ebb"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "c1bd999b56124a62d56070b7196593fc"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "19bf0eb4c9fd278a0d9cb9d9519036d2"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "42d141f181d7ddc379727f3964fcf049"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "9c4f01e3e0b5148f88305d9d0b12a814"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "581399921b17ff846dc623530dcc702b"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "d257ac782d06b5e5a0644020eb2444dc"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "3d4ff455a708cebf848562a0ef1fb26f"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "f1a6907271e7d183a6d743c1c6fb1487"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "9a3f65b1ada990bb9ec518e0179d62af"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "ffd332a809868746d581671b377d1363"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "99b153ff6181437bf3f055fdc26564dc"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "40f5116fa45da080e407696d15bacf04"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "43aac46718e0a4eca07b496324035cf3"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "9ff0dda3744a3306a3afd52db15fb6b5"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "3c1a0d71d0195f40acda3a914b9eaf0f"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "4e163ab106d35b496c4c75cacfbe3cd7"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "337275860df67440eb4ec3fd2365059d"
  },
  {
    "url": "views/product/_sidebar.html",
    "revision": "3e10343d7973482a427317d24df27d80"
  },
  {
    "url": "views/product/osg/eposg.html",
    "revision": "2f855688381fbe5c3976ed64185aad15"
  },
  {
    "url": "views/product/oss/gridFS.html",
    "revision": "8955fe62b3ba2dac01a9d5534d08a684"
  },
  {
    "url": "views/product/oss/index.html",
    "revision": "561dfd9590a20bd6c4237177d08b777b"
  },
  {
    "url": "views/product/oss/interfaces.html",
    "revision": "4f1447847b9b238948a3ea70c06cc36d"
  },
  {
    "url": "views/product/oss/localfile.html",
    "revision": "f15ddf8b7138a8a632f4303ae403a0b8"
  },
  {
    "url": "views/product/oss/minio.html",
    "revision": "3cfd25451d95b103f8bbeee694b7178e"
  },
  {
    "url": "views/product/oss/s3.html",
    "revision": "5a88c1e02902f4b0686fd50e5179af45"
  },
  {
    "url": "views/product/workflow/dashboard.html",
    "revision": "24b62e1ceeb5cfa9dad2ead191f826fe"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "15b8b1dda0afc877a0314ff81cd9ccac"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "cef0630c11f12f743ccd83f1fea0aa8a"
  },
  {
    "url": "views/starter/index.html",
    "revision": "667d540ace7c5f3ea2bd7603d03ee064"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "3bbe173e860897814c469a613e33dd09"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "e4ac90e3622045f491e1d3cbdd313f5a"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "79a54a77e11031295bda9a5b18cb7827"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "1b28dbe9116cb92d9d4efe94803b8bcc"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "4423e471df675983326d555e85cf130c"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "27177a8c1fefdd3b0f64dbaba0694c08"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "93484617037a7f1d5655289507839d09"
  },
  {
    "url": "views/support/faq.html",
    "revision": "63f8645bd69ab77435e6ec0b7dd15d8f"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "c5ebfd0df2eebde19c3d913596ca9d8c"
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
