/* ==========================================================
   SITE SETTINGS - edit the web addresses below, then save.
   This one file controls the "Follow" buttons on every page
   and the Google Maps location button on the home page.
   Keep the quotation marks and the commas.
   ========================================================== */
   const SOCIAL = {
    facebook:  "https://www.facebook.com/your-page-name",
    tiktok:    "https://www.tiktok.com/@your-username",
    instagram: "https://www.instagram.com/your-username"
  };
  
  /* ==========================================================
     GOOGLE MAPS (Contact section, "View my location" button)
     To show your own place:
     1. Open Google Maps and search for your place.
     2. Click Share > Embed a map > COPY HTML.
     3. Paste that whole <iframe ...> code between the quotes of
        MAP_EMBED below (a plain map link also works).
     MAP_LINK is where the "Open in Google Maps" link goes.
     ========================================================== */
  const MAP_EMBED = "https://www.google.com/maps?q=Alijis%2C%20Bacolod%20City%2C%20Negros%20Occidental%2C%20Philippines&output=embed";
  const MAP_LINK  = "https://www.google.com/maps/search/?api=1&query=Alijis%2C%20Bacolod%20City%2C%20Negros%20Occidental%2C%20Philippines";
  
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