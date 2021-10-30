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

swiper.on("slideChange", updateProjectTitle);

function updateProjectTitle() {
  const index = swiper.realIndex;
  const projectTitle = document.querySelector(".projectTitle");
  switch (index) {
    case 0:
      projectTitle.innerText = "Alojzije Janković Project";
      break;

    case 1:
      projectTitle.innerText = "BMI Calculator";
      break;
    case 2:
      projectTitle.innerText = "Portfolio Website";
      break;
    case 3:
      projectTitle.innerText = "Sunnyside Agency Landing Page";
      break;
    case 4:
      projectTitle.innerText = "freeCodeCamp Certification";
      break;
    case 5:
      projectTitle.innerText = "MOOC Certification";
      break;
  }
}

const target = document.querySelector("#bio");

function handleIntersection(entries) {
  console.log(entries);
  const header = document.querySelector(".navbar");
  console.log(header);
  entries.forEach((entry) => {
    if (entry.isIntersecting == true) {
      header.classList.add("grayBackground");
    } else {
      header.classList.remove("grayBackground");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px 0px -80% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(target);
