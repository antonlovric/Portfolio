// let projectIndex = 0;

// function setImage(image, url) {
//   image.src = url;
// }

// function setDesc(element, description) {
//   element.innerHTML = description;
// }

// function nextProject() {
//   let projectImage, projectDesc;

//   projectImage = document.getElementById("projectImage");
//   projectDesc = document.getElementById("projectDesc");
//   //slideAnimation();
//   switch (projectIndex) {
//     case 0:
//       setImage(projectImage, "productLanding.png");
//       setDesc(projectDesc, "Product Landing Page");

//       break;
//     case 1:
//       setImage(projectImage, "survey.png");
//       setDesc(projectDesc, "Survey Form");
//       break;
//     case 2:
//       setImage(projectImage, "codewars.png");
//       setDesc(projectDesc, "CodeWars link");
//       break;
//     case 3:
//       setImage(projectImage, "javascriptDocumentation.png");
//       setDesc(projectDesc, "Javascript Documentation");
//       break;
//   }
//   projectIndex++;
//   if (projectIndex > 3) projectIndex = 0;
// }

// function previousProject() {
//   let projectImage, projectDesc;
//   projectImage = document.getElementById("projectImage");
//   projectDesc = document.getElementById("projectDesc");

//   switch (projectIndex) {
//     case 0:
//       break;
//     case 1:
//       setImage(projectImage, "javascriptDocumentation.png");
//       setDesc(projectDesc, "Javascript Documentation");
//       break;
//     case 2:
//       setImage(projectImage, "productLanding.png");
//       setDesc(projectDesc, "Product Landing Page");

//       break;
//     case 3:
//       setImage(projectImage, "codewars.png");
//       setDesc(projectDesc, "CodeWars link");
//       break;
//   }

//   projectIndex--;
//   if (projectIndex < 0) projectIndex = 0;
// }

let projects = [false, false, false, false, false];

function firstProjectInteract(){
  if (projects[0] == false){
    document.getElementById("firstCover").style.height = "5em";
    
    document.getElementById("firstCover").style.fontSize = "0.5em";
    projects[0] = true;
  }else{
    document.getElementById("firstCover").style.height = "300px";
    document.getElementById("firstCover").style.fontSize = "1em";
    projects[0] = false;
  }
}




function secondProjectInteract(){
  if (projects[1] == false){
    document.getElementById("secondCover").style.height = "5em";
    
    document.getElementById("secondCover").style.fontSize = "0.5em";
    projects[1] = true;
  }else{
    document.getElementById("secondCover").style.height = "300px";
    document.getElementById("secondCover").style.fontSize = "1em";
    projects[1] = false;
  }
}


function thirdProjectInteract(){
  if (projects[2] == false){
    document.getElementById("thirdCover").style.height = "5em";
    
    document.getElementById("thirdCover").style.fontSize = "0.5em";
    projects[2] = true;
  }else{
    document.getElementById("thirdCover").style.height = "300px";
    document.getElementById("thirdCover").style.fontSize = "1em";
    projects[2] = false;
  }
}


function fourthProjectInteract(){
  if (projects[3] == false){
    document.getElementById("fourthCover").style.height = "5em";
    
    document.getElementById("fourthCover").style.fontSize = "0.5em";
    projects[3] = true;
  }else{
    document.getElementById("fourthCover").style.height = "300px";
    document.getElementById("fourthCover").style.fontSize = "1em";
    projects[3] = false;
  }
}

function evaluate(projectIndex) {
  switch (projectIndex) {
    case 0:
      firstProjectInteract();
      break;
    case 1:
      secondProjectInteract();
      break;
    case 2:
      thirdProjectInteract();
      break;
    case 3:
      fourthProjectInteract();
      break;
    case 4:
      fifthProjectInteract();
      break;

  }
}

document.getElementById("firstCover").addEventListener("click", function(){
  evaluate(0);
});
document.getElementById("secondCover").addEventListener("click", function(){
  evaluate(1);
});
document.getElementById("thirdCover").addEventListener("click", function(){
  evaluate(2);
});
document.getElementById("fourthCover").addEventListener("click", function(){
  evaluate(3);
});
