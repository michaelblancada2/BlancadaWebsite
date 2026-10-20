/* ==========================================================
   SITE SETTINGS - edit the web addresses below, then save.
   This one file controls the "Follow" buttons on every page
   and the Google Maps location button on the home page.
   Keep the quotation marks and the commas.
   ========================================================== */
   const SOCIAL = {
    facebook:  "https://www.facebook.com/michealisidro.blancada",
    tiktok:    "https://www.tiktok.com/foryou?lang=en",
    instagram: "https://www.instagram.com/"
  };
  
  /* ==========================================================
     GOOGLE MAPS (Contact section, "View my location" button)
     To show your own place:
     1. Open Google Maps and search for your place.
     2. Click Share > Embed a map > COPY HTML.
     3. Paste that whole <iframe ...> code between the quotes of
        MAP_EMBED below. Keep it wrapped in single quotes ' '
        (a plain map link in double quotes also works).
     MAP_LINK is where the "Open in Google Maps" link goes.
     ========================================================== */
  const MAP_EMBED = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22182.122537428626!2d122.92223746537363!3d10.63516195874606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed1006ee5d23b%3A0xbf4a79727c5c0715!2sBangga%20Lote!5e0!3m2!1sen!2sph!4v1792391436484!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>';
  const MAP_LINK  = "https://www.google.com/maps/search/?api=1&query=Bangga%20Lote%2C%20Bacolod%20City%2C%20Negros%20Occidental%2C%20Philippines";
  
  /* ----- Nothing to edit below this line ----- */
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = SOCIAL[a.dataset.social];
    if (url) a.href = url;
  });
  
  (function () {
    var btn = document.getElementById("mapBtn");
    if (!btn) return;                                   // only on pages with the map button
    var panel = document.getElementById("mapPanel"),
        frame = document.getElementById("mapFrame"),
        link  = document.getElementById("mapLink"),
        label = btn.querySelector("span");
    var src = MAP_EMBED, m = /src\s*=\s*["']([^"']+)["']/i.exec(MAP_EMBED);
    if (m) src = m[1];                                  // accept a pasted <iframe> code
    link.href = MAP_LINK;
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      label.textContent = open ? "Hide map" : "View my location";
      if (open && !frame.getAttribute("src")) frame.src = src;   // load the map only when first opened
    });
  })();