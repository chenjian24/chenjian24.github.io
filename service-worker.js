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
    "revision": "500da929347a1f9b195866c3267a46cc"
  },
  {
    "url": "assets/css/0.styles.f7694d4b.css",
    "revision": "9759b0ff1cbc9e57aa52e1403dcd7686"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.b59e2fdd.js",
    "revision": "9b9760192b95d7c3432bd3d815f38e65"
  },
  {
    "url": "assets/js/10.61708414.js",
    "revision": "35424b2c5d8f2e4ab97a694b2f03cff1"
  },
  {
    "url": "assets/js/11.d88bbdde.js",
    "revision": "a49c613099ae8283c9647798ffcde2b2"
  },
  {
    "url": "assets/js/12.57ec73ce.js",
    "revision": "9832321b1b334f7fd271958f79fe0c94"
  },
  {
    "url": "assets/js/13.2cbdaabb.js",
    "revision": "ecaace07d0424e2695cef6f128a57fc1"
  },
  {
    "url": "assets/js/14.b64810d1.js",
    "revision": "714e2332270baa130374598464ddc984"
  },
  {
    "url": "assets/js/15.2c13cb49.js",
    "revision": "7a0dd237a26aef5adec77887bf7328f8"
  },
  {
    "url": "assets/js/16.75904def.js",
    "revision": "7fc8b67a2e73d49bbf1270b3bc793b7b"
  },
  {
    "url": "assets/js/17.e4a124e1.js",
    "revision": "c057d404e81e8c06fe7e5d75f86b7548"
  },
  {
    "url": "assets/js/18.4ba8241e.js",
    "revision": "ba16320a2b2db4ba264fa05678868360"
  },
  {
    "url": "assets/js/19.32058ede.js",
    "revision": "706f7597730bcdc812b9c02e12570e12"
  },
  {
    "url": "assets/js/2.587ffca3.js",
    "revision": "a16ad02b65e696d7a4efe919f48978fc"
  },
  {
    "url": "assets/js/20.5dfe9b28.js",
    "revision": "3d4a9a7e9000c8ec0cfdd6ce5b67d084"
  },
  {
    "url": "assets/js/21.40030b87.js",
    "revision": "6861e011b5f10e00790bbabfc1696e83"
  },
  {
    "url": "assets/js/22.838dfbeb.js",
    "revision": "735ded832143ef5b1b7451905c171f26"
  },
  {
    "url": "assets/js/23.7c5a3d56.js",
    "revision": "560e489e560347c4c1ff450ce1c16ea4"
  },
  {
    "url": "assets/js/24.ab1708e5.js",
    "revision": "186d346e3e6e603ece27e1456dec785a"
  },
  {
    "url": "assets/js/25.68b06540.js",
    "revision": "1508f70b4feec61145dc6b18a91ce112"
  },
  {
    "url": "assets/js/26.50eafb15.js",
    "revision": "664ea41d538e9582d1ef2a7eba000f40"
  },
  {
    "url": "assets/js/27.c1d669f1.js",
    "revision": "88a48c3973bc67bb429de53bf185a4f3"
  },
  {
    "url": "assets/js/28.df95d972.js",
    "revision": "2c5e7ed7dadb0b205da19f6cfa2b4d47"
  },
  {
    "url": "assets/js/29.2aa64370.js",
    "revision": "741f7e6ab261a50a7a0d6a8d41dbe542"
  },
  {
    "url": "assets/js/30.270b7ae6.js",
    "revision": "93e55860610dabd7234d4c5a2981f967"
  },
  {
    "url": "assets/js/31.584d96a2.js",
    "revision": "0b4d285f72a352ce5358272d7bec8b5b"
  },
  {
    "url": "assets/js/32.80addb2a.js",
    "revision": "8bad4ba51af35aeec8af82700032f515"
  },
  {
    "url": "assets/js/33.b42babcc.js",
    "revision": "61c308a2d7bf4ee9a59a7c46baf24b2a"
  },
  {
    "url": "assets/js/34.678cd400.js",
    "revision": "813686a9ae876d18ba503e6249c89867"
  },
  {
    "url": "assets/js/35.6fbae3e9.js",
    "revision": "4efccb3f2da2c849b8e7b25302d6011e"
  },
  {
    "url": "assets/js/36.b055d5c2.js",
    "revision": "e029cab8bc02d21cfa70ec730c954afe"
  },
  {
    "url": "assets/js/37.18a40dbe.js",
    "revision": "5003f97daefb458495b64ddb354381e7"
  },
  {
    "url": "assets/js/38.0b0feb53.js",
    "revision": "b324c8adf3a50f6bf762c345ba59b39d"
  },
  {
    "url": "assets/js/39.bd7cea75.js",
    "revision": "bf94a005d959ba025ce4c22a0f4a78e7"
  },
  {
    "url": "assets/js/40.fd051c16.js",
    "revision": "09c8740a3412708ac0a898667d850728"
  },
  {
    "url": "assets/js/41.578dfca8.js",
    "revision": "5ff699166e77d22b47f4b3485ad94d78"
  },
  {
    "url": "assets/js/42.fc1c3b50.js",
    "revision": "0c07c309d3346edd1834e615944add32"
  },
  {
    "url": "assets/js/43.64760e62.js",
    "revision": "f3d4af5b474d42872ab4fd921e219ece"
  },
  {
    "url": "assets/js/44.3a9e54da.js",
    "revision": "a8931950a15e62216e62e16cc33674c1"
  },
  {
    "url": "assets/js/45.b436b13c.js",
    "revision": "44c54213e7dfd176da3669661a60f221"
  },
  {
    "url": "assets/js/46.fee36118.js",
    "revision": "1de892f8490543ffeed774bdae3b603c"
  },
  {
    "url": "assets/js/47.cffacccb.js",
    "revision": "7c369308bc6e90674e7618e639eb84fd"
  },
  {
    "url": "assets/js/48.ce9d2860.js",
    "revision": "cd5e8c81214ed07d4a88bad8aca26642"
  },
  {
    "url": "assets/js/49.894387bc.js",
    "revision": "047be98dda5fbb55dc1a74165489ec9a"
  },
  {
    "url": "assets/js/50.9f58760c.js",
    "revision": "914800d352395c477407027d61b8a3cb"
  },
  {
    "url": "assets/js/51.857a80a8.js",
    "revision": "c704d55dc5212def1d9b1b7915a37705"
  },
  {
    "url": "assets/js/52.0f1bfa31.js",
    "revision": "94e616c1c86591df7c28a876290f7149"
  },
  {
    "url": "assets/js/53.ed80b81d.js",
    "revision": "338cd86f334ef1a07a7107739203dd81"
  },
  {
    "url": "assets/js/54.8b93cec8.js",
    "revision": "074b20c6c21fd98d2700a8b3e10d0831"
  },
  {
    "url": "assets/js/55.4204bee8.js",
    "revision": "f01396682d302b29846d6247277cb2ad"
  },
  {
    "url": "assets/js/56.630c92f3.js",
    "revision": "899e9392c796308a4479f0adf30482ec"
  },
  {
    "url": "assets/js/57.f570a939.js",
    "revision": "8e5c8aad09d31227fc294f957287fa48"
  },
  {
    "url": "assets/js/58.aa4338e7.js",
    "revision": "7f0b6079049d92c43fb2c2cb51fcb28c"
  },
  {
    "url": "assets/js/59.ddb10beb.js",
    "revision": "77243c02df3db01189100b5f595fa17c"
  },
  {
    "url": "assets/js/6.05f02bea.js",
    "revision": "7a547b96333694fff64801ab3270128d"
  },
  {
    "url": "assets/js/60.dda7b2ef.js",
    "revision": "47c46fe138c814ed8de1968d839f7360"
  },
  {
    "url": "assets/js/61.dd78e5c5.js",
    "revision": "5e99725ac9e592a0f77dc07fb57c9093"
  },
  {
    "url": "assets/js/62.24ff3f6a.js",
    "revision": "9364db72951473ce86f0d89f7c5ec63d"
  },
  {
    "url": "assets/js/63.fc923921.js",
    "revision": "b9f38b05d1a9f7ec0c903c116d5e6a1a"
  },
  {
    "url": "assets/js/64.c2fec895.js",
    "revision": "41420165ed542fc80b5e73d6cfaaab14"
  },
  {
    "url": "assets/js/65.a918de2c.js",
    "revision": "3315cfaf575a0a1084acb0d7695fa687"
  },
  {
    "url": "assets/js/66.e765e7b6.js",
    "revision": "006d0d0e44fd97354812921ab9344cf8"
  },
  {
    "url": "assets/js/67.1cca7c26.js",
    "revision": "e251c114927d9633258c65c858b77d27"
  },
  {
    "url": "assets/js/68.1c17c6ae.js",
    "revision": "22df2d54b3320ddc0895221f83bfe305"
  },
  {
    "url": "assets/js/69.966fa2c2.js",
    "revision": "c60d5338c82633ae3979eb3e79b86fa3"
  },
  {
    "url": "assets/js/7.4b4da593.js",
    "revision": "5735df3d652e52c64487e22446caafdc"
  },
  {
    "url": "assets/js/70.6d5d6fa5.js",
    "revision": "d1321afc3c38491d5a6cca9311a6ade8"
  },
  {
    "url": "assets/js/71.aefd58da.js",
    "revision": "d5b1a14595f86afede6c383cfe20d907"
  },
  {
    "url": "assets/js/72.29203a02.js",
    "revision": "c49071910d0d116b1c9be186d7a26510"
  },
  {
    "url": "assets/js/73.971f91f9.js",
    "revision": "203291dbd198bea11d96e38eab34e9fa"
  },
  {
    "url": "assets/js/74.2584ca1d.js",
    "revision": "5f349175dc3d61d24f7e64e2091a5aee"
  },
  {
    "url": "assets/js/8.fa272de1.js",
    "revision": "5cd40b14076d263f87b366da9ffe51a2"
  },
  {
    "url": "assets/js/9.80310125.js",
    "revision": "6fa616eb90c497e03de8728125cf1b53"
  },
  {
    "url": "assets/js/app.63c7e403.js",
    "revision": "1400e0e1bd2a24f2c5a345fc13faba2e"
  },
  {
    "url": "assets/js/vendors~docsearch.f78ba45e.js",
    "revision": "87c0f57e065a036f6e11928fb01ba642"
  },
  {
    "url": "assets/js/vendors~flowchart.f4ec447b.js",
    "revision": "6f027b41b3f5ce732057e608c360fc93"
  },
  {
    "url": "categories/index.html",
    "revision": "4300ce1af76ef220cc34c10f543e7f7d"
  },
  {
    "url": "index.html",
    "revision": "3ef0effb20812c0b4eb8a858a0e66b39"
  },
  {
    "url": "tag/index.html",
    "revision": "f8e7e754c1b04615866c6dea395615ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "a635d38c7b2621b433745f4087944d40"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "e2a78db15311f74c8deb9c5c01af7383"
  },
  {
    "url": "views/api/summary.html",
    "revision": "c09e6bf571d3a473d2ba7e1e450bc9df"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "0eef2e99a9050ff64e5efc544bf85164"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "00c09fea01373a54211173d5689b0bb7"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "3551474a93fdc6701513042f4432eead"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "566d1396e07d33f2811de7b7e6c6376c"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "41d40967b82e3a7f4ade56f059ef1519"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "f629cf4c5322ff4bf416bdfc905d4807"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "5bf540361f04fea56a223fb04fba2faa"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "90d6dd3cca5c86cfe78e53ddb98b4ecd"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "2ef137575df1ce861e4883f4c503a5d1"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "3eec6e9de73c493b9a0c7fe9993770c0"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "9797ac214982a6b2f40ca8e8f86ed99a"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "a547b0248e0b994d939e5f0d6cc2cb22"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "d7b363c8947246f2dbbafc202f82cf1a"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "9be59dc4af124a51c43448948467d017"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "e765fce04502ed5a5b474bbe0150eb96"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "d900ef44ce853c9b7ebf570da79d26e7"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "3d5ecdd755fd8b68c997a39d9f3af1b9"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "b9da3ae9e86c513811d0d8203904edcf"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "8b348ea1f7aee17716482d3a55c743e9"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "ed6c1b097e3876159e43ec16b12ee5f7"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "fa0246f921454b61bf45b6e2196f75d2"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "63417bd12cf3f6bb484666c5524c5781"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "a9f7dccea467af6e1df6bdf9baa745be"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "54cad8020085faefcfee67cea83cc0af"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "fee9e7469754d323425982d29bb1ebdf"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "81215d4eefdc629740135cc7fa549f62"
  },
  {
    "url": "views/devops/docker/images/confluence.html",
    "revision": "833f1ff4ef01b99cf7fc200a0162692c"
  },
  {
    "url": "views/devops/docker/images/minio.html",
    "revision": "474159f1638aad91a17a3439fd287d48"
  },
  {
    "url": "views/devops/docker/index.html",
    "revision": "9d42b9dcb52f92bb90ec06dc5d1c45c9"
  },
  {
    "url": "views/devops/linux/index.html",
    "revision": "f35f4b8743911ea721de4699e0e9c2a5"
  },
  {
    "url": "views/devops/linux/software/font.html",
    "revision": "a36587e4004eaa0c366245cbaf6cb12b"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "0db515161309949b8e51c8e1313a9abb"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "252e029ac0e5893e086aa3e50df07ffe"
  },
  {
    "url": "views/starter/index.html",
    "revision": "e375d9fbeffc834a39a8a8620129666d"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "31da668f5b8fb1cb2d5512c0a3541a58"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "8216e56f23b383fd8ef4bd09117416da"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "59173563c6bf533cc3048814441b89a3"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "86974c5974914a9d735c3e207a0cfa1b"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "5453d140d905dd629e4f2ad46e5b2acb"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "684b3bb877187da21f19d38af6200cb2"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "f26e9a1a1265fa58cba5b08bae6a2600"
  },
  {
    "url": "views/support/faq.html",
    "revision": "748dfd998a1da402e814245d04ab5238"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "67db7fcab6a55d08168b6ddcef1a752f"
  },
  {
    "url": "views/web/nginx/nginxregex.html",
    "revision": "1ae90046e8be0a34a4ab623659ecbb11"
  },
  {
    "url": "views/web/nginx/nginxrewrite.html",
    "revision": "a520d8a7dd7f9e24324dd0635c59d948"
  },
  {
    "url": "views/web/nginx/redirectconf.html",
    "revision": "1419b824c2cf4e2fe48b751ace7d1490"
  },
  {
    "url": "views/web/shiro/index.html",
    "revision": "db161abf733c8b77f7b7cf12fc7d9831"
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
