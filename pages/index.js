addEventListener(
  "fetch", event => {
    let url = new URL(event.request.url);
    url.hostname = "ve.venator.store";
    url.protocol = "http";
    let request = new Request(url, event.request);
    event.respondWith(
      fetch(request)
    )
  }
)
