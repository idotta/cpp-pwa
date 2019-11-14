console.log("This is service worker talking!");
var cacheName = 'cpp-pwa';
var filesToCache = [
    './',
    //Html and css files
    './index.html',
    //Our additional files
    './manifest.json',
    './serviceworker.js',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    // Compiled files
    "./app.asm.69bcd8d2.js",
    "./app.b7bdb114.map",
    "./src.2d567fa5.map",
    "./app.asm.69bcd8d2.map",
    "./serviceworker.map",
    "./src.996355c5.css",
    "./app.b7bdb114.js",
    "./src.2d567fa5.js",
    // asmjs files
    "./asmjs/app.asm.js",
    "./asmjs/app.asm.js.mem",
    // wasm files
    "./wasm/app.js",
    "./wasm/app.wasm"
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});