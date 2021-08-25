let projectIndex = 0;

function setImage(image, url){
    image.src = url;
}

function setDesc(element, description){
    element.innerHTML = description;
}

function nextProject () {
    let projectImage, projectDesc;
    projectImage = document.getElementById("projectImage");
    projectDesc = document.getElementById("projectDesc");
    switch(projectIndex){
        case 0:
            
            setImage(projectImage, "productLanding.png");
            setDesc(projectDesc, "Product Landing Page");
            
            break;
        case 1:
            setImage(projectImage, "survey.png");
            setDesc(projectDesc, "Survey Form");
            break;
        case 2:
            setImage(projectImage, "codewars.png")
            setDesc(projectDesc, "CodeWars link");
            break;
        case 3:
            setImage(projectImage,"javascriptDocumentation.png")
            setDesc(projectDesc, "Javascript Documentation");
            break;

    }
    projectIndex++;
    if (projectIndex > 3) projectIndex = 0;
}

function previousProject(){
    
}