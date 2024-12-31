self.addEventListener('install', (_event) => {
    console.log('Service Worker installing...');
});

self.addEventListener('activate', (_event) => {
    console.log('Service Worker activating...');
});

self.addEventListener('fetch', (event: any) => {
    console.log('Fetching:', event.request);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});