'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd8ab2f6d37bf15cd299df121b940959",
"assets/AssetManifest.bin.json": "b455680f50dd7bb00dacd546638f5176",
"assets/AssetManifest.json": "71f5e2a0b6e8f662fd96581e135eba61",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/github.png": "7568c65689bfe5323d680b310e9e8b5a",
"assets/assets/images/github.svg": "c407b83b2c6d22f7ac4537e4bb6514d5",
"assets/assets/images/gmail-logo.png": "7d7508b6d120bc5062e1f1f92a04889d",
"assets/assets/images/icons/download(1).png": "cb179a4ce7250ff417900f2e423e7ff4",
"assets/assets/images/icons/download(2).png": "cb179a4ce7250ff417900f2e423e7ff4",
"assets/assets/images/icons/download(3).png": "4d7b0b227fe89c40b356072d999141e8",
"assets/assets/images/icons/download(4).png": "409930a4505af0ca590fb2517c481111",
"assets/assets/images/icons/dsa(1).png": "5e23d3e7c54ae963e581b8f25e0a8777",
"assets/assets/images/icons/dsa(2).png": "b9e847023404856df90871ac4fe731f5",
"assets/assets/images/icons/dsa(3).png": "66ff1b500187e3bf88f1fd6fd832339f",
"assets/assets/images/icons/dsa(4).png": "9c6a20194dff06ade09ba8ab6dae31c6",
"assets/assets/images/icons/education(1).png": "5512f0f1a4c070ee8a5046e3cc8811a9",
"assets/assets/images/icons/education(2).png": "05f4de4bc630ce8ee678c38d320a6e78",
"assets/assets/images/icons/education(3).png": "f6337b76c92eb587f9a57fc2e1384627",
"assets/assets/images/icons/education(4).png": "c1a895ceca829cf707cf5db34aa82d0e",
"assets/assets/images/icons/internship(1).png": "d6bc2033eabd1a07c2cc39a225d40b9f",
"assets/assets/images/icons/internship(2).png": "aadbf099e3fc9c0d31b7b5a2cb2308a6",
"assets/assets/images/icons/internship(3).png": "2f0015ca2c442b8e816f3320b3a811c8",
"assets/assets/images/icons/internship(4).png": "c811c96b800f77167ec70c6e4974ecdd",
"assets/assets/images/icons/internship(5).png": "6595980aebeab29f480241cad18c2455",
"assets/assets/images/icons/internship(6).png": "37209d40294afcba5a3fbc5b26b71033",
"assets/assets/images/icons/mobile-development(1).png": "2b719af94bd189fc847a69345a2ea6b0",
"assets/assets/images/icons/mobile-development(2).png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/images/icons/mobile.png": "9d7aa13ed43a4551418fbf95910a46bd",
"assets/assets/images/icons/open-book(1).png": "b6378fb03ec47b9afe81a6aac38ff2ec",
"assets/assets/images/icons/open-book.png": "b9c14e407c88ba17609dd0b4700807e0",
"assets/assets/images/icons/skill(1).png": "f013d0c710d294e43daf6ca446bfd888",
"assets/assets/images/icons/skill(2).png": "9a086ceea9375ba88ab26538bd787c40",
"assets/assets/images/icons/smartphone.png": "25506527fbc6ad21b839b2015951702e",
"assets/assets/images/leetcode.png": "68b04571052e2fec54b6f63aec9d79a3",
"assets/assets/images/linkedin.png": "ceda4c0a93cc9a43df9a5faaab75be36",
"assets/assets/images/linkedin.svg": "0c46cfb18d3b7336ec6064b1b4d6fae4",
"assets/assets/images/logos/AndroidStudio-Dark.png": "b4b9d27dd85419a93a0a540e2d7a8138",
"assets/assets/images/logos/AndroidStudio.png": "21591f6b82f5ab0072185f40a931080e",
"assets/assets/images/logos/C.png": "7aafd3b9f4cedb44e83f97813bc0ed72",
"assets/assets/images/logos/CSS.png": "4453b2af6b6039dedc2e158b96854f24",
"assets/assets/images/logos/Dart-Dark.png": "c98564dd2693eb6952368ea2f96d34ba",
"assets/assets/images/logos/dart.png": "9db16d9853755a14ec051e62808bd205",
"assets/assets/images/logos/dsa(1).png": "5e23d3e7c54ae963e581b8f25e0a8777",
"assets/assets/images/logos/dsa(2).png": "b9e847023404856df90871ac4fe731f5",
"assets/assets/images/logos/dsa(3).png": "66ff1b500187e3bf88f1fd6fd832339f",
"assets/assets/images/logos/dsa(4).png": "9c6a20194dff06ade09ba8ab6dae31c6",
"assets/assets/images/logos/Flutter-Dark.png": "7ad12a2c2ff3eb299522c9c70cfdc66e",
"assets/assets/images/logos/flutter.png": "c26e2d8c0f6692c6e059d9f9dbfa5c5a",
"assets/assets/images/logos/Git.png": "a5bb2ee601406ccfe1226f47600f1589",
"assets/assets/images/logos/Github-Dark.png": "00535dd0e82e2b3ea7f467eed27c1a20",
"assets/assets/images/logos/github.png": "3056432ae3a0f706e1fad9fd3eaba8fe",
"assets/assets/images/logos/github1.png": "93b6dc858fcd0f5b2931c510eecde56a",
"assets/assets/images/logos/HTML.png": "1d31c5782bba1e988797a23691d99ab8",
"assets/assets/images/logos/Idea-Dark.png": "b87eb00a314f7425529c76690482d6db",
"assets/assets/images/logos/Java-Dark.png": "2db74b27e77ca9199c25f9110cc3a5a9",
"assets/assets/images/logos/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/images/logos/JavaScript.png": "70487f7acb67c3ee6feac48677efe92f",
"assets/assets/images/logos/leetcode.png": "9d4a26e6f855da8d022c27d10f435e43",
"assets/assets/images/logos/linkedin.png": "2617578dd18a9005e85f2f59d77f20ad",
"assets/assets/images/logos/linkedin1.png": "1d3e1b5cfe2977d2b23fd3488e532ebb",
"assets/assets/images/logos/linkedin2.png": "17a73f8db8f24f95bee9fb2ac860e21b",
"assets/assets/images/logos/linkedin3.png": "08ca3cc015a9a05e8680da4b4d586b33",
"assets/assets/images/logos/linkedin4.png": "a27a25a7d62d01857c3704014ae78861",
"assets/assets/images/logos/VSCode-Dark.png": "c2930591ff79b7ccd0b4f9a5e165a4cb",
"assets/assets/images/mks.jpeg": "d10c79c680aaac5fefcd69e606b8b9cb",
"assets/assets/images/mks.jpg": "1e18a10a1e9cdbd09d81a032bf4dcc54",
"assets/assets/images/Mks1.jpg": "04634e26f7ef213f5b7cf9fda9ca83f2",
"assets/assets/images/projects/project-1.png": "f84e63aefb41e82b62c94c40f261b2bd",
"assets/assets/images/projects/project-2.png": "32076555bc6417e51cdded71ee75f734",
"assets/assets/images/projects/project-3.png": "ec43628a5079c64b1b02e59d6d76a658",
"assets/assets/images/projects/project-4.png": "99e84f6a69710146b1a431f1382f0b6d",
"assets/assets/images/projects/project-5.jpg": "e8996609f8029c188965a416730979ad",
"assets/assets/images/projects/project-6.png": "ac397f6d2d6a482b6534e29c3697319f",
"assets/assets/images/spiderman.jpg": "30ecd0bcda7fea3b2ceda588612c0358",
"assets/FontManifest.json": "7fbc21777841f453b00ea0897bc06f63",
"assets/fonts/MaterialIcons-Regular.otf": "4276710a92f9c5998379ab235403c331",
"assets/NOTICES": "82d05ea2f040d4c9adace6749fadf8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3a13f62c852f516caa76dc5ad2e92790",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb33633179ea31c2db078391adcae87e",
"/": "fb33633179ea31c2db078391adcae87e",
"main.dart.js": "7f132ad2a6a5ccdbf1410df59d0f5777",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
