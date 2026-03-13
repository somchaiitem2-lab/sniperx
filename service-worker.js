const CACHE_NAME = 'pg-sniper-v1';
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './app.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate & Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }));
        })
    );
});

// Fetching strategy: Only intercept local assets to avoid CORS/Proxy interference
self.addEventListener('fetch', (event) => {
    // Only handle GET requests for our own origin
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return; // Let the browser handle external/proxy/non-GET requests directly
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }).catch(() => {
            // Fallback for offline if something goes wrong
            return new Response('Network error occurred', { status: 408, statusText: 'Network Error' });
        })
    );
});
