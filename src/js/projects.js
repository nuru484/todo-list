import { TodoList } from "./todo";

const todoList = new TodoList();

const projectsContainer = document.getElementById("projects-container");

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", () => {
  const projectName = prompt(`Enter the project name:`);

  todoList.createProject(projectName);

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

    // Add event listener to remove the project when 'X' is clicked
    deleteProject.addEventListener("click", () => {
      removeProject(projectName);
    });

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

const removeProject = (projectName) => {
  // Remove the project from the TodoList
  todoList.removeProject(projectName);
};
