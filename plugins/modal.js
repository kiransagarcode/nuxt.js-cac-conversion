export default defineNuxtPlugin(() => {
    if (process.client) {
      const modalConfig = [
        { modalId: "firstSquareModal", buttonId: "readMoreBtn" },
        { modalId: "secondSquareModal", buttonId: "readMoreBtn2" },
        { modalId: "thirdSquareModal", buttonId: "readMoreBtn3" },
        { modalId: "fourthSquareModal", buttonId: "readMoreBtn4" },
        { modalId: "fifthSquareModal", buttonId: "readMoreBtn5" },
        { modalId: "sixthSquareModal", buttonId: "readMoreBtn6" },
        { modalId: "seventhSquareModal", buttonId: "readMoreBtn7" },
        { modalId: "eighthSquareModal", buttonId: "readMoreBtn8" },
        { modalId: "ninthSquareModal", buttonId: "readMoreBtn9" },
        { modalId: "tenthSquareModal", buttonId: "readMoreBtn10" },
        { modalId: "eleventhSquareModal", buttonId: "readMoreBtn11" }
      ];
  
      // Loop through each modal configuration
      modalConfig.forEach(({ modalId, buttonId }) => {
        const modal = document.getElementById(modalId);
        const button = document.getElementById(buttonId);
  
        // Check if both modal and button elements exist
        if (modal && button) {
          const closeBtn = modal.querySelector(".close-btn");
          const iframe = modal.querySelector("iframe");
  
          // Function to restart the video (autoplay and mute)
          function restartVideo() {
            const videoSrc = iframe.src.split('?')[0]; // Get the base URL of the iframe src
            iframe.src = `${videoSrc}?autoplay=1&mute=1`; // Set autoplay and mute parameters
          }
  
          // Open modal on button click
          button.addEventListener("click", function () {
            modal.style.display = "flex";
            restartVideo(); // Restart and mute the video when the modal is opened
          });
  
          // Close modal on close button click
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            iframe.src = iframe.src.split('?')[0]; // Remove query params, keeping the base URL
          });
  
          // Close modal on outside click
          window.addEventListener("click", function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
              iframe.src = iframe.src.split('?')[0]; // Remove query params when closed from outside
            }
          });
        }
      });
    }
  });
 