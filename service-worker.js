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
    "revision": "8550065f1867b64552aefb79479fdce3"
  },
  {
    "url": "assets/css/0.styles.8c46daec.css",
    "revision": "1a839e94f78484750db3b5faadb3e2ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7840874b.js",
    "revision": "25985270293dd57e5e560c7544461bf2"
  },
  {
    "url": "assets/js/100.121c62f5.js",
    "revision": "6967b4f519c3f8d51f34b52818690177"
  },
  {
    "url": "assets/js/101.dbbe1f43.js",
    "revision": "31f885cde21dd72184977a1d3a47d613"
  },
  {
    "url": "assets/js/102.b5a07e1d.js",
    "revision": "f8b6f93d56f4b7cd6822ff655efdb744"
  },
  {
    "url": "assets/js/103.bd47218c.js",
    "revision": "16b5122608f3d568d3cb06106048ba18"
  },
  {
    "url": "assets/js/104.64230d4e.js",
    "revision": "a189238d4ffcd3b35ccd078e4c11fc9d"
  },
  {
    "url": "assets/js/105.660f4777.js",
    "revision": "0071267bbbeaa389edc4507a465122d4"
  },
  {
    "url": "assets/js/106.067d4e80.js",
    "revision": "352994d855c0212aa5fe4de27f30cdeb"
  },
  {
    "url": "assets/js/107.914e5858.js",
    "revision": "b9883265ae5c2451434b5343aa1a1aff"
  },
  {
    "url": "assets/js/108.c9772201.js",
    "revision": "e852b407a2dceaddc60fad807230a630"
  },
  {
    "url": "assets/js/109.aee93860.js",
    "revision": "1fb407d49a4f90e0af566ee8bbeaeb88"
  },
  {
    "url": "assets/js/11.ac257d6e.js",
    "revision": "4f45513070d7efdea4f8848dda22d0e9"
  },
  {
    "url": "assets/js/110.e8e5b0ab.js",
    "revision": "2d7685e09bbebf737e04cf38bf46d1f7"
  },
  {
    "url": "assets/js/111.4ceea09b.js",
    "revision": "563f2384ed88e2594a0fe3baa7157d46"
  },
  {
    "url": "assets/js/112.e663d426.js",
    "revision": "9e64f2fb4ba20cacd3e3fc399af458e8"
  },
  {
    "url": "assets/js/113.2dfcb751.js",
    "revision": "556ae9486a0b305e1e3eedd906b2526a"
  },
  {
    "url": "assets/js/114.7a944add.js",
    "revision": "37f3445fc90e8093ba563c4f37996af7"
  },
  {
    "url": "assets/js/115.75f2b807.js",
    "revision": "80dc847d647e1f64068544f3d8e54050"
  },
  {
    "url": "assets/js/116.b82c0bfb.js",
    "revision": "25e1b42225c924593ab61fd952c97478"
  },
  {
    "url": "assets/js/117.63a95674.js",
    "revision": "aed1db67c74e81e65fa44a198587eca8"
  },
  {
    "url": "assets/js/118.534a2a0f.js",
    "revision": "ae66aabcab04024815f2bc1b66df4fdc"
  },
  {
    "url": "assets/js/119.ba157d6a.js",
    "revision": "965610d98ce913965bf9c3cfaefa62c2"
  },
  {
    "url": "assets/js/12.a6e07cb1.js",
    "revision": "4757000bf80676ece6be7e115418b888"
  },
  {
    "url": "assets/js/120.239ffe8b.js",
    "revision": "08d88bb2b9efefd3833035e1154a115a"
  },
  {
    "url": "assets/js/121.cfd680d6.js",
    "revision": "d458e76521027f478b3e1e5a1460f315"
  },
  {
    "url": "assets/js/122.3766e467.js",
    "revision": "0fdd90932e6faa53cc746d67a556fd6c"
  },
  {
    "url": "assets/js/123.82549f32.js",
    "revision": "fc933396027fe0fe1517ac88d300147f"
  },
  {
    "url": "assets/js/124.bb56d4d9.js",
    "revision": "4e7a8ca5033dbd9cbecb614da643d9e4"
  },
  {
    "url": "assets/js/125.221d2c51.js",
    "revision": "632bb3f6dc56327b51e8e973142542ee"
  },
  {
    "url": "assets/js/126.8ca8517b.js",
    "revision": "a8d78fb54ff77f0d9c197c3339d8b565"
  },
  {
    "url": "assets/js/127.1408c292.js",
    "revision": "58ed5750a96a0d26a045235984afe10b"
  },
  {
    "url": "assets/js/128.e06858ea.js",
    "revision": "e3daea03267104da0ebca65525ab5641"
  },
  {
    "url": "assets/js/129.b9834086.js",
    "revision": "68e9534b74bd75c06bb9fb92bf55965c"
  },
  {
    "url": "assets/js/13.a8c6b11b.js",
    "revision": "5fb5f113d3d695eb2fd5d7d4629bb40a"
  },
  {
    "url": "assets/js/130.a1c5db71.js",
    "revision": "22e28c600e80a03ae9c2739943de1425"
  },
  {
    "url": "assets/js/131.915912b3.js",
    "revision": "82ec7617b46fecd498cb5a7318836bfc"
  },
  {
    "url": "assets/js/132.5b13e922.js",
    "revision": "ef9dd51c7306d5c3e9875de5acdc01a7"
  },
  {
    "url": "assets/js/133.ee33c01e.js",
    "revision": "0774233c63f4dcacdc7b714ad100e61b"
  },
  {
    "url": "assets/js/134.5b9ea12b.js",
    "revision": "425fb7ace5fe951b06ab445cd92f5091"
  },
  {
    "url": "assets/js/135.521389b9.js",
    "revision": "b32eb3fa51b65de95e7874d8831042b2"
  },
  {
    "url": "assets/js/136.e403e841.js",
    "revision": "692f71de00933c62549cf2e6f33984f0"
  },
  {
    "url": "assets/js/137.5103108e.js",
    "revision": "de04de58de4b8f717e0cda8b296e842d"
  },
  {
    "url": "assets/js/138.55b9107b.js",
    "revision": "69e9a65b038d5b9afbf8b1f8a9568064"
  },
  {
    "url": "assets/js/139.5d1746c5.js",
    "revision": "ba5c4bab9ea1e439e289ddec6ea2b1f0"
  },
  {
    "url": "assets/js/14.bb39005e.js",
    "revision": "30235f4a073dcda87932cfcbba9e7575"
  },
  {
    "url": "assets/js/140.8742e3eb.js",
    "revision": "6d2d0921cbd92e460a8391387c546f2a"
  },
  {
    "url": "assets/js/141.5661ec9a.js",
    "revision": "704d965c99d3f639ceaa5018eb5a5939"
  },
  {
    "url": "assets/js/142.44871095.js",
    "revision": "70cafc00d431a19de99a3589812be147"
  },
  {
    "url": "assets/js/143.3ea75964.js",
    "revision": "77d30450e0924639b577caae4c73f6b6"
  },
  {
    "url": "assets/js/144.96969688.js",
    "revision": "025c54a910798e5dd7b615ba5ecbf57f"
  },
  {
    "url": "assets/js/145.0d23ebd5.js",
    "revision": "015e05e1cf69218be17c7db96f80cc8f"
  },
  {
    "url": "assets/js/146.a0ddc91e.js",
    "revision": "2263cc170dabf4851a53febea892a195"
  },
  {
    "url": "assets/js/147.60f1e4dd.js",
    "revision": "0b7a1beb40a99adea7dacc70d73b0119"
  },
  {
    "url": "assets/js/148.15dd1885.js",
    "revision": "b72bbed27bb73e82560e451b000d39d6"
  },
  {
    "url": "assets/js/149.38af1de0.js",
    "revision": "eed42dc99234ba17abb1d1808f6a6761"
  },
  {
    "url": "assets/js/15.7113ef47.js",
    "revision": "47838ae8f4651d8f8db89223eaa82bc5"
  },
  {
    "url": "assets/js/150.80fe0c27.js",
    "revision": "bee7312a833575580692a844b40a9bf0"
  },
  {
    "url": "assets/js/151.7d84e079.js",
    "revision": "c463561c77615a5f32778e348d1b7360"
  },
  {
    "url": "assets/js/152.7e2eba95.js",
    "revision": "7c34e8dda8bf710943e104641e5c94c8"
  },
  {
    "url": "assets/js/153.b98584ac.js",
    "revision": "abb2a14e659e6b8817d17eaccef420d0"
  },
  {
    "url": "assets/js/154.ba751953.js",
    "revision": "1ea7e45edc8d053742d15101553c21b5"
  },
  {
    "url": "assets/js/155.e56b983e.js",
    "revision": "2b3dc7f70eaeb8f35440f557bc71eadf"
  },
  {
    "url": "assets/js/156.3bd14e7b.js",
    "revision": "94c2e7b427602a488371aab77c60e465"
  },
  {
    "url": "assets/js/157.93bd8a8e.js",
    "revision": "3ff9520058f100c6e4f18dd8ae34ab8c"
  },
  {
    "url": "assets/js/158.eb78a787.js",
    "revision": "1b4acd49451e435f1ea4370358c8d3f4"
  },
  {
    "url": "assets/js/159.9d421dc2.js",
    "revision": "3b9d2230f5126f2d5e9b0e9ffdbd6cb4"
  },
  {
    "url": "assets/js/16.ac258be7.js",
    "revision": "fbfe40bce0236181ad3803f0bba4553b"
  },
  {
    "url": "assets/js/160.1eda4d88.js",
    "revision": "df3c8330bee58f25157f613604361185"
  },
  {
    "url": "assets/js/161.8368b364.js",
    "revision": "70bf4abf71d1a702bc2ff0bf7d4f4dfd"
  },
  {
    "url": "assets/js/162.0ce0ed1a.js",
    "revision": "d25bef1a2e804fb8a9d7c4693c5a6936"
  },
  {
    "url": "assets/js/163.c87c5933.js",
    "revision": "72f51242ffe180146608c30dee383cc4"
  },
  {
    "url": "assets/js/164.6bd622cd.js",
    "revision": "5bc1303c08894e17a5a565986c8cafd5"
  },
  {
    "url": "assets/js/165.b857bbf6.js",
    "revision": "d278d535db11a1548235e29bfe3d3e13"
  },
  {
    "url": "assets/js/166.6c1a4f8e.js",
    "revision": "141210ede337c4feaf5aead03e5cd2f7"
  },
  {
    "url": "assets/js/167.3b31b961.js",
    "revision": "6c8feb14a0220ccb86f4cf014a47cc72"
  },
  {
    "url": "assets/js/168.fd5596bd.js",
    "revision": "af375d2575993d66ffa5a90c531e5665"
  },
  {
    "url": "assets/js/169.a9cde502.js",
    "revision": "16381f5f5c7c2ccf8fd8af1065023971"
  },
  {
    "url": "assets/js/17.8cc762de.js",
    "revision": "190d2f0f32619498f3c2c0c054d281a3"
  },
  {
    "url": "assets/js/170.757bae1e.js",
    "revision": "6e79a4ff4bc675c834ae081ccee794d6"
  },
  {
    "url": "assets/js/171.62a5026f.js",
    "revision": "4f95545c04673e83ddd9b506363216a2"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.485b4cdf.js",
    "revision": "86dbcb016e52af83bda10b44ef4eca19"
  },
  {
    "url": "assets/js/19.43a703c5.js",
    "revision": "5550640137fd8cfb655aca86c261417e"
  },
  {
    "url": "assets/js/2.e1e0c7d5.js",
    "revision": "0a0821711c19c3f33297f843b7d3a5a4"
  },
  {
    "url": "assets/js/20.2913a4af.js",
    "revision": "eb2905917f3fba7c072c220e440ae789"
  },
  {
    "url": "assets/js/21.8d68d911.js",
    "revision": "3a00dd5a2126aaecee35218a67a4b28d"
  },
  {
    "url": "assets/js/22.e05a1394.js",
    "revision": "2617e1c06c3b061420b107fb0371615a"
  },
  {
    "url": "assets/js/23.68e82a67.js",
    "revision": "6eaebac377f6b95cd754208d4d3b55a8"
  },
  {
    "url": "assets/js/24.41d656e2.js",
    "revision": "02f4a8da9bf7d7b6c7287396c006a0ee"
  },
  {
    "url": "assets/js/25.b97696f5.js",
    "revision": "40390b7e5125c8100934b20470498a80"
  },
  {
    "url": "assets/js/26.ba1bc8c7.js",
    "revision": "2a2c9b759b0873b11d849d83738b2f4e"
  },
  {
    "url": "assets/js/27.1ad7543a.js",
    "revision": "bd3249effec3d1a34d4577520d4c516d"
  },
  {
    "url": "assets/js/28.28dc36e8.js",
    "revision": "ba0165f1e4c3e8170a1dea6a7449f3c6"
  },
  {
    "url": "assets/js/29.d542a18d.js",
    "revision": "41d0858a525d16e72819892630650936"
  },
  {
    "url": "assets/js/3.facfa05b.js",
    "revision": "7f178ff83c54387e92a4b150217366e9"
  },
  {
    "url": "assets/js/30.5913ee80.js",
    "revision": "3af5d8ba12421c584ffb86a97ce4778e"
  },
  {
    "url": "assets/js/31.96c515bc.js",
    "revision": "ca296dac712a3ebf8d24ec0ead8bd90a"
  },
  {
    "url": "assets/js/32.832d2769.js",
    "revision": "fd8e5bd59a5e1511ca8ec4772423872f"
  },
  {
    "url": "assets/js/33.0b5f2b6c.js",
    "revision": "0b29f0701883789ce91766f72dfe8cbc"
  },
  {
    "url": "assets/js/34.f0a43b54.js",
    "revision": "10a764da0fe5b7a81eb85f217dc174c6"
  },
  {
    "url": "assets/js/35.393f5115.js",
    "revision": "38fd1f0d8a27ab9fa2ff4a39683fbaea"
  },
  {
    "url": "assets/js/36.6931f3d3.js",
    "revision": "58991f60ee4a5e7a152ad0ce2b074bbb"
  },
  {
    "url": "assets/js/37.3af59799.js",
    "revision": "8a180a8f07356f406026ef25f4c29be1"
  },
  {
    "url": "assets/js/38.187b03ec.js",
    "revision": "feed8f48896839fb93baaac1f678936a"
  },
  {
    "url": "assets/js/39.ef86e799.js",
    "revision": "40e56a33d86d7469262be478808c31e5"
  },
  {
    "url": "assets/js/4.2c2796bf.js",
    "revision": "a36fefe026dc7f65d42b067760d00e79"
  },
  {
    "url": "assets/js/40.cb569c3b.js",
    "revision": "599cd1de2838d82a8d577191f572a971"
  },
  {
    "url": "assets/js/41.6a2b99f8.js",
    "revision": "4c8b96a72b47c7875e30c30e8d008bf1"
  },
  {
    "url": "assets/js/42.687b56eb.js",
    "revision": "5bdb68e3d9c2043ee4b363317ea58760"
  },
  {
    "url": "assets/js/43.05284af3.js",
    "revision": "1547a125fcf55449f69463e039c2c304"
  },
  {
    "url": "assets/js/44.0b67307e.js",
    "revision": "c33a2664765ccfb743494c030a6dcff0"
  },
  {
    "url": "assets/js/45.7f6ef1f3.js",
    "revision": "74659d864543ea0ab8e0b70527a86fb1"
  },
  {
    "url": "assets/js/46.8249bf7e.js",
    "revision": "f1a51a0f0b35f279d8e21bae5cb3c3bf"
  },
  {
    "url": "assets/js/47.ec5f420e.js",
    "revision": "216c53e070e0b2853d7905c640dfc6ed"
  },
  {
    "url": "assets/js/48.d11a6c13.js",
    "revision": "438edf646305bb7680b3b2b1a8ba6df3"
  },
  {
    "url": "assets/js/49.e6449fe8.js",
    "revision": "5c163733e1a3f5a58c69e4e09e299ad0"
  },
  {
    "url": "assets/js/5.937ae87d.js",
    "revision": "2574ebcd0756ead4d864a97a7ead7328"
  },
  {
    "url": "assets/js/50.915ae3af.js",
    "revision": "3c7fab90f3eecae33f051a5be3d3c0f6"
  },
  {
    "url": "assets/js/51.f88017be.js",
    "revision": "85fddd30098cf76f5ff6092c51b7b8bb"
  },
  {
    "url": "assets/js/52.8c7dd5ea.js",
    "revision": "99dde6a9d466ff9a9e9c3c34063a3d35"
  },
  {
    "url": "assets/js/53.84b1b07f.js",
    "revision": "3f9a3838690e64e0adf68b9d8c0161ee"
  },
  {
    "url": "assets/js/54.45609db2.js",
    "revision": "ceab0df9ef2bb237ff847c4adc1a3db3"
  },
  {
    "url": "assets/js/55.36b96134.js",
    "revision": "96d18efeb7e9908d6132e8908bb71883"
  },
  {
    "url": "assets/js/56.ba0233c9.js",
    "revision": "96f70b737215ed03a49f160faa21b0f6"
  },
  {
    "url": "assets/js/57.4792fb8d.js",
    "revision": "256362c69c7a77fd00b8b804617da58e"
  },
  {
    "url": "assets/js/58.c787abec.js",
    "revision": "ad1b84b12b170b366f920b2946af8086"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.c085291d.js",
    "revision": "8fd2f43355787c4cc592097ce6a361a7"
  },
  {
    "url": "assets/js/60.2bcf90df.js",
    "revision": "377f1f41563f7cc7a0eef232ad035f74"
  },
  {
    "url": "assets/js/61.9de5ce4c.js",
    "revision": "98d0ff867ccc8cfbbc18885c6304a4b2"
  },
  {
    "url": "assets/js/62.6f5dbe75.js",
    "revision": "18da2e07f4776b0645a9511600b950e6"
  },
  {
    "url": "assets/js/63.4e662f41.js",
    "revision": "6037182c890586ca2f86329ad7657bba"
  },
  {
    "url": "assets/js/64.4befdf87.js",
    "revision": "a15c4ac32c59ad193eaaefb2dcdd6c36"
  },
  {
    "url": "assets/js/65.0df2e097.js",
    "revision": "8c689e05a6089d501e1b95faf691661b"
  },
  {
    "url": "assets/js/66.194207b7.js",
    "revision": "c34520e6fde0aac563dd62d39b5ac123"
  },
  {
    "url": "assets/js/67.2f017eb6.js",
    "revision": "ff0cbf9294451dcf1d2b261864b8d0ad"
  },
  {
    "url": "assets/js/68.d7c1c8c6.js",
    "revision": "e6a2b2901acb58ba627122c124464cf9"
  },
  {
    "url": "assets/js/69.0197aa54.js",
    "revision": "9fc4a3e5aa0ff5b07db01d7fe7505d3a"
  },
  {
    "url": "assets/js/7.33994ffb.js",
    "revision": "376b10dadbbe368ef8bc8be12cb9c49e"
  },
  {
    "url": "assets/js/70.c5bd7f06.js",
    "revision": "ecd5e2e6c56ad38e36933fc5c96e328a"
  },
  {
    "url": "assets/js/71.0bb79493.js",
    "revision": "1baeffc518e0ed49e12391047f449a29"
  },
  {
    "url": "assets/js/72.305e2f8e.js",
    "revision": "f91aa0641b8d3feeb16ba628b301a0bc"
  },
  {
    "url": "assets/js/73.cf049b79.js",
    "revision": "b0522fdbf1a7ba14cde7f18ecb0c8338"
  },
  {
    "url": "assets/js/74.e6a8dc79.js",
    "revision": "b9f3b7ec22aa95674cb41a156ce26d1d"
  },
  {
    "url": "assets/js/75.09c99a8b.js",
    "revision": "2cda7fe4ea278b597a4745bd89e0e9ef"
  },
  {
    "url": "assets/js/76.03391a48.js",
    "revision": "813d8ea601fc10b54c996aeddf5488f6"
  },
  {
    "url": "assets/js/77.b6b1f159.js",
    "revision": "aa82ad647ca3e7e74d81e90d6b06e523"
  },
  {
    "url": "assets/js/78.58186688.js",
    "revision": "3e443525aeb23e309ce7b5a812bfeb50"
  },
  {
    "url": "assets/js/79.052132cc.js",
    "revision": "d51dbb4b77e8e5a8647e3b589df2c683"
  },
  {
    "url": "assets/js/8.8e0ec08a.js",
    "revision": "53ad078feae05658d43760bfe730206c"
  },
  {
    "url": "assets/js/80.e020d0e4.js",
    "revision": "1636db6dc64055a8b076864771e91ffc"
  },
  {
    "url": "assets/js/81.16b25dd6.js",
    "revision": "240b73ed3dc7102583738abfc0653e2d"
  },
  {
    "url": "assets/js/82.75aab693.js",
    "revision": "6e79e644d243da410f632646e950f138"
  },
  {
    "url": "assets/js/83.b9667f0f.js",
    "revision": "185c615f803de2204e6755edfffa5944"
  },
  {
    "url": "assets/js/84.647ed736.js",
    "revision": "7d343630c78c7d0fc0b6b43771fb7d81"
  },
  {
    "url": "assets/js/85.42beef75.js",
    "revision": "bdbd2d1c57ce160f041134abdbff0f19"
  },
  {
    "url": "assets/js/86.71a0ec17.js",
    "revision": "be8b3b228d6bf2f49909298331d9588c"
  },
  {
    "url": "assets/js/87.bfe0afb3.js",
    "revision": "3cea51ad0b349b088c147f933a90cac3"
  },
  {
    "url": "assets/js/88.47b7669f.js",
    "revision": "6fb705b969c6f8e384d5c64102f99537"
  },
  {
    "url": "assets/js/89.728d0788.js",
    "revision": "ca2627a03b515bd975143c5f2d08701c"
  },
  {
    "url": "assets/js/9.34339a8e.js",
    "revision": "3fa549d8ef9a3d70037344584b5e5da0"
  },
  {
    "url": "assets/js/90.6d89e6aa.js",
    "revision": "5ed9ce4819cab7bd36896a7b350071cf"
  },
  {
    "url": "assets/js/91.6a344cf8.js",
    "revision": "03f1347a4e9478821d37c2bc26c0373a"
  },
  {
    "url": "assets/js/92.dfa3fa12.js",
    "revision": "aef76b8d8c65fd95a58efb40650fd1ba"
  },
  {
    "url": "assets/js/93.03d110a3.js",
    "revision": "9b40b9fea799ca816971523c543398de"
  },
  {
    "url": "assets/js/94.5fe424b6.js",
    "revision": "bd6c3cdcbe09acde9804b9691a37092d"
  },
  {
    "url": "assets/js/95.bceaf616.js",
    "revision": "544c3368baaa59e31456264dc168e994"
  },
  {
    "url": "assets/js/96.bd876d2a.js",
    "revision": "8a7219336cd5e4f80aeb12028eb14996"
  },
  {
    "url": "assets/js/97.2b033676.js",
    "revision": "47b8c3d3d16ba462828a35634e0a4d66"
  },
  {
    "url": "assets/js/98.eb9cfac4.js",
    "revision": "0228be8d865178ec68bc5699065d9d57"
  },
  {
    "url": "assets/js/99.d5daa6b0.js",
    "revision": "bfd16f02da9c9aa5d0dc8c6c2648cab8"
  },
  {
    "url": "assets/js/app.7b3741bb.js",
    "revision": "4122c57e049e03df10ae6ee070f2ab70"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "385fbd946275f10e1c5b93f37d4397d6"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "b624c1b260c51b6dc1a4d8a436a01677"
  },
  {
    "url": "guide/index.html",
    "revision": "eaaa9304ff7a5a4bc9850f7f4a3c4e70"
  },
  {
    "url": "index.html",
    "revision": "751ae27b28738f4a85d8278d97f64c25"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "17c81e18535a8f52e2e7519470423894"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "93dd08c0478260dd274befa303a57407"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "fc4bed1d71b86cdc9302d6b40beefcc9"
  },
  {
    "url": "notes/待整理.html",
    "revision": "adb40c8c4783df1e3b286da3f804f94c"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "b1d1491051688c3b41b36b83cbba4adc"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "5e5728a938e519686b7a5c2d57d5c1ce"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "9de9c07128f3634fd3411963dc31f92a"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "51bd5dac50f3d8124c33fba1828a4be1"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "cd18ca397354171d710026b086b708fe"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "813445c9927003b81255828c35485d0f"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "46ac22b41b5e631fc549dece6fa26bf1"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "a9d59c9d11200bb591b9f33c0d710170"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "d1631e37b75699d4d0d27fd70760ca22"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "36f3759e189c4f6ac102bd676c55bf98"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "faeebf7fc4977ca747756db31337f4aa"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "dfc0159ec903e584431834896eae54a0"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "5a5d0b0b0cd7365be9ae94319f94a6cd"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "59bbcd7ef0f7599ac8b16d1be0bf4990"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "1155d714e785f901bdef5c49899e2c0d"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "f888fc698cec34df0682f53d3f900de9"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "235f0e770abcb999f6b5e28679ed01c8"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "3fe688425b03e87bb38d12a58737bab1"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "5042bcd81a60bb62ef2ee4a3544c9c5f"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "77e4a7d0ec12f1bb3eb534ebeba57e38"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "7c5e1b8e5181a90d0bed5a6b8a19a348"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "b326ee45f41856f033b3a4776dd61a59"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "44694ae4b38742d7eaebbff0de6ebdc4"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "df45b8dec66c7f2710744389881197e8"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "6345a605d2dd0e620a9ef7c95df4cab3"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "a3d935245359f02aad809039bd783fa1"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "14b34e2265f2cd19a231a631a9d976d8"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "f54e5ec48943d3c20ad3f5f75c038aed"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "667b19502eb547e5f47e7ef1b327b8d5"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "8955b37f5fea0e6fcd4fb45e4b9859ed"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "03526e4aa53d67e0a0aed2bc007247dc"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "98fc13b8e06ab2189cf33e92a8810582"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "6033531ce3fc7502833273350ad0981e"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "7c07f4969e22b87c4507c07129c69af5"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "321185151aa3f177d8f4ab3ea9a3fb90"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "e10b16be2e29c11195844fc787d94dc1"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "dd3027410787d6ef41a7b1a4518dc066"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "4efe0319e96814677e92f9114fdda562"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "d3caccbfa0d8ee4fca2ddaae7d3fc276"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "a9c3ca7b0474ea11bf5686f877ce8d6f"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "bc1bf41ed4b5ee4c55276f071bba9da0"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "f616562b9a40736d0fbd7c4a40a59e25"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "21a069c304a45e9cbec09d236bec505f"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "c02350ee12c0419220a1237bde855849"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "c896c0cd909aef8a24931e547d2050d6"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "3c3d27f064675eeb322ecb5e76f4d016"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "e0b56d8179f54510ffdfd862c3b3038a"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "e2debcb50fc6cabd340bf7c49a17d222"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "ab7edec98391a4f86f6a9a365214da18"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "bc5e9bd2eb0a93c23c77ef22fb3156b2"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "a68cfdb8a1cb78ec04b8577f24e0cfb3"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "8e0f57baaf90bb2afc250c5105b33b5d"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "bae6b3b13e22b5068b56ec76fae9bcfc"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "55b36c2a63cc0757327d8b66e7c90a03"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "350c884ce89da0bc4071c14807dac8a4"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "02cf7b2ba893f1eb3f0319241bde51b7"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "90e9a92f7ee14ea9b312da76a81a30ed"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "fa7d263aa798a364812e8cdc75152c20"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "555cabea6aaac40f11cc11e4a169fed1"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "f2f5a4e3a2f1af5f94de2a846b61b0cb"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "3b9a14940533974376b8ee845267f877"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "8d7dcf84e005381f36908ba4aec3917d"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "db2edcfc2fae3c01ee81bfd6b7b6f5f1"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "a875c9666d569eab9b4f89adf5cc2772"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "a11fc20009559e7cf8b9a673916dba37"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "602eeffda87a7980889a9a359c1596c8"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "67d15fad81e30b5b6ebb3f67152ae1e9"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "cd7569ae176fd69fe4b34029e66848bc"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "2824371b05e061b5911e84db7e07d3aa"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "d1e95ce3c85ef309eda4c6ff9f3f4717"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "592abbe28e2b62afce080d35c3d1151f"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "9cd3b72e58d18295c776461dc885ce20"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "734e5c683cb8e005cdedd7b116951646"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "a47af869f91ad92fde2fce824d3fde5b"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "c1781391ea492e1fc4be8093cfe44b7d"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "1c17b597ffd3ba95e9f9e6323e675ae6"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "c61c1b91760a571efed8937366ad7413"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "20fec02254029f6e4ffeab007b197715"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "8b756ba29a0256bdebe2312acbc48ecf"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "dfb568a43acc8603920bae16feb16dc4"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "572a1756d67ee02c4ad8fcc0911b5b54"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "57bce6ffe9fa1dc4dc624331bf667494"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "4b1ef16cfad0c80a9c60c9940c006817"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "f19275996e23ece893f3897dd5c2808a"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "57d36cc6ce18bc8a329a5adce696de13"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "6d01460cb80ca9f8a6557dd80644aaca"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "c41493b207acd063406dd7d1cf6d6a11"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "ab8173c45956796cbed02bb689564191"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "7d4de5a1a40c1af110e8929d716e390c"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "aa7b1df1d899d9e962ffc87bd709917c"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "6040ed768db9b3952eb31d7f49d395e3"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "e65b4792b28649b032e5e07919a73cd5"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "bea5bafd0e47254005ca522104071721"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "7dca15b49627dd4966d99d7ba1ee751b"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "aa70f8e22d7282718429135865849886"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "8c7a6d75fa473587337a341437c8c5ad"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "0098588bb012bd1fb561c720258c5129"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "975ae92ddc350f32079015a853a25d74"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "3d54764566c3281d456b644ce6224126"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "f1f4db0cd5740314e0bba0287e248574"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "2203147f7333079cc9f14af20c4393ed"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "87b6afb25ad856f966e1d218d0047bcb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "852ad33ed39c579b61d8c49bc5d24d42"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "0c442f758418afd86f3ff06c881e9b34"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "6d1475bb334d0078b562a1f6984f8849"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "3e264308643f40cc075ce43f8c62e16a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "8ae1d214274f4f72212ca80b2e5cd9f8"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "2d04f4f81976915a3b32e8b50fe60288"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "46dc0910e00cb158ec9d8b052d903e51"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "7f980d57a3e529962624a6be02d3806b"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "ca9add358376060160c22cb970232f6b"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "389361fa0ce2f71f93073d17ef997587"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "d9d64d941755f94161a3d69423612db7"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "8c7e1481c46cda4457f846594e855bab"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "c794a6ca1868ae885650ebaeb5106679"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "83e11c7c22bd0b28dfef8cc5476c31fa"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "cb8b5dcfd0b8003d4d9e96e2b8496023"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "49529631186ca75e34bdee20c48a130f"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "f4b8c6ee374e0a46b2703d04fffd837b"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "2ac851653d871123acef19b93e80541b"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "029ae545e44a1995cb8975b69f653583"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "d9e26a674ed1d3abefbefb7c14794747"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "de1779534e214f41fc45fbd9fa991d3c"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "6c1114d67b046065778c45ce69ed38bf"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "df4f05afcdcfbe36617d8f86f2556a9d"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "88aa9426de34752f479be51b788384ae"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "eb3314e3454fd7f221a371b02548a67d"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "a219b2bd2453762d598621c962a62581"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "39b3e24cdbd5581a4591a94a2a83d08c"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "54649f99f6f2435c28930bd5db468d03"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "e06f2cd2925a33b8e938ebfa4aec3f60"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "d034ca15bdc652cd11527f9a4fe7ab08"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "6e4a8929411bb53e6669dc10e2c23d33"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "c34b8964e0b8130dbfdae44501d6dca3"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "ad01cf1f9deec5aab87052a51a906ef3"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "93c5b3881aae3207a1fbccead68532eb"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "2302b36ef5b7e09b60c8d9fdadb9884e"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "18fb9a75900b9bd9ca3c3161e71110de"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "277d2fe70ff5d59c5beec6b44bf0159f"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "6cac3eddcf793fe51fa44c6166555cda"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "9acf385edda35eeb9340d9e5732165bc"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "fc46d14522f813c4f27a01e334723add"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "3608997ecdc71c2671e1f73a8ed7873e"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "16cda51e16da6a4cd0b14946a054b050"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "f380019d7e7d5602a14e4013c56e2254"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "164bb14352634ac6529a72da6dd2a4b6"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "d8765b5e919df012c3c5855983724269"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "6b52f9346d1f2e99b802c7a89893dec6"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "fb2b3d9dccc372ba5f438af954bb078d"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "e3be684a1014400a1090c925750f43b5"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "fcc727515e2017e2d2c8791084b284c8"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "65f307e3d09add8daadd8bd31198595c"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "1a96dc66ea86a8ad2589c14d513d3eee"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "dfa8ec06c138da02912baf62acb9030b"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "d5edb7a5e89aeeccd6307e4876cd33d5"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "f734ec82962a7de8176c95012222332d"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "ed53a48cdc085c441d2cfc2bd3aee0d9"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
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
