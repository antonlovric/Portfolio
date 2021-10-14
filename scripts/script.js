document.querySelector(".arrowLeft").addEventListener("click", function () {
  determinePreviousProject();
});
document.querySelector(".arrowRight").addEventListener("click", function () {
  determineNextProject();
});

function setProjectData(nextProjectNumber) {
  let title, description, demoLink, githubLink, image, certificationLink;
  switch (nextProjectNumber) {
    case 1:
      title = "Alojzije Janković Website";
      description =
        "This is a website made for Croatian chess grandmaster Alojzije Janković. It was a lengthy project but making it was a lot of fun anyways. I used an external API called AbChess (thanks to the creator!) that helped a lot about the display and functionality of a chess board. The website includes multiple web pages and I used technologies like SASS, JavaScript Modules and Dynamic Module Loading for the first time while building this project. It is written completely in Croatian but I hope you like it nonetheless!";
      demoLink =
        "https://antonlovric.github.io/AlojzijeJankovicWebsite/pages/index.html";
      githubLink = "https://github.com/antonlovric/AlojzijeJankovicWebsite";
      image = "../images/alojzijeJankovicProject.jpg";
      break;
    case 2:
      title = "BMI Calculator";
      description =
        "This website has a very simple function. After the user inputs their height and weight their BMI (Body Mass Index) gets calculated and they get appropriate feedback. The feedback gives some tips how the user can improve their health and what they should do. This project was made with the help of an external library called progressbarjs but everything else was made in pure HTML, CSS and JavaScript.";
      demoLink = "https://antonlovric.github.io/Portfolio/";
      githubLink = "https://github.com/antonlovric/Portfolio";
      image = "../images/bmiProject.jpg";
      break;
    case 3:
      title = "Portfolio Website";
      description =
        "Here you can see the process of making this portfolio website! Making it was very fun and I took inspiration from a task I got from the freeCodeCamp Web Design course. It started as a pure HTML, CSS and JS project but at the end I implemented SASS. It helped a lot with the organization and optimisation of the CSS. It will always be updated with new project and features, so keep an eye out! ;)";
      demoLink = "https://antonlovric.github.io/Portfolio/";
      githubLink = "https://github.com/antonlovric/BMI";
      image = "../images/portfolioProject.jpg";
      break;
    case 4:
      title = "freeCodeCamp Course Certificate";
      description =
        "The freeCodeCamp Responsive Web Design course was detrimental to my start as a front end developer. It gave me a good introduction to front end development and gave me motivation to build on the knowledge I got from this course. Later on I finally built out the projects required for certification and you can see them by clicking on the button below! It includes multiple projects including a tribute page, survey form, technical documentation page and product landing page. There you can see the task itself and my solution.";
      certificationLink =
        "https://www.freecodecamp.org/certification/antonlovric/responsive-web-design";

      image = "../images/portfolioProject.jpg";
      break;
  }
  return {
    title,
    description,
    demoLink,
    githubLink,
    image,
    certificationLink,
  };
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
      nextProjectData = setProjectData(1);
      break;
  }
  setupNextProject(nextProjectData);
}

function setupNextProject(nextProjectData) {}
