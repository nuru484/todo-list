const projectsContainer = document.getElementById("projects-container");

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", () => {
  const projectName = prompt(`Enter the project name:`);

  if (projectName) {
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("project-container");

    const newProjectName = document.createElement("p");
    newProjectName.textContent = projectName;

    // Add event listener to display todos when the project is clicked
    newProjectContainer.addEventListener("click", () => {
      projectTodos(projectName);
    });

    const deleteProject = document.createElement("p");
    deleteProject.textContent = "X";

    const newProject = document.createElement("div");
    newProject.id = projectName;
    const mainContent = document.getElementById("main-content");
    mainContent.append(newProject);

    newProjectContainer.append(newProjectName, deleteProject);
    projectsContainer.append(newProjectContainer);
  }
});

const projectTodos = (projectName) => {
  const activeContainer = document.getElementById("active-container");
  activeContainer.innerHTML = "";

  const projectHeading = document.createElement("p");
  projectHeading.id = "project-todos-heading";
  projectHeading.textContent = projectName;
  activeContainer.append(projectHeading);
};
