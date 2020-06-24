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
    "revision": "009a958ba12a83ec5bbb799a120eed14"
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
    "url": "assets/js/70.f7c0be6c.js",
    "revision": "f9e8e5f655630ecb0ebe1fce4f5eecb0"
  },
  {
    "url": "assets/js/71.ef6b2e3b.js",
    "revision": "74f9bc61e68e72b6ba296dfa269256b9"
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
    "url": "assets/js/app.86b68fb2.js",
    "revision": "85aeae97f8b7f7b3ac19ddc7633bd580"
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
    "revision": "53ecb485947e0a3e990fe98b772e33e5"
  },
  {
    "url": "index.html",
    "revision": "7458d6318d1f44df819f698c0e9984d5"
  },
  {
    "url": "tag/index.html",
    "revision": "4686877d36164b3cbaf7874ba8adf65c"
  },
  {
    "url": "timeline/index.html",
    "revision": "80c649f9784d30c4fcb96283adf6ec11"
  },
  {
    "url": "views/api/_sidebar.html",
    "revision": "3ef1456f33b790272ce49d46001746f1"
  },
  {
    "url": "views/api/summary.html",
    "revision": "27de7950a74341a8704a4f19f8f36af0"
  },
  {
    "url": "views/api/system/addDepartment.html",
    "revision": "34f9a87e794f2889a6d40c909c4d31c2"
  },
  {
    "url": "views/api/system/addOprLog.html",
    "revision": "fd1c3107bb1f8e4002c315d176e2c4f1"
  },
  {
    "url": "views/api/system/addUser.html",
    "revision": "4659f296bb81340d9e606327a672d7af"
  },
  {
    "url": "views/api/system/addUserVisitLogs.html",
    "revision": "e7995c3562c7669dbcd8b6ca75581089"
  },
  {
    "url": "views/api/system/apilist.html",
    "revision": "ff11a480fd51523823f7220820b3dc4c"
  },
  {
    "url": "views/api/system/client.html",
    "revision": "b57a29d0ecad8b20925fa1a1bca01174"
  },
  {
    "url": "views/api/system/deleteMessage.html",
    "revision": "2b5cf4b90a1fba7bc3ba20c754c34798"
  },
  {
    "url": "views/api/system/getDepartment.html",
    "revision": "17e694a71f66fbd060f58e7d2c3e16fe"
  },
  {
    "url": "views/api/system/getMessage.html",
    "revision": "6537f2cf36ff312b420d7d3110833fe6"
  },
  {
    "url": "views/api/system/getRoleInfo.html",
    "revision": "78220f0fe5da2bab3ebf5a527fe1304c"
  },
  {
    "url": "views/api/system/getSysParam.html",
    "revision": "0b6b827293acd850e38ee115a77053d2"
  },
  {
    "url": "views/api/system/getUserInfo.html",
    "revision": "d6f22abc9c73c0064f5a60191cd38eb1"
  },
  {
    "url": "views/api/system/queryDepts.html",
    "revision": "019c1d9fb4232f161a28f44bf4d686bd"
  },
  {
    "url": "views/api/system/queryDictionaries.html",
    "revision": "e0931d5a1151c8a69e95cad2eec4f96a"
  },
  {
    "url": "views/api/system/queryListDictionaries.html",
    "revision": "edf732864e743781ae7b1e1ea406f357"
  },
  {
    "url": "views/api/system/queryMessages.html",
    "revision": "0d9b63ce19ba91c8a2a6a390ae57e68a"
  },
  {
    "url": "views/api/system/queryroles.html",
    "revision": "82aeadc491eb4c952efa5278b494db5e"
  },
  {
    "url": "views/api/system/queryUserApplications.html",
    "revision": "0840234a5ba4dd30eded4377bdbffbd6"
  },
  {
    "url": "views/api/system/queryUserMoudles.html",
    "revision": "4b4dfb0e063d46b2fdd22d611717ac80"
  },
  {
    "url": "views/api/system/queryUserPermissions.html",
    "revision": "1061925e2289ca46e10d31407b065c9f"
  },
  {
    "url": "views/api/system/queryUsers.html",
    "revision": "b663b2979ae0a2dca85c9da9c20e6b62"
  },
  {
    "url": "views/api/system/sendMessage.html",
    "revision": "6e242f58651498d425b25f21232e1ce1"
  },
  {
    "url": "views/api/system/setMsgStatus.html",
    "revision": "295edb53e4fd8d71771643be9dd9dd82"
  },
  {
    "url": "views/api/system/updateDepartment.html",
    "revision": "4223c0e9338d88167fce18c688b9606d"
  },
  {
    "url": "views/api/system/updatePwd.html",
    "revision": "b6dd09cb9718482a087b63d8d34fc5d8"
  },
  {
    "url": "views/api/system/updateUser.html",
    "revision": "ad70ba72852bb662290fc57413125e57"
  },
  {
    "url": "views/devops/docker/images/confluence.html",
    "revision": "b2148e9dcacf2239f59e8c84ea68b23e"
  },
  {
    "url": "views/devops/docker/images/minio.html",
    "revision": "241bed7cd9af7181bb619b7bb034c7e0"
  },
  {
    "url": "views/devops/docker/index.html",
    "revision": "05cb6d2501a6b984ca0646a1d9cdd045"
  },
  {
    "url": "views/devops/linux/index.html",
    "revision": "18bec52eb402ad600dbc9af3c0d4edb0"
  },
  {
    "url": "views/devops/linux/software/font.html",
    "revision": "7f6a2ea72c4509e268a09656f1f25312"
  },
  {
    "url": "views/releasenotes/dashboard.html",
    "revision": "c722446ef504331c5c202fa469353718"
  },
  {
    "url": "views/starter/_sidebar.html",
    "revision": "d9bc47a4896db4336dac3c8fa56deb1c"
  },
  {
    "url": "views/starter/index.html",
    "revision": "6d58080937f1168fad8f6de4da882bb5"
  },
  {
    "url": "views/starter/introduction.html",
    "revision": "9a82bc8c96f0fbbe39e52a3c769b6b56"
  },
  {
    "url": "views/starter/quickstart.html",
    "revision": "fef9e7c338ed3e43f664d7dd820a41fd"
  },
  {
    "url": "views/subject/security/_sidebar.html",
    "revision": "d625829b9cf50ac575ec9db06157b9a6"
  },
  {
    "url": "views/subject/security/dashboard.html",
    "revision": "ba5f022aa156650f70c32b3e12196e52"
  },
  {
    "url": "views/subject/security/SQL注入.html",
    "revision": "02f04bb5743a160b08a86e6bef3f1732"
  },
  {
    "url": "views/subject/security/XSS.html",
    "revision": "67a5abbef3f72a61d9d0a6b7dfc05f9b"
  },
  {
    "url": "views/subject/standard/dashboard.html",
    "revision": "a6cc47f2914cb372b8cace8eea0d64d3"
  },
  {
    "url": "views/support/faq.html",
    "revision": "25367ecb4cb15e5584e693da45dd0e4d"
  },
  {
    "url": "views/support/tools/dev.html",
    "revision": "b8d19e5b94019ac215b33f534953cc5f"
  },
  {
    "url": "views/web/nginx/nginxregex.html",
    "revision": "37d67903622bce37fc17e1aad7efbbb0"
  },
  {
    "url": "views/web/nginx/nginxrewrite.html",
    "revision": "05604cbe16a4b3e9c43b699a9cdde31a"
  },
  {
    "url": "views/web/nginx/redirectconf.html",
    "revision": "56b92e4abc76b46d1ab70def51e68746"
  },
  {
    "url": "views/web/shiro/index.html",
    "revision": "7fea51db31e605d720c5a5579921da76"
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
