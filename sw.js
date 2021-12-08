self.addEventListener('fetch', function(event) {
  caches.open('feliznavida').then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      }).catch(function() {
        return caches.match(event.request);
      });
    });
});
