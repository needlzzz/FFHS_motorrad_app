//registration of the sw
//check if sw is supported

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_wholeSite.js")
      .then((reg) => console.log("Service Worker: Registered"))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
