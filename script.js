let projectIndex = 0;
function nextProject () {
    let project, nextProject;
    switch(projectIndex){
        case 0:
            project = document.getElementById("JSDocs");
            nextProject = document.getElementById("productLandingPage");
            break;
        case 1:
            project = document.getElementById("productLandingPage");
            nextProject = document.getElementById("survey");
            break;
        case 2:
            project = document.getElementById("survey");
            nextProject = document.getElementById("codewars");
            break;
        case 3:
            project = document.getElementById("codewars");
            nextProject = document.getElementById("JSDocs");
            break;

    }
    project.style.visibility = "collapse";
    nextProject.style.visibility = "visible";
    projectIndex++;
    if (projectIndex > projects.length -1) projectIndex = 0;
}