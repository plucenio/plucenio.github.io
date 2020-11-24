'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "779e4407538f0ef1c54b84dbb99cfe80",
"index.html": "07ebbdb45da92824f309ee2d57852a46",
"/": "07ebbdb45da92824f309ee2d57852a46",
"main.dart.js": "c8af3b155b555334c1e264053c89392a",
"web.config": "f5fe1c4278cebc83b027a1f78c6c6bd4",
"favicon.png": "cb08503dd068a65b09d0db62578bf0f5",
"icons/Icon-192.png": "c4553ce1cf349e24ec2c7b03336a09a1",
"icons/Icon-512.png": "7ec73b601ef160284c0784e395583c65",
"manifest.json": "e142d6eef99099402cd0bc833a0aaf3c",
"assets/AssetManifest.json": "8942bf4ec38c55e82707d931740297fb",
"assets/NOTICES": "21fd79478e5a55eee404e799eabe0f70",
"assets/FontManifest.json": "d0d3335e68f43bb56bb61a20e7ab99fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/Antonia.png": "51e988ebf5bdde7265d9aa9ff3ad89ea",
"assets/assets/images/Happy.png": "74ea04100ada0400a5d6213a50f62bdb",
"assets/assets/images/SplashScreen.png": "93eb8ead4cffaf16abca64a59731f827",
"assets/assets/images/Hospital.png": "51afd0fe0dbb62e5732cbbbf90f44d1b",
"assets/assets/images/PacificBlueLevelCircle.png": "ef0bde312e2bcdbde51bd653f44b9a1f",
"assets/assets/images/IconLevel1.png": "37d74dbd9fa6b029a448bef3608a5e8a",
"assets/assets/images/Trophy.png": "50a6a1becf553fef8b3a2908df6dec5a",
"assets/assets/images/Graca.png": "5f1725ab850fa686c8464ec4f1e55e33",
"assets/assets/images/NewBackground.png": "503e2c6df0d0cc5bbca61b4b4749cb61",
"assets/assets/images/YPacificBlueLogo.png": "9bc55f2c0f87fd87819cc0544e78ff5d",
"assets/assets/images/Neutral.png": "de82b4fe70d6d2b937247ccf0187dffc",
"assets/assets/images/Sad.png": "da8279fbffedf8360e01180952f8240a",
"assets/assets/images/AllTeam.png": "64920b6a5ba8af2b670bb7bccec002b2",
"assets/assets/images/GoldenTrophy.png": "65cba4a60e276e74328455e93a8fee5b",
"assets/assets/images/YWhiteLogo.png": "1e57e68851df204256d53cc0aa085bb9",
"assets/assets/images/MobileBackgroundEmpty.png": "9ad9ca71e0740deb0f3f910aa243cba9",
"assets/assets/images/RafaelRounded.png": "cda64837b63e87d87df9f73ed67c1ce0",
"assets/assets/images/FlorenceRounded.png": "7015bd04440cf532d2eea51b29f30197",
"assets/assets/images/hospitalBackground.jpg": "37e8b3741d5ea6c72a75a6b20f418a9f",
"assets/assets/images/LogoSafety4Me.png": "db921a78d44f427d8df8465c8b5e6a27",
"assets/assets/images/GameRafaelRounded.png": "ec4f71a59d3aec167c50c68311314a74",
"assets/assets/images/Hector.png": "ff7b15f2f3fcecada4c8dcc7ff84c033",
"assets/assets/images/Ana.png": "907ac0383ff8f183a8f5a408c7519cfc",
"assets/assets/images/Fernando.png": "f0538597ad37173e547341cbc345ec6e",
"assets/assets/images/CrossRounded.png": "c40711368433f818a2561f993415ade7",
"assets/assets/images/Heart.png": "d2e877804a8dafbdf15fc7c237f37bae",
"assets/assets/images/MobileBackground.png": "241fad318ca06b2d7474dabdacbb65cc",
"assets/assets/images/GracaRounded.png": "cda2ff1420508f64c84f6772b18665b8",
"assets/assets/images/SplashScreenBackground.png": "479d94df8cf1df3f4d13f107801c624b",
"assets/assets/images/Florence.png": "068841f6ca5803cf94f553cf49d1ecc9",
"assets/assets/images/DesktopBackgroundEmpty.png": "344e66eda2e6220d428c6c963315e432",
"assets/assets/images/AllTeamWithBackground.png": "29e103a6f77f212b2e3e9bfbf3a1d4af",
"assets/assets/images/AntoniaRounded.png": "c3582a09a5a9c80ff6dd1ce2b461ac8c",
"assets/assets/images/RedHeartLevelCircle.png": "f3b19f94ce0962c46dc08563a572cc32",
"assets/assets/images/FernandoRounded.png": "4031f3bfa29dbd9a66c9c7581aa43b9f",
"assets/assets/images/Logo.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/DesktopBackground.png": "3aed3c034bc59fe948c077521c3a14c8",
"assets/assets/images/LogoSafety4MeWhitePacificBlue.png": "ae2a07b9516a46dddb1fdab6631db46e",
"assets/assets/images/FinalTrophy.png": "619043e4be927c802116e05c208ff8ac",
"assets/assets/images/LogoSafety4MeWhite.png": "25e5ef0cffd790f38ed304aaabc12a53",
"assets/assets/images/NewBackground3.png": "804e093cb66146a2d2fa1abfd346d6b3",
"assets/assets/images/NewBackground2.jpg": "6ee8618e8db19fc702cf18ba13f7c3c4",
"assets/assets/images/Rafael.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/HectorRounded.png": "270411e2fdd31f56bee44bbbf1aeeb88",
"assets/assets/images/AnaRounded.png": "4fee69afdf7eac2d28f29da82d1f09fb",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/assets/fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/assets/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/assets/animations/GameExplain.json": "1d5ea95b73ae09856dd1c2b7e9c024be",
"assets/assets/animations/GameBackgroundMobile.json": "976b44632e2419a09e0e049e88a712bf",
"assets/assets/animations/GameBackgroundWeb.json": "e74200d6afe4313a6e2a9546c404411f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
