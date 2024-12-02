export default defineNuxtPlugin(() => {
  if (process.client) { // Ensure this only runs on the client-side
    // Wait until Nuxt has initialized
    window.addEventListener('load', () => {
      console.log("Accordion plugin loaded");

      const faqAccordion = document.getElementById("faqAccordion");

      if (faqAccordion) { // Ensure the element exists
        faqAccordion.addEventListener("hide.bs.collapse", function (event) {
          const iframe = event.target.querySelector("iframe");
          if (iframe) {
            const src = iframe.src;
            iframe.src = ""; // Remove src to stop the video
            iframe.src = src; // Re-apply the src to reset the video
            console.log("Video stopped");
          }
        });

        faqAccordion.addEventListener("show.bs.collapse", function (event) {
          const iframe = event.target.querySelector("iframe");
          if (iframe) {
            // Add autoplay and mute parameters if not present
            const url = new URL(iframe.src);
            url.searchParams.set("autoplay", "1");
            url.searchParams.set("mute", "1");
            iframe.src = url.toString();
            console.log("Video started with autoplay and mute");
          }
        });
      } else {
        console.error("faqAccordion element not found");
      }
    });
  }
});
