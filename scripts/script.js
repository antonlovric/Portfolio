document.querySelector(".arrowLeft").addEventListener("click", function () {
  determinePreviousProject();
});
document.querySelector(".arrowRight").addEventListener("click", function () {
  determineNextProject();
});

function setProjectData(nextProjectNumber) {
  let title, description, demoLink, githubLink, image;
}
function determinePreviousProject() {}

function determineNextProject() {
  const currentProject = document.querySelector(".projectTitle");
  const title = currentProject.innerText;
  let nextProjectData;
  switch (title) {
    case "Alojzije Janković Website":
      nextProjectData = setProjectData(2);
      break;
    case "BMI Calculator":
      nextProjectData = setProjectData(3);
      break;
    case "Portfolio Website":
      nextProjectData = setProjectData(4);
      break;
    case "freeCodeCamp Course Certificate":
      nextProjectData = setProjectData(6);
      break;
    case "MOOC Course Certificate":
      nextProjectData = setProjectData(1);
      break;
  }
}
