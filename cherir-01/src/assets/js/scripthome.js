window.addEventListener("DOMContentLoaded", () => {
  // modal variables
  const modal = document.querySelector("[data-modal]");
  const modalCloseBtn = document.querySelector("[data-modal-close]");
  const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

  // modal function
  const modalCloseFunc = function () {
    modal.classList.add("closed");
  };

  // modal eventListener
  modalCloseOverlay.addEventListener("click", modalCloseFunc);
  modalCloseBtn.addEventListener("click", modalCloseFunc);

  let currentItemIndex = 1; // Index of the currently displayed item
  let autoSlideInterval; // Interval ID for auto-slide

  function showItem(index) {
    // Hide all items inside the hero section
    document
      .querySelectorAll('.section[aria-label="hero"] .scrollbar-item')
      .forEach((item) => {
        item.style.display = "none";
      });

    // Show the selected item
    document.querySelector(
      `.section[aria-label="hero"] #item${index}`
    ).style.display = "block";
  }

  function changeItem(delta) {
    currentItemIndex += delta;

    // Get the total number of items
    const totalItems = document.querySelectorAll(
      '.section[aria-label="hero"] .scrollbar-item'
    ).length;

    // Wrap around if we go beyond the number of items
    if (currentItemIndex > totalItems) {
      currentItemIndex = 1;
    } else if (currentItemIndex < 1) {
      currentItemIndex = totalItems;
    }

    showItem(currentItemIndex);
  }

  function startAutoSlide() {
    // Set up an interval to change items every 3000 milliseconds (3 seconds)
    autoSlideInterval = setInterval(function () {
      changeItem(1);
    }, 2000); // Adjust the interval duration as needed
  }

  function stopAutoSlide() {
    // Clear the interval to stop auto-sliding
    clearInterval(autoSlideInterval);
  }

  // Show the initial item
  showItem(currentItemIndex);

  // Attach event listeners to the buttons
  document.getElementById("prev").addEventListener("click", function () {
    stopAutoSlide(); // Stop auto-slide when manual navigation is triggered
    changeItem(-1);
  });

  document.getElementById("next").addEventListener("click", function () {
    stopAutoSlide(); // Stop auto-slide when manual navigation is triggered
    changeItem(1);
  });

  // Start auto-slide when the page loads
  startAutoSlide();
});
