var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "bulletActive",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  // slidesPerView: "auto",
  spaceBetween: 30,
});

const overlays = document.querySelectorAll(".projectOverlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", function () {
    toggleOverlay(overlay);
  });
});

function refreshButtons(buttons, show) {
  if (show) {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  } else {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function toggleOverlay(overlay) {
  overlay.classList.toggle("showOverlay");
  const buttons = overlay.querySelectorAll("button");
  if (overlay.classList.contains("showOverlay")) {
    refreshButtons(buttons, true);
  } else refreshButtons(buttons, false);
}
