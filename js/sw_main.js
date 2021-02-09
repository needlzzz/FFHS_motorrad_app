// Make sure sw are supported

if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("sw_cached_site.js")
            .then(reg => console.log(`Service Worker: Registered`))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    });
}

// this is the link https://www.youtube.com/watch?v=ksXwaWHCW6k