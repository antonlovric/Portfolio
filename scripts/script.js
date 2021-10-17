const projectMask = document.querySelector(".projectMask");
const projectGroup = document.querySelector(".projectGroup");
const projectOverlays = document.querySelectorAll(".projectOverlay");

let direction;
projectOverlays.forEach((overlay) => {
  overlay.addEventListener("click", function () {
    handleOverlayStatus(overlay);
  });
});

function enableButtons(overlay) {
  const buttons = overlay.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function disableButtons(overlay) {
  const buttons = overlay.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function showOverlay(overlay) {
  overlay.classList.add("showOverlay");
  overlay.classList.remove("hideOverlay");
  enableButtons(overlay);
}

function hideOverlay(overlay) {
  overlay.classList.add("hideOverlay");
  overlay.classList.remove("showOverlay");
  disableButtons(overlay);
}

function handleOverlayStatus(overlay) {
  if (overlay.classList.contains("showOverlay")) {
    hideOverlay(overlay);
  } else showOverlay(overlay);
}
document.querySelector(".arrowLeft").addEventListener("click", function () {
  if (direction == -1) {
    direction = 1;
    projectMask.appendChild(projectMask.firstElementChild);
  }
  projectGroup.style.justifyContent = "flex-end";
  projectMask.style.transform = "translate(25%)";
});
document.querySelector(".arrowRight").addEventListener("click", function () {
  direction = -1;
  projectGroup.style.justifyContent = "flex-start";
  projectMask.style.transform = "translate(-25%)";
});

projectMask.addEventListener(
  "transitionend",
  function () {
    if (direction == 1) {
      projectMask.prepend(projectMask.lastElementChild);
    } else {
      projectMask.appendChild(projectMask.firstElementChild);
    }
    projectMask.style.transition = "none";
    projectMask.style.transform = "translate(0)";
    setTimeout(() => {
      projectMask.style.transition = "all 1s";
    });
  },
  false
);

import * as myModule from "./intersectionObserver.js";

window.addEventListener(
  "load",
  (event) => {
    myModule.initializeObserver();
  },
  false
);
