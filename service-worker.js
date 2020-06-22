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
    "revision": "32ff4c746be2df5d7ff191731f21f1d2"
  },
  {
    "url": "assets/css/0.styles.0bba377f.css",
    "revision": "9cc72c511be4258e387ad1673772f623"
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
    "url": "assets/js/10.57774243.js",
    "revision": "3a80bcf1e2995c8791c651615d6b530a"
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
    "url": "assets/js/13.1d2438f0.js",
    "revision": "9fe4f28b466302b850f6702b5effd621"
  },
  {
    "url": "assets/js/14.603c527b.js",
    "revision": "51ca7e08a3f629dd56e17da53021f976"
  },
  {
    "url": "assets/js/15.6045a043.js",
    "revision": "65f7fc238dc3c09a38947a0479c108b4"
  },
  {
    "url": "assets/js/16.55688002.js",
    "revision": "9830d19c7e32738ab7997dcad7d08f22"
  },
  {
    "url": "assets/js/17.189a18be.js",
    "revision": "0f1c30b82266f34db3755ad764ad1c89"
  },
  {
    "url": "assets/js/18.22cbfbe5.js",
    "revision": "f64c915ffba7dcb6ab39b9c6d0057aee"
  },
  {
    "url": "assets/js/19.a96652e9.js",
    "revision": "f92f7809990f6a177bfc0fe2870d9795"
  },
  {
    "url": "assets/js/2.4a601823.js",
    "revision": "14a31e14baf7dc836c2f03a4622927b1"
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
    "url": "assets/js/22.45f50f47.js",
    "revision": "ccc38731227af02babbcae70d08fa5aa"
  },
  {
    "url": "assets/js/23.c1f6597e.js",
    "revision": "073a470baa7f09bca2bb1257d57492a1"
  },
  {
    "url": "assets/js/24.48116ae4.js",
    "revision": "84f232fea94abe12de69cd4af76e502f"
  },
  {
    "url": "assets/js/25.f757f951.js",
    "revision": "57815e9a9c69f017d26d4c5f223359ca"
  },
  {
    "url": "assets/js/26.a85224a2.js",
    "revision": "42ffe0c871a1aad9c3eba29fa4f6618b"
  },
  {
    "url": "assets/js/27.5f744586.js",
    "revision": "70921de08ef514efdeaa418f056dddae"
  },
  {
    "url": "assets/js/28.b4e8574b.js",
    "revision": "c9004cb650ff3ee0336f58f5f1547b75"
  },
  {
    "url": "assets/js/29.8ee820c8.js",
    "revision": "b8e68afbcb89c3af123d6fceff5c4feb"
  },
  {
    "url": "assets/js/30.f7a390db.js",
    "revision": "c7992f32e20a420382eaa21b87bc9d32"
  },
  {
    "url": "assets/js/31.efb68801.js",
    "revision": "0259a8c300163d5dfb7ce376b080977e"
  },
  {
    "url": "assets/js/32.b5e37db9.js",
    "revision": "0eb9cc118030b7647b1a151616ac8f56"
  },
  {
    "url": "assets/js/33.d93e17e5.js",
    "revision": "24cd1925a677c56a483c08fc8c962de9"
  },
  {
    "url": "assets/js/34.e1708e63.js",
    "revision": "55b03735cbc8cd97a4401dd80c020440"
  },
  {
    "url": "assets/js/35.474cb266.js",
    "revision": "fe79faab89cf3604bdfdf6d976942e96"
  },
  {
    "url": "assets/js/36.d856f9fc.js",
    "revision": "0e23744e52cad504dc7842c8d6fd59a5"
  },
  {
    "url": "assets/js/37.de64db12.js",
    "revision": "8755213b4f9aafd36e108e9a85b8f1bf"
  },
  {
    "url": "assets/js/38.bf28ed28.js",
    "revision": "e75b6badd77b0b8b9edd5f22e7289d3a"
  },
  {
    "url": "assets/js/39.769a0870.js",
    "revision": "8efac50cf39d5e45a31090a5984641d7"
  },
  {
    "url": "assets/js/40.9751b318.js",
    "revision": "5e5ed57b578fdc30f3cd6270555d99ef"
  },
  {
    "url": "assets/js/41.434975bc.js",
    "revision": "c07a5ea14f0d113cf7fa1c0984c726b7"
  },
  {
    "url": "assets/js/42.574b486e.js",
    "revision": "af1ba97b73a21c992ecfc5e1070d5478"
  },
  {
    "url": "assets/js/43.c73b39b7.js",
    "revision": "171cf46502214d84f70088664f63e770"
  },
  {
    "url": "assets/js/44.f3e5266e.js",
    "revision": "e28e198a96d2025ab169c9afe6404e99"
  },
  {
    "url": "assets/js/45.2a421b04.js",
    "revision": "ad5fff26506c4f6dfee912a857a24b4f"
  },
  {
    "url": "assets/js/46.880aa1b9.js",
    "revision": "7a1dec6d7cf9630c4e77fd9817f548e6"
  },
  {
    "url": "assets/js/47.63aecb13.js",
    "revision": "398c21f336df202b05bd8f21a841fc7a"
  },
  {
    "url": "assets/js/48.eede03d6.js",
    "revision": "44deb2f149fca1058659c0b7cedfa6f4"
  },
  {
    "url": "assets/js/49.4dcb2b10.js",
    "revision": "69cccd4ef04a508ed0366f6fb748337b"
  },
  {
    "url": "assets/js/50.57a4120b.js",
    "revision": "f480af03dd639dacb495aad32cca1498"
  },
  {
    "url": "assets/js/51.b373d353.js",
    "revision": "690c78a673a13b5ad0f7958460dd7711"
  },
  {
    "url": "assets/js/52.c7a97299.js",
    "revision": "676ad57a0838a5fe13134c0cc17a3c10"
  },
  {
    "url": "assets/js/53.2e7673d3.js",
    "revision": "57818f5272e108ede9c55ed603aa6632"
  },
  {
    "url": "assets/js/54.aab93d81.js",
    "revision": "a9052998f7e073be7633f8911eead126"
  },
  {
    "url": "assets/js/55.d66775ff.js",
    "revision": "f14854e722a33fb83433af46f7f8d0b6"
  },
  {
    "url": "assets/js/56.035d9a94.js",
    "revision": "f1d2ae5252a30f9878fd70cb2649f549"
  },
  {
    "url": "assets/js/57.4b5cbca4.js",
    "revision": "a8ab8af78d071921438e9414de7225f6"
  },
  {
    "url": "assets/js/58.299b718a.js",
    "revision": "c240741ba7f52390706d70b71b9e32f5"
  },
  {
    "url": "assets/js/59.b720e0c2.js",
    "revision": "9320b6f6174c3ec291f67f1570aec3c0"
  },
  {
    "url": "assets/js/6.3221a1ed.js",
    "revision": "836107e9559162bd6e433195a51de68c"
  },
  {
    "url": "assets/js/60.b377f1fa.js",
    "revision": "2d9a4a8edfd82b1d8dc9d47b44aff1cb"
  },
  {
    "url": "assets/js/61.903976bc.js",
    "revision": "71ce3159dc8856c3b58cdc6efc42b3df"
  },
  {
    "url": "assets/js/62.9f1192b3.js",
    "revision": "8fedf251870ea5ec50320f4ecd6e8027"
  },
  {
    "url": "assets/js/63.b2164d1a.js",
    "revision": "d62b75dcb6db9cbd587089a8c366882f"
  },
  {
    "url": "assets/js/64.8f3d8e1e.js",
    "revision": "3a16e247339b6b6aca7924db94654149"
  },
  {
    "url": "assets/js/65.f1a126ee.js",
    "revision": "2d8acb85471b13de0958ba6cb361a3ce"
  },
  {
    "url": "assets/js/66.583eae18.js",
    "revision": "d2029f991faa3cd04d6449f8f953c924"
  },
  {
    "url": "assets/js/67.51da5dec.js",
    "revision": "7f79ab19c5781aac574f8394d4dd4c20"
  },
  {
    "url": "assets/js/68.5ed22750.js",
    "revision": "324348b74f4e9b8305d6cf5a18121709"
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
    "url": "assets/js/app.ba677d75.js",
    "revision": "5b5c36d8f27e798ec5a45a86bf9b20d7"
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
    "revision": "013b9bd85f3286b9e0a0861f1ce19a02"
  },
  {
    "url": "index.html",
    "revision": "26ccbcf46ec92cae17f541d18439a1ed"
  },
  {
    "url": "tag/index.html",
    "revision": "7386adfeae359ef487b265f31bf8c5d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "90be8b47b3f664537b2bb43498c5c5c8"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "5137647a0c7c0b534cbf826f1ff63c95"
  },
  {
    "url": "views/api/summary.html",
    "revision": "56f52649b7ad5d43fb2bafba6493fa48"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "0224e41e573b8ef99fb1e2c805c741d4"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "ee33fb739f3997e37274448fb42df83e"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "19c494bb5c9151cdb518fab883b7d7ba"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "6af71c3e883e882dbce87d09a69f8697"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "7f3988565010f85b0368f2c5bd0c2220"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "d72b6b585fa1675e5e77ea2d1aa0eecf"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "59367f194e39ee13f3b37214976511cf"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "27d47f65e780262f8d91ea08279d9599"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "f1f5e2ff96e8aa0ad127c7915e7f5db1"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "4ec21ea979f9150e2f638f33aa123f0e"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "02eaa5f841f68cc58bc2041565e5c2cc"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "1f89a1f3a9d89b179b5a6d4b111fa1ae"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "5f3c3378e826a1e9b924499f9a73e5c4"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "2b260e0aea77c244b896516bd12c107e"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "20ae3c77e36bb2ebdac2997d767434a1"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "d248fcb8937ab6c151d420f015d443d3"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "4b0dd0ceda243e91e3cbf9bdd65e4833"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "cacd9583bf39a504fe70eea5a3fca29a"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "c0b0a739e298a4be2e0fef8a5a323c4b"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "044781070c3b88497e1b7a49cbf2d1c2"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "0a042f3212ec77d8b78b047441d8d30a"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "2c3bce4e8b1f8a058b837574b8fd59d1"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "96b394960c1495e11f610070edd96060"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "e380783722cac280dc5563a517125c37"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "9832f7f2ff0928dd2def27bc10814330"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "18a46ae579b8d16775b01c66fdb4c260"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "329cfe891f633fd67189f7cb4072d8ce"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "897abc0579a307a0e90038afcefd7aeb"
  },
  {
    "url": "views/starter/index.html",
    "revision": "1b77bd3ebbca907dfe184c294701958e"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "f909341e1b96a79f7f423373708f1436"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "2deed69124ca0478522c688ba962f2f5"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "0656da72c03c069dcd821215f922a0d4"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "eab90a98117d93e001e349481cd684c4"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "76b4d2bd577e9a94c9eac0e5b98624bd"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "2bcca11e61df0ccc530547b2447a5145"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "7e004eb9cb0a5b79ad64a2e4ea822376"
  },
  {
    "url": "views/support/faq.html",
    "revision": "e135ed5617cdc5146d6dde46cd8774c6"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "523d404e524c523f2689bd69c96bce5c"
  },
  {
    "url": "views/web/nginx/nginxregex.html",
    "revision": "c119900bd3ea741c35174dbb3b7ecab1"
  },
  {
    "url": "views/web/nginx/nginxrewrite.html",
    "revision": "8abd3f20920891b4d5007a553fe143e6"
  },
  {
    "url": "views/web/nginx/redirectconf.html",
    "revision": "bec1ee9ef0012ffd842923c948a86c71"
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
