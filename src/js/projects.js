import { addTodoButton, todoProperty } from "./dom";
import { Todo, TodoList } from "./todo";

const todoList = new TodoList();

const createTodo = () => {
  // Store the returned values of the todoProperty function
  const todoProperties = todoProperty();

  // Use the stored project name
  const aTodo = todoList.createTodoForProject(
    currentProjectName,
    todoProperties.title.value,
    todoProperties.description.value,
    todoProperties.dueDate.value,
    todoProperties.priority.value
  );

  // Runs the todosFunction every time a new todo is created
  displayTodosInProject(currentProjectName);

  return aTodo;
};

let currentProjectName;

const projectsContainer = document.getElementById("projects-container");

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", () => {
  const projectName = prompt(`Enter the project name:`);

  currentProjectName = projectName;

  todoList.createProject(currentProjectName);

  if (projectName) {
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("project-container");

    const newProjectName = document.createElement("p");
    newProjectName.textContent = projectName;

    // Add event listener to display todos when the project is clicked
    newProjectContainer.addEventListener("click", () => {
      projectTodos(currentProjectName);
    });

    const deleteProject = document.createElement("p");
    deleteProject.textContent = "X";

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
  activeContainer.append(projectHeading, addTodoButton);
};

const displayTodosInProject = (currentProjectName) => {
  projectTodos(currentProjectName);

  const activeContainer = document.getElementById("active-container");

  currentProjectName.todos.forEach((todo, index, array) => {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const todoTitle = document.createElement("p");
    todoTitle.append(todo.title);
    todoTitle.addEventListener("click", (event) => {
      // toggleTodoDetails(event, index);
    });

    const deleteTodo = document.createElement("p");
    deleteTodo.textContent = "delete";
    deleteTodo.addEventListener("click", () => {
      array.splice(index, 1);
      todoContainer.remove();
      console.log(project.todos);
    });

    const updateTodo = document.createElement("p");
    updateTodo.textContent = "update";
    updateTodo.addEventListener("click", (event) => {
      showUpdateTaskButton();
      showForm(event);

      const todoPropertiesUpdate = todoProperty();

      document
        .getElementById("update-task")
        .addEventListener("click", (event) => {
          event.preventDefault();

          currentProjectName.todos[index].updateProperties(
            todoPropertiesUpdate.title.value,
            todoPropertiesUpdate.description.value,
            todoPropertiesUpdate.dueDate.value,
            todoPropertiesUpdate.priority.value
          );
          toggleForm();
          form.reset();
        });
    });

    todoContainer.append(todoTitle, deleteTodo, updateTodo);
    activeContainer.append(todoContainer);
  });
};
