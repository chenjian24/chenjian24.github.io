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
    "revision": "cc2524309f6f7565c25cab76521fec23"
  },
  {
    "url": "assets/css/0.styles.90acbcbb.css",
    "revision": "b1df165328cc9cf6c4259515d4ea83a2"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.b93e9a14.js",
    "revision": "1a2f57e958589784d15df705e422f372"
  },
  {
    "url": "assets/js/10.9fd766fa.js",
    "revision": "390d010fe7eae6d46b0fd3be32c8d53e"
  },
  {
    "url": "assets/js/11.5265ae53.js",
    "revision": "2af00389e7de7289c63e12deb1bfd37d"
  },
  {
    "url": "assets/js/12.dcc4aeab.js",
    "revision": "850a5ef794daff7d908d891e0ec5baae"
  },
  {
    "url": "assets/js/13.e121675c.js",
    "revision": "914b61bb7dbc26175a14f6a2a6c59f03"
  },
  {
    "url": "assets/js/14.a4fcdc50.js",
    "revision": "5548ce2611ad5621474e1cb20ea58146"
  },
  {
    "url": "assets/js/15.27c8a6ed.js",
    "revision": "2233ecc8ab0540b76a6c0f4e2d930e96"
  },
  {
    "url": "assets/js/16.5be4356d.js",
    "revision": "e8ac4e518f70afd98df02f25d465db88"
  },
  {
    "url": "assets/js/17.7e6aa70c.js",
    "revision": "36afd565127560a9ab16416f83139529"
  },
  {
    "url": "assets/js/18.2500cd75.js",
    "revision": "9746d732eaaf56e3587801c61e2d8a49"
  },
  {
    "url": "assets/js/19.2dade104.js",
    "revision": "a79898922e895338332d4bf692db0bb1"
  },
  {
    "url": "assets/js/2.a10906b4.js",
    "revision": "622f5861fc2d7ab7dba04b661fa45388"
  },
  {
    "url": "assets/js/20.a8298874.js",
    "revision": "4720fe5322c821f5fb9fb78ba9e5793a"
  },
  {
    "url": "assets/js/21.6d244286.js",
    "revision": "13d2e34ce05ea5d9488c4c03fe9d3bbf"
  },
  {
    "url": "assets/js/22.118ed238.js",
    "revision": "a13ca1a29d1a9cf539eb8713eda3f2a6"
  },
  {
    "url": "assets/js/23.edac0a1a.js",
    "revision": "c5eccdbaf1dce1392db1f443d6b7e3e9"
  },
  {
    "url": "assets/js/24.a4397d95.js",
    "revision": "a95b739f44014fe8e7d6b050a076b73a"
  },
  {
    "url": "assets/js/25.45f16bdc.js",
    "revision": "d5045b6233bdafb980cb1b9c5cd20b47"
  },
  {
    "url": "assets/js/26.5936728b.js",
    "revision": "78c42e781393d603c94adb3d1b26237e"
  },
  {
    "url": "assets/js/27.6ab94181.js",
    "revision": "8168bd2b51a006cd96ab0eb65b568b8b"
  },
  {
    "url": "assets/js/28.b6bdfb3d.js",
    "revision": "7f81fed62681705a66d294f39768169e"
  },
  {
    "url": "assets/js/29.f31c535a.js",
    "revision": "86fead3292b634f59a8583068a81911a"
  },
  {
    "url": "assets/js/30.2bd74fa9.js",
    "revision": "c43081747c8d06eaafb9659249d58122"
  },
  {
    "url": "assets/js/31.ad76c372.js",
    "revision": "0b9062b961d9f8979241eaa7f8bb65e3"
  },
  {
    "url": "assets/js/32.b93dc025.js",
    "revision": "34989cf04350af5b9c58b67ecbb349cf"
  },
  {
    "url": "assets/js/33.dcc187ed.js",
    "revision": "87269454b37411c87cf978e6109776dc"
  },
  {
    "url": "assets/js/34.4a4636be.js",
    "revision": "86095ffe1615576b077122780165a5ba"
  },
  {
    "url": "assets/js/35.67bb521f.js",
    "revision": "5e18d720a965892d193ae65891d3fb90"
  },
  {
    "url": "assets/js/36.4c5e4a2b.js",
    "revision": "3ad87b6e6774565a7b5a1f043b729f35"
  },
  {
    "url": "assets/js/37.6d6f5e6c.js",
    "revision": "c28882a36f290b9f5b379ad701a8bca0"
  },
  {
    "url": "assets/js/38.3aa06f41.js",
    "revision": "adc8af1b4e042779ec7cce696f76d414"
  },
  {
    "url": "assets/js/39.30c73a50.js",
    "revision": "ae5b33270e4536f8283532be4c55e4e2"
  },
  {
    "url": "assets/js/40.044f4005.js",
    "revision": "30cb78bf2ea5dbfccf8cd7d58f4bfc82"
  },
  {
    "url": "assets/js/41.278d9573.js",
    "revision": "944d61f72f4972e91cb44e7bcd0bc536"
  },
  {
    "url": "assets/js/42.eccb1007.js",
    "revision": "63b5d2f7cba1daa6965ac72de6e2aca0"
  },
  {
    "url": "assets/js/43.30834d89.js",
    "revision": "690436ac2cb930df814c29bbc3ba9d94"
  },
  {
    "url": "assets/js/44.4a09a68d.js",
    "revision": "2c2c043a85dc49f8d31ff420982887ba"
  },
  {
    "url": "assets/js/45.3d2b259b.js",
    "revision": "c65a16605a49f733b40067c01d7fe89d"
  },
  {
    "url": "assets/js/46.d74e5c4d.js",
    "revision": "1c44fff5d3a0135897a0181bf5639b6f"
  },
  {
    "url": "assets/js/47.5ad7c6aa.js",
    "revision": "60b67fcdb271ea78ec087f473443738e"
  },
  {
    "url": "assets/js/48.284c588c.js",
    "revision": "3abe9b2b3f0cf9cce22b4a14da505333"
  },
  {
    "url": "assets/js/49.8de768ed.js",
    "revision": "9a3a68ec892eeee8a7a551677cbbd710"
  },
  {
    "url": "assets/js/50.b7ca9a97.js",
    "revision": "68dfbfcca1d2bc8ba8b3857e8c41b265"
  },
  {
    "url": "assets/js/51.3d32ecdd.js",
    "revision": "e1726d26a0e0a75db2391b81e7aa97a0"
  },
  {
    "url": "assets/js/52.d8b3cd6c.js",
    "revision": "104e378b225f60b029755cb10f130dc1"
  },
  {
    "url": "assets/js/53.f14a7c85.js",
    "revision": "d46dc33e61fd79d9f2186519fceffcaf"
  },
  {
    "url": "assets/js/54.8f31c2f3.js",
    "revision": "ba8c885b6f3849ea398cf3a4d598244c"
  },
  {
    "url": "assets/js/55.1d8f4551.js",
    "revision": "6ac108a24ed561d1f9086cd30bfc506e"
  },
  {
    "url": "assets/js/56.0f0b1ed1.js",
    "revision": "734e9f734547878078285ca790ef6ea8"
  },
  {
    "url": "assets/js/57.72b0c234.js",
    "revision": "3150b3ff68c74537b193ef90a3014509"
  },
  {
    "url": "assets/js/58.1934ba5a.js",
    "revision": "79b6d797bcd54fdd403930b5d47f2a08"
  },
  {
    "url": "assets/js/59.02216cdc.js",
    "revision": "d8ad6b76048d461ee83383d308c9ace1"
  },
  {
    "url": "assets/js/6.fe4d5698.js",
    "revision": "b4452c2342aae8bd4737d3dd2b107802"
  },
  {
    "url": "assets/js/60.90d6494a.js",
    "revision": "67b43d11d55c00e3096dd3fdec91b3a4"
  },
  {
    "url": "assets/js/61.fb39b18b.js",
    "revision": "13bfc83f43eaa615f831a96a1909dca0"
  },
  {
    "url": "assets/js/62.0554e987.js",
    "revision": "f47dddf9b0a800ff60071e049d534ddc"
  },
  {
    "url": "assets/js/63.1ffaabe1.js",
    "revision": "4c8742c5906aaee3404a8a0e3c58c28e"
  },
  {
    "url": "assets/js/64.8fb03e91.js",
    "revision": "66261dc42e56d2b29f073a0ef21eb4be"
  },
  {
    "url": "assets/js/65.6e3f150d.js",
    "revision": "b62b2483b630f989227de040aae07ae5"
  },
  {
    "url": "assets/js/66.e9ba62d6.js",
    "revision": "557a6574e96052aa8bb7450165229478"
  },
  {
    "url": "assets/js/67.0e90fe93.js",
    "revision": "3bf5950cfc8ef062c117afe993d97ec4"
  },
  {
    "url": "assets/js/68.b556e4a6.js",
    "revision": "3b3cb30957cbc594310316b4cd5eb298"
  },
  {
    "url": "assets/js/69.33caa9e8.js",
    "revision": "6a7c39041a43e751364117717acdb420"
  },
  {
    "url": "assets/js/7.55b98866.js",
    "revision": "c794be7a6e9603f3fa612d5217bbe12b"
  },
  {
    "url": "assets/js/70.4c94d099.js",
    "revision": "80974da99dcd5e915c959fd84b1d2fe4"
  },
  {
    "url": "assets/js/71.5763a52a.js",
    "revision": "7e9a0aef9da26c800c5fbf1d0ef4ce9f"
  },
  {
    "url": "assets/js/72.b4f3e737.js",
    "revision": "42feef40da61ee6de1f12f5a873b3f5a"
  },
  {
    "url": "assets/js/73.4d9c207c.js",
    "revision": "01760c4570bc3b83b99641d7e822c309"
  },
  {
    "url": "assets/js/74.9226e23b.js",
    "revision": "7df66f68034562e4d227663dde37245f"
  },
  {
    "url": "assets/js/8.b2add6fc.js",
    "revision": "a533aea79b7cf65f5b3ae657088eb27c"
  },
  {
    "url": "assets/js/9.54540e11.js",
    "revision": "b8c9095d2a0b8a1f15d67aa8d8c47c1a"
  },
  {
    "url": "assets/js/app.634437c7.js",
    "revision": "f0956d1f540ac9d1b331019329117f17"
  },
  {
    "url": "assets/js/vendors~docsearch.df9cd620.js",
    "revision": "dcfbd59dc9f0d25d57276e4960df1782"
  },
  {
    "url": "assets/js/vendors~flowchart.2ca4cbd6.js",
    "revision": "0e7d87fb525cbac443c6afe842524ce3"
  },
  {
    "url": "categories/index.html",
    "revision": "58e35b9b1c7e9517ea1f57cee8a70fbe"
  },
  {
    "url": "index.html",
    "revision": "9bb693b6de0228e747a62e9854576e07"
  },
  {
    "url": "tag/index.html",
    "revision": "78aea2c401aaf413658a776a1fb4758d"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc2dec1b8b249cc7801442b17daf6146"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "7ff3f45f595d717a27241e6f99b1c32a"
  },
  {
    "url": "views/api/summary.html",
    "revision": "fc8de95ce88bf132e19c94f1518c2e5d"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "bffc9cfb943efa388c523c17e90a62d0"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "3093ea2246ac982dd5e6a08be245c765"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "66825b08c2c43fb4046907e5033c534a"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "06bf9a13262387f7cb26c0d2dd2cedc7"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "f29af01f3b654f8dfae1e1066f95f747"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "668d93ec076f6102f96eb1c7a3d822a6"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "157ca4f4718e71eedc519a385b59b937"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "3da5fa0d8b867ee880517e8636295ba4"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "db6d1a8b6a7ca14f17fc5442b7a2c03c"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "0a0577c1c01c07113e9a454b32511360"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "ae66b6fa2dc0f5dd540050409dc005e2"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "1f95e023eb800f33acc20288d27d2e63"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "f7df4439ba70ffe4ddd4019a24f78e80"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "789ed7aa25aad8e78d156d07749ba604"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "ef77bb8226d30ffe4e1cd1eb5e1343db"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "f91016b922e001165401a7280fa6b7b7"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "ba29e493a3ceac96273d723d25626756"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "104b1d90e077ee2172bba5fa575792f0"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "35e3af50ed6b265b58bae42d99db8cca"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "5561c3995c634e3651b05e18f12c5583"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "bd3faf80604989a9b7e1882213487557"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "82e7906b6174363ed1a148d5d4be9fe0"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "adfb75e554f298b8a78bd912e8bcec9e"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "8b1094392fc5b5eb8de591370cea17cd"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "e6bb90ef5d479359a295041fcd31af19"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "d9cbba5296d0e43e3174b08eb743b6ee"
  },
  {
    "url": "views/product/_sidebar.html",
    "revision": "ef34830b8bcb3c6fbabf5e49c492b15b"
  },
  {
    "url": "views/product/osg/eposg.html",
    "revision": "33be0d8c8b08ad1423dbdd1be3511635"
  },
  {
    "url": "views/product/oss/gridFS.html",
    "revision": "f7a0a812643865c1dbcb55e578e88bf5"
  },
  {
    "url": "views/product/oss/index.html",
    "revision": "fd854858df71353e676e3acaaf2edd0a"
  },
  {
    "url": "views/product/oss/interfaces.html",
    "revision": "287ad0848af454cc0e10674ebb5d4497"
  },
  {
    "url": "views/product/oss/localfile.html",
    "revision": "0233b032ee1efa75fad7d519af4601ee"
  },
  {
    "url": "views/product/oss/minio.html",
    "revision": "cd12b613ac0227ae50ea4732d12de837"
  },
  {
    "url": "views/product/oss/s3.html",
    "revision": "a8594d40d05b4554e2a965d91879ba3b"
  },
  {
    "url": "views/product/workflow/dashboard.html",
    "revision": "569ff157e21d706774891d8a87ebbd0c"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "09d3fdab6c4026445bcb1d9ffb7ad340"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "c12eb99125903589f8bbe53801c0bac3"
  },
  {
    "url": "views/starter/index.html",
    "revision": "841b74097284b2e013806e472c0d4b74"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "d98f41c1384d9a33c6d3191bbc8c4d96"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "7d425ecacb4325555015d44bf89112c7"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "829ab2933c815d74402a5ec8487e09d2"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "8be0e192244e29df7f8a30cf5781d924"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "3beace751662ead9c5cc2088907fd3e8"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "a7a866de08cd45f939c41c8076e8da9e"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "48498e08a5eb1147566eef1c7f0ceabc"
  },
  {
    "url": "views/support/faq.html",
    "revision": "d87f847d019216d800fc928e40c736dc"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "5f706518fd279911f1862eddf33dce31"
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
