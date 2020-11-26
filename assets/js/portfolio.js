// let projectDivEl = document.getElementById("project-row");

// let projectCardEl = document.createElement("div")
// .setAttribute("class","card");
// let projectFigureEl = document.createElement("figure")
// .setAttribute("class","figure card-img-top");
// let projectCardImgEl = document.createElement("img")
// .setAttribute("class","rounded mx-auto d-block img-fluid img-thumbnail imgsize portfolio-img");
// let projectCardBodyEl = document.createElement("div")
// .setAttribute("class","card-body");
// let projectCardTitleEl = document.createElement("h5")
// .setAttribute("class","card-title");
// let projectCardTextEl = document.createElement("p")
// .setAttribute("class","card-text");
// let projectCardFooterEl = document.createElement("div")
// .setAttribute("class","card-footer m-auto");
// let projectCardButtonGroupEl = document.createElement("div")
// .setAttribute("class","btn-group m-auto");
// let projectCardGitHubButtonEl = document.createElement("a")
// .setAttribute("class","btn btn-secondary active mr-1");
// let projectCardGitHubIconEl = document.createElement("i")
// .setAttribute("class","fa fa-github");
// let projectCardWebsiteIconEl = document.createElement("i")
// .setAttribute("class","fa fa-globe");
// let projectCardWebsiteButtonEl = document.createElement("a")
// .setAttribute("class","btn btn-secondary active mr-1");

// const renderProjects = (projectsObj) => {
    
//     projectCardButtonGroupEl.setAttribute("role","group");
//     projectCardButtonGroupEl.setAttribute("aria-label","Project Buttons");
//     projectCardGitHubButtonEl.innerText("GitHub");
//     projectCardWebsiteButtonEl.innerText("Website");

//     projectFigureEl.appendChild(projectCardImgEl);

//     projectCardEl.appendChild(projectFigureEl);
//     projectCardEl.appendChild(projectCardBodyEl);
//     projectCardEl.appendChild(projectCardFooterEl);

//     projectCardBodyEl.appendChild(projectCardTitleEl);
//     projectCardBodyEl.appendChild(projectCardTextEl);

//     projectCardFooterEl.appendChild(projectCardButtonGroupEl);
//     projectCardButtonGroupEl.appendChild(projectCardGitHubButtonEl);
//     projectCardButtonGroupEl.appendChild(projectCardWebsiteButtonEl);

//     projectCardGitHubButtonEl.appendChild(projectCardGitHubIconEl);
//     projectCardWebsiteButtonEl.appendChild(projectCardWebsiteIconEl);


//     for (const project in projectsObj) {
//         projectCardTitleEl.innerText(projectsObj[project].title);
//         projectDivEl.appendChild(projectCardEl);
//         console.log(projectsObj[project].title);
//     }
// }

// renderProjects(projectsObj);