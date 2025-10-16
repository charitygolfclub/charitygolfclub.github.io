'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "43678ffef21489348e60dc8ca7872a9c",
"assets/AssetManifest.bin.json": "8929fb655e5cf06a105fe0a9c46ae928",
"assets/AssetManifest.json": "86a6fdccaad34bad055c0bf1229bce1d",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/images/17may.jpeg": "07aba23f6e2be65c1fa0dc5faef747dc",
"assets/assets/images/19july.jpeg": "262c59cbfcc5d0b3f206873ed78b05df",
"assets/assets/images/28june.jpeg": "bb3f6ed6103f062de5863c1cad9ce01f",
"assets/assets/images/4.jpg": "cdf642cc8024dc6c92df4e23e41086bb",
"assets/assets/images/7june.jpeg": "77003748222708d3523cdd23128fc10f",
"assets/assets/images/9august.jpeg": "ccc1885b9ec79dbfd7cf2c04758211b4",
"assets/assets/images/a2.jpg": "0e8abe4d3b55cb0f1dbcf46a99b1c85d",
"assets/assets/images/a2poster.png": "127c0a359a96bce36e6d9905a353d464",
"assets/assets/images/a3.jpg": "05e59e207820e7b4c085b53ccfe3e260",
"assets/assets/images/a4.jpg": "1e495d3ff0ef3d3ab3dbd0ff3b7747a4",
"assets/assets/images/a5.jpg": "2802ab41e5341f1f4b5cc87ab03dd08c",
"assets/assets/images/a6.jpg": "a43ca6fbf48b708f026aedbcb4b3008a",
"assets/assets/images/a7.jpg": "c56adeba615d1264deaa5677ef58820e",
"assets/assets/images/a8.jpg": "ad1f4818bcab78a0490062636768ae5c",
"assets/assets/images/a9.jpg": "1f8bc74aa65f890a46a2e15cce4a639c",
"assets/assets/images/b1.jpg": "f4c0a7ac1a01ae36128f20e037a906d3",
"assets/assets/images/b2.jpg": "7ff89777cc0713d70a41c2cd4dc59fdf",
"assets/assets/images/b3.jpg": "17f7bc4320186f1661af12aea82060cf",
"assets/assets/images/banner.jpg": "5d869ba97fad0630fb033f18ba86648c",
"assets/assets/images/banner4.jpg": "818114b6dbc0bd1e701f821f0a8b939d",
"assets/assets/images/bannerweb.jpg": "13c49ea3b3181d183144433983076fd1",
"assets/assets/images/bannerweb.png": "4fe0fe6de1a1234ec6081fa9d0a0aaa4",
"assets/assets/images/bannerweb2.png": "08563b866bb0db1db20ba494a8eb35e9",
"assets/assets/images/big.jpg": "502f4e1b9206144abf1782914b8ed4cc",
"assets/assets/images/brocherbanner.JPG": "b1ae7d65bb31726348e8d4809aae0116",
"assets/assets/images/broucher.JPG": "c2e7e08fac0f8db18150b8172dadc4dd",
"assets/assets/images/broucher1.JPG": "1d82fc8a23a69ca99e06cece63c859b2",
"assets/assets/images/broucher2.JPG": "c06d56cbeec83b25c8e9b46133fc4174",
"assets/assets/images/broucher3.JPG": "fffaf408ae7baf6e23de34c47180d1f3",
"assets/assets/images/calenderbanner.jpg": "4733fe5988e10831eaf6cf6f9562dc13",
"assets/assets/images/card%2520calender.JPG": "ced1cefbafa49b4b5a7fdc9e2b8e92ee",
"assets/assets/images/card1.JPG": "f6d45e718362064adad4d1096b25189b",
"assets/assets/images/card2.JPG": "ff100f47fc93b93bd299c09bfe6d8f00",
"assets/assets/images/card3.JPG": "dec420e898f3900ccb6e7db05089fc43",
"assets/assets/images/card4.JPG": "400e20e79c827f8b918d17faad5244aa",
"assets/assets/images/cardbanner.jpg": "d4e937dd455625a664f114b9d6c26e61",
"assets/assets/images/charity1.jpeg": "f6841d3e073574252adbfef200f9e25b",
"assets/assets/images/customizedcalender.JPG": "f29e2205aa28897ad327119137ee24ec",
"assets/assets/images/d1.jpg": "0cc16b5ad8a43807eadfecb064fd896c",
"assets/assets/images/d2.jpeg": "a4477fa4eb1ad14acdb954b3b2608bad",
"assets/assets/images/d3.jpg": "177851e779bf948ec5878c43120528d1",
"assets/assets/images/d4.jpg": "25ea825ae481646ba17c7b90cfde83e6",
"assets/assets/images/deskcalender.JPG": "f2def75ca1bc5e0b95a77b6bdfb6074d",
"assets/assets/images/easyprint.jpg": "6235bc4a21ab1b167a2309d95350a3ee",
"assets/assets/images/envelope.JPG": "d90f9f380a075ab239a6856e04381506",
"assets/assets/images/event%25201.jpeg": "a16e9ebc7d16bc803732bdf9990708de",
"assets/assets/images/event%25202.jpeg": "8614762ee95879352975944fc7012b90",
"assets/assets/images/event%25203.jpeg": "ed20b74be4fa2c6825105b15a9f592fe",
"assets/assets/images/eventpage1.jpeg": "5b3b0526dfaadaa7700c0fe3e73044b0",
"assets/assets/images/Flyer.JPG": "8f340f368faa3c29fccfb0f7138456a1",
"assets/assets/images/Flyer1.JPG": "1fb355eb86f0bc913b1f57ed3b6168fb",
"assets/assets/images/Flyer2.JPG": "78b5e3263224370aa57475a3eca90c36",
"assets/assets/images/Flyer3.JPG": "e39fb6f4df75222cd33b19937e982951",
"assets/assets/images/gift.JPG": "59e11a81079ce0344d4cd1ed5b8ea43a",
"assets/assets/images/home1.jpeg": "da91bff533364bb7d2025e4fc9c64568",
"assets/assets/images/home2.jpeg": "b0bda2e79b5e6b2e141b03cb786651bf",
"assets/assets/images/home3.jpeg": "523547da70db56cfa7a8e2d518948e97",
"assets/assets/images/home4.jpeg": "931193c5429f3c4edc64570f699c4bae",
"assets/assets/images/instagram.jpg": "642f7bd187fbdea06ecef45676dd60e0",
"assets/assets/images/instagram.png": "b473fcad595f09b0afe1270d9016ac8c",
"assets/assets/images/l2.jpg": "502f4e1b9206144abf1782914b8ed4cc",
"assets/assets/images/l3.jpg": "c8af9734fca606e98e428c60bb9670ef",
"assets/assets/images/logo.png": "2e287bdb1836bafab7a97efad6c5eee5",
"assets/assets/images/logos.png": "e19df8c8838823e4aadee939954179a9",
"assets/assets/images/m1%2520(1).jpeg": "dad90ead8467e7bb0db11a846c9508b1",
"assets/assets/images/m1%2520(10).jpeg": "a7fe5e5e4f40772409ef87026463a7ee",
"assets/assets/images/m1%2520(11).jpeg": "e54a833178e8ca9f22611931deebc1ef",
"assets/assets/images/m1%2520(12).jpeg": "80bc5a97430fb17512b422834fc2aaaa",
"assets/assets/images/m1%2520(13).jpeg": "9d1abba78bb86b07abc2b52505914bcb",
"assets/assets/images/m1%2520(14).jpeg": "92d16306d79c52ebd0abb5124c8b4747",
"assets/assets/images/m1%2520(15).jpeg": "a2c5114f84861570ca661b368bde22f5",
"assets/assets/images/m1%2520(16).jpeg": "bca00c63f4c2d4e623f3e2279a5a69cf",
"assets/assets/images/m1%2520(17).jpeg": "7587200aee94e0f604336c8882d3c901",
"assets/assets/images/m1%2520(18).jpeg": "f13cc0241df6805a160ce268dc120ae1",
"assets/assets/images/m1%2520(19).jpeg": "de1d5f3623df4375de4381e2d0631904",
"assets/assets/images/m1%2520(2).jpeg": "8b1a9be0eecbaf3e1ee917efbb54897e",
"assets/assets/images/m1%2520(20).jpeg": "6fd41561e1209e0fa8f32d99099923ef",
"assets/assets/images/m1%2520(21).jpeg": "74fc10cadb8274aa0aec095cda96bc92",
"assets/assets/images/m1%2520(22).jpeg": "f896683d2156c3ab221f47f79482cc8e",
"assets/assets/images/m1%2520(23).jpeg": "8439686d755a757cb772bc0a40415ed7",
"assets/assets/images/m1%2520(24).jpeg": "8efe840dda15eec9c4e590cba91465c1",
"assets/assets/images/m1%2520(25).jpeg": "931193c5429f3c4edc64570f699c4bae",
"assets/assets/images/m1%2520(26).jpeg": "a16e9ebc7d16bc803732bdf9990708de",
"assets/assets/images/m1%2520(27).jpeg": "8af285508b2755b8391ab7b8049b12a5",
"assets/assets/images/m1%2520(28).jpeg": "42326e40ff0ccd9255873b91afe66db6",
"assets/assets/images/m1%2520(29).jpeg": "21b9dd42ecca6dc636f0dcb2e396f145",
"assets/assets/images/m1%2520(3).jpeg": "9dab2bf4426594a31bab1f30f6ce9821",
"assets/assets/images/m1%2520(30).jpeg": "462b018d3a691479a02326eede2f4a4b",
"assets/assets/images/m1%2520(31).jpeg": "0a9917405bd1f2f5bba6dccb7555666f",
"assets/assets/images/m1%2520(32).jpeg": "4d3b9f83bfc8e16bc71ea4f0db006fb9",
"assets/assets/images/m1%2520(33).jpeg": "d8bd478032c1ad31c06ae2f9e209fd9e",
"assets/assets/images/m1%2520(34).jpeg": "c8c05b8ff38e0d9e6e060c266b83b749",
"assets/assets/images/m1%2520(35).jpeg": "ed20b74be4fa2c6825105b15a9f592fe",
"assets/assets/images/m1%2520(36).jpeg": "e127a9e450798b9592fe03eaffda2f94",
"assets/assets/images/m1%2520(37).jpeg": "25f88055385c4ab543126adf497961c2",
"assets/assets/images/m1%2520(38).jpeg": "83d4f05797a856e9e9689b7c31837cd1",
"assets/assets/images/m1%2520(39).jpeg": "8c9640ee6b2bee3790a13d5aa0f0e19d",
"assets/assets/images/m1%2520(4).jpeg": "e866f0d6ed3d27e729f0c51a1809768f",
"assets/assets/images/m1%2520(40).jpeg": "2c43b6f362eeb149c85d6c240c23ba25",
"assets/assets/images/m1%2520(41).jpeg": "6a67f097e12abed8f9e2c70aca7b7baf",
"assets/assets/images/m1%2520(42).jpeg": "8614762ee95879352975944fc7012b90",
"assets/assets/images/m1%2520(43).jpeg": "24e8aa9d9db695c7e4fec5e0bd40ba1a",
"assets/assets/images/m1%2520(44).jpeg": "c0d550333427768814cb233ece00ec87",
"assets/assets/images/m1%2520(45).jpeg": "eb41516039f3e75260bed9808f521fda",
"assets/assets/images/m1%2520(46).jpeg": "6cc0a9d7a562a56008aff2121eb4fedc",
"assets/assets/images/m1%2520(47).jpeg": "b0bda2e79b5e6b2e141b03cb786651bf",
"assets/assets/images/m1%2520(48).jpeg": "cd60c13c99c93f87644d97afebd32756",
"assets/assets/images/m1%2520(49).jpeg": "9c402b80000f0c646a7abeb28426888c",
"assets/assets/images/m1%2520(5).jpeg": "995e1a2f5eceadef0f557b4c3d0c7cb9",
"assets/assets/images/m1%2520(50).jpeg": "f6841d3e073574252adbfef200f9e25b",
"assets/assets/images/m1%2520(51).jpeg": "a76f6b71ae123f96d3e602c251bddb4f",
"assets/assets/images/m1%2520(52).jpeg": "51acef798084f37248f8d86e37a99b9e",
"assets/assets/images/m1%2520(53).jpeg": "c67ee207c38ee266c47f135d2085d510",
"assets/assets/images/m1%2520(54).jpeg": "8442597bdb2dd97dac16cc80bcb48fc1",
"assets/assets/images/m1%2520(55).jpeg": "6748e28d83f8d7c04777904f51bfe883",
"assets/assets/images/m1%2520(56).jpeg": "c8168d8cd6a1e8da5ddf8cad0e319769",
"assets/assets/images/m1%2520(57).jpeg": "f62718de8be5ce320b2e4db986f6dc58",
"assets/assets/images/m1%2520(58).jpeg": "6e2215825fab1d797b0fa96a35b669ef",
"assets/assets/images/m1%2520(59).jpeg": "1530674578a02b1ccd24729dc9971765",
"assets/assets/images/m1%2520(6).jpeg": "8f56a3b858e9fc308a6e86b688708a1c",
"assets/assets/images/m1%2520(60).jpeg": "5ab80b1af76138a1339679ac5ed21345",
"assets/assets/images/m1%2520(61).jpeg": "610d8e5cc09b363aac4a5b247cbf0df6",
"assets/assets/images/m1%2520(62).jpeg": "c2878bddc74f4ea17187fbf67071b89c",
"assets/assets/images/m1%2520(63).jpeg": "c73a32457378e27c538c26286bd2ce89",
"assets/assets/images/m1%2520(64).jpeg": "d5934075eab1563b93b6aa0148aad3c8",
"assets/assets/images/m1%2520(65).jpeg": "13c62c05b2aab1f489072a679390f8ef",
"assets/assets/images/m1%2520(66).jpeg": "ea24f34478492abfe820248a60569a8c",
"assets/assets/images/m1%2520(67).jpeg": "bb52022ed8f385a18fbc4a596ec0be10",
"assets/assets/images/m1%2520(68).jpeg": "fde1b69513f0a669e385a93937047f24",
"assets/assets/images/m1%2520(69).jpeg": "5b3b0526dfaadaa7700c0fe3e73044b0",
"assets/assets/images/m1%2520(7).jpeg": "d654f24b6362bb55264a3f219598b1b2",
"assets/assets/images/m1%2520(70).jpeg": "15e03dc152c6fbd846a6256fdde1f354",
"assets/assets/images/m1%2520(71).jpeg": "6cc0a9d7a562a56008aff2121eb4fedc",
"assets/assets/images/m1%2520(72).jpeg": "a7fe5e5e4f40772409ef87026463a7ee",
"assets/assets/images/m1%2520(73).jpeg": "ccc1885b9ec79dbfd7cf2c04758211b4",
"assets/assets/images/m1%2520(74).jpeg": "bb3f6ed6103f062de5863c1cad9ce01f",
"assets/assets/images/m1%2520(75).jpeg": "547387c42592e5cdfe7b9f8334349c97",
"assets/assets/images/m1%2520(76).jpeg": "13fdb49e56a314ecea48af804614615d",
"assets/assets/images/m1%2520(77).jpeg": "7142719de1e3ae15c996ad1aaca3f336",
"assets/assets/images/m1%2520(78).jpeg": "a10b1468c5140ef86515a8e3799417bc",
"assets/assets/images/m1%2520(79).jpeg": "2094acdeb7fb4d3a699b8c1a34beb04b",
"assets/assets/images/m1%2520(8).jpeg": "31970857b5b1a177f39ddf4243269605",
"assets/assets/images/m1%2520(80).jpeg": "43748eec913f37cb95731c389c7d4c13",
"assets/assets/images/m1%2520(81).jpeg": "0db487c429e12c430346c8a188ae49be",
"assets/assets/images/m1%2520(82).jpeg": "8166c27e6e52f1a432ca09771d96cb5e",
"assets/assets/images/m1%2520(83).jpeg": "523547da70db56cfa7a8e2d518948e97",
"assets/assets/images/m1%2520(84).jpeg": "15293373469bad7cabe34f17014fe7cf",
"assets/assets/images/m1%2520(85).jpeg": "890e8adb5e8e98a0e09edff50c1814d2",
"assets/assets/images/m1%2520(86).jpeg": "f57d2a73a0dc9f959d2d74292065fbe0",
"assets/assets/images/m1%2520(87).jpeg": "1b71cd4f5737a8fcb860fdbb0fb9c686",
"assets/assets/images/m1%2520(88).jpeg": "99cc1276a23e2a64e9bc675687a2d7f1",
"assets/assets/images/m1%2520(89).jpeg": "bef35056ff67a85d073cb8ef3ffeae05",
"assets/assets/images/m1%2520(9).jpeg": "7e764405552d2d3bb0ea4f3592c17920",
"assets/assets/images/m1%2520(90).jpeg": "f8c61fec9378b47c787cbac15f89db3e",
"assets/assets/images/m1%2520(91).jpeg": "1dcf9b2eca54b5a5f0c9ce51510ff942",
"assets/assets/images/m1%2520(92).jpeg": "2dacff4752d2c3118940e068631a47a9",
"assets/assets/images/m1%2520(93).jpeg": "43affb749340ad0a00fb1baf7e0e42de",
"assets/assets/images/m1%2520(94).jpeg": "581c82a5f7505def885d6a0c73f564dc",
"assets/assets/images/mainbanner.JPG": "e9c142783747125fcd4350db2b66e210",
"assets/assets/images/mainbanner.png": "2cb93315683aca54651879119458241d",
"assets/assets/images/payment.jpeg": "a7fe5e5e4f40772409ef87026463a7ee",
"assets/assets/images/postcard.JPG": "cf059b91f04cd53ef5f9d2f2dc57621d",
"assets/assets/images/product.png": "91a59a918b3b3ff42530c170fdde6d2c",
"assets/assets/images/sponsor.jpeg": "6cc0a9d7a562a56008aff2121eb4fedc",
"assets/assets/images/timetable.jpeg": "edcbbc5123254985496ec846f63e1525",
"assets/assets/images/twitter.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/assets/images/whatsapp.png": "96c9c52ef4c22fb09b95f35d22c05706",
"assets/assets/images/youtube.jpg": "86e312cbbe2be0b45c647ee5cb565bca",
"assets/assets/images/youtube.png": "33f1434531a41b1664eb1759b80853ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ad054516228fe22cd4bac3f4bb14c0e",
"assets/NOTICES": "323c9b4e9c265b0fb2990bc85980d7d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "af57efcfbcbff85b7026480f9bfb0be8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ab79c844b1d71d5acd99196c5ca95618",
"icons/Icon-192.png": "dfea03b5985689c9d5cb2142579aaa1f",
"icons/Icon-512.png": "4834c8e412a9acb70765d8da49d76b36",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47c4bdb2a9100ee212a7ca8d2d83fcae",
"/": "47c4bdb2a9100ee212a7ca8d2d83fcae",
"main.dart.js": "c9a5b5eeff776c3634d1483ec32823c6",
"manifest.json": "04baa50888e5fcf7dba9a24058039e83",
"version.json": "e627fbd9659ba3e1dbd268366f7a6afd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
