// Imports the other modules of the project
import { TodoList, setTodosInLocalStorage, Todo } from "./todo.js";
import { validateForm } from "./validation.js";
import "../assets/refresh.png";
import "../assets/delete.png";

// Create an in of the TodoList class in the todo.js module
const todoList = new TodoList();

// A function to grab the value of the properties of a todo
const todoProperty = () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("date");
  const priority = document.getElementById("priority");

  // Returns the value of title and all the properties
  return { title, description, dueDate, priority };
};

let currentProject = "Inbox";

// Creates a todo by calling the todoList.createTodo method to create todos
const createTodo = (currentProject) => {
  const todoProperties = todoProperty();

  if (currentProject === "Inbox") {
    todoList.createTodo(
      todoProperties.title.value,
      todoProperties.description.value,
      todoProperties.dueDate.value,
      todoProperties.priority.value,
      currentProject
    );

    todosFunction();

    // Runs the todosFunction everytime a new todo is created
  } else {
    // Handle project-specific todos if needed
    todoList.createTodo(
      todoProperties.title.value,
      todoProperties.description.value,
      todoProperties.dueDate.value,
      todoProperties.priority.value,
      currentProject
    );

    //Runs projectTodos for a particular project apart from inbox
    projectTodos(currentProject);
  }
};

const updateTodoFunction = (todo, currentProject) => {
  const todoPropertiesUpdate = todoProperty();

  if (currentProject === "inbox") {
    todo.updateProperties(
      todoPropertiesUpdate.title.value,
      todoPropertiesUpdate.description.value,
      todoPropertiesUpdate.dueDate.value,
      todoPropertiesUpdate.priority.value,
      todo.project
    );

    setTodosInLocalStorage(todo);
    todosFunction();
  } else {
    todo.updateProperties(
      todoPropertiesUpdate.title.value,
      todoPropertiesUpdate.description.value,
      todoPropertiesUpdate.dueDate.value,
      todoPropertiesUpdate.priority.value,
      todo.project
    );

    setTodosInLocalStorage(todo);
    projectTodos(currentProject);
  }
};

let isFormVisible = false;

// function to toggle the
export const showForm = () => {
  isFormVisible = !isFormVisible;

  if (isFormVisible) {
    todoDetailsFormContainer.classList.add("todo-form-show");
    todoDetailsFormContainer.classList.remove("todo-form-container");
  } else {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
  }
};

//show only the add task-button when the add task button

const showAddTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "block";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "none";
};

//show the only the when the update button is clicked

const showUpdateTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "none";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "block";
};

//Brings up the form to add a  todo
const addTodoButton = document.getElementById("add-todo-button");
addTodoButton.addEventListener("click", (event) => {
  showAddTaskButton();
  showForm(event);
});

// Stops the propagation of the showform function within the form, so clicking on the form will not dissappear it
export const form = document.getElementById("my-form");
form.addEventListener("click", (event) => {
  event.stopPropagation();
});

export const toggleForm = () => {
  if (isFormVisible) {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
    isFormVisible = false;
  }
};
// Toggles the form visibility when you click on this container, which covers the whole screen, except only on parts of the form
const todoDetailsFormContainer = document.getElementById("my-form-container");
todoDetailsFormContainer.addEventListener("click", () => {
  toggleForm();
});

function updateTodoTitleStyle(todo, todoTitle) {
  if (todo.completed === true) {
    todoTitle.style.textDecoration = "line-through";
  } else {
    todoTitle.style.textDecoration = "none";
  }
}

// function to toggle todo details
const toggleTodoDetails = (event, index) => {
  const todoContainer = event.currentTarget.parentElement;

  // Find the existing detail container for the clicked todo
  const existingDetailContainer = document.getElementById(
    `todo-detail-${index}`
  );

  if (existingDetailContainer) {
    // If the container exists, remove it to hide the details
    todoContainer.classList.toggle("active");
    existingDetailContainer.remove();
  } else {
    // If the container doesn't exist, create and append it inside the todo container
    todoContainer.classList.toggle("active");

    const todoDetailContainer = document.createElement("div");
    todoDetailContainer.classList.add("todo-detail-container");
    todoDetailContainer.id = `todo-detail-${index}`; // Use an id to identify the container

    const todoTitle = document.createElement("p");
    todoTitle.append(`Title: ${todoList.todos[index].title}`);

    const todoDescription = document.createElement("p");
    todoDescription.append(`Description: ${todoList.todos[index].description}`);

    const todoDuedate = document.createElement("p");
    todoDuedate.append(`Duedate: ${todoList.todos[index].dueDate}`);

    const todoPriority = document.createElement("p");
    todoPriority.append(`Priority: ${todoList.todos[index].priority}`);

    todoDetailContainer.append(
      todoTitle,
      todoDescription,
      todoDuedate,
      todoPriority
    );

    // Append the details container inside the todo container
    todoContainer.append(todoDetailContainer);
  }
};

let selectedTodoIndex;

const todoElements = (todo, i) => {
  const todoContainer = document.createElement("div"); // Container for each todo
  todoContainer.classList.add("todo-container"); //  class for styling if needed
  todoContainer.dataset.index = i;

  const todoTitle = document.createElement("p");
  todoTitle.append(todo.title);
  todoTitle.addEventListener("click", (event) => {
    toggleTodoDetails(event, i);
  });

  const todoComplete = document.createElement("input");
  todoComplete.type = "checkbox";
  todoComplete.style.width = "15px";
  todoComplete.checked = todo.completed;

  updateTodoTitleStyle(todo, todoTitle);

  todoComplete.addEventListener("change", () => {
    todo.toggleCompleted(); // Toggle the completion state
    updateTodoTitleStyle(todo, todoTitle);
    setTodosInLocalStorage(todoList.todos);
  });

  const deleteTodo = document.createElement("img");
  deleteTodo.src = "./assets/delete.png";
  deleteTodo.style.width = "20px";
  deleteTodo.addEventListener("click", () => {
    todoList.todos.splice(i, 1);
    setTodosInLocalStorage(todoList.todos);
    todoContainer.remove(); // Remove the todo container from the DOM
    todosFunction();
  });

  const updateTodo = document.createElement("img");
  updateTodo.src = "./assets/refresh.png";
  updateTodo.style.width = "25px";
  updateTodo.addEventListener("click", () => {
    showUpdateTaskButton();
    showForm();

    selectedTodoIndex = event.currentTarget.parentElement.dataset.index;
  });

  todoContainer.append(todoComplete, todoTitle, deleteTodo, updateTodo);

  return todoContainer;
};

const todosFunction = () => {
  const activeContainer = document.getElementById("active-container");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const todoInToday = document.getElementById("todos-in-today");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todosInInbox.innerHTML = "";
  todoInToday.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const inboxHeading = document.createElement("p");
  inboxHeading.id = "inbox-todos-heading";
  inboxHeading.textContent = "Inbox";
  activeContainer.append(inboxHeading);

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];

    if (todo.project === "Inbox") {
      const todoElementsFromFunc = todoElements(todo, i);
      todosInInbox.append(todoElementsFromFunc);
    }
  }
  todosInInbox.append(addTodoButton);
};

// submit button when the add task button is clicked
document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  if (!validateForm()) {
    return false;
  }
  createTodo(currentProject);
  form.reset();
  toggleForm();
});

document.getElementById("update-task").addEventListener("click", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return false;
  }
  // Use the stored index to call updateTodoFunction
  if (selectedTodoIndex !== undefined) {
    const todo = todoList.todos[selectedTodoIndex];
    updateTodoFunction(todo, currentProject);
  }
  toggleForm();
});

const todayTodos = () => {
  const activeContainer = document.getElementById("active-container");
  const todoInToday = document.getElementById("todos-in-today");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todoInToday.innerHTML = "";
  todosInInbox.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const todayHeading = document.createElement("p");
  todayHeading.id = "today-todos-heading";
  todayHeading.textContent = "Today";
  activeContainer.append(todayHeading);

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];
    const todoDueDate = new Date(todo.dueDate).toISOString().split("T")[0];

    if (todoDueDate === todayFormatted && todoList.todos.includes(todo)) {
      const todoElementsFromFunc = todoElements(todo, i);
      todoInToday.append(todoElementsFromFunc);
    }
  }
};

// Calls the todayTodos function when the today tab is active
const todayTodoContainer = document.getElementById("today-container");
todayTodoContainer.addEventListener("click", () => {
  todayTodos();
});

// Calls the todosFunction when the inbox tab is active
const inboxTodoContainer = document.getElementById("inbox-container");
inboxTodoContainer.addEventListener("click", () => {
  currentProject = "Inbox";
  todosFunction();
});

//Projects section of the app code starts here

// Displays the input fields for project name
const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", () => {
  // const projectName = prompt(`Enter the project name:`);

  const projectNameInput = document.getElementById("project-name-id");
  projectNameInput.style.display = "block";

  submitProjectName.style.display = "block";

  cancelProjectName.style.display = "block";
});

const displayProjectName = () => {
  const projectsContainer = document.getElementById("projects-container");

  const projectNameInput = document.getElementById("project-name-id");
  const projectName = projectNameInput.value;

  if (projectName) {
    // Retrieve existing projects from localStorage
    const storedProjectsString = localStorage.getItem("projects");
    const storedProjects = JSON.parse(storedProjectsString) || [];

    // Check if the project name already exists
    const projectExists = storedProjects.some(
      (project) => project === projectName
    );

    if (!projectExists) {
      // Add the new project to the stored projects
      storedProjects.push(projectName);

      // Update the projects in localStorage
      localStorage.setItem("projects", JSON.stringify(storedProjects));

      // Clear existing content in projectsContainer
      projectsContainer.innerHTML = "";

      storedProjects.forEach((currentValue, index, array) => {
        const newProjectContainer = document.createElement("div");
        newProjectContainer.classList.add("project-container");

        const newProjectName = document.createElement("p");
        newProjectName.textContent = currentValue;

        newProjectContainer.addEventListener("click", () => {
          currentProject = currentValue;
          projectTodos(currentProject);
          console.log(currentProject);
        });

        const deleteProject = document.createElement("img");
        deleteProject.src = "./assets/delete.png";
        deleteProject.style.width = "20px";

        deleteProject.addEventListener("click", (event) => {
          newProjectContainer.remove();

          // Remove the project from stored projects
          for (let i = 0; i < storedProjects.length; i++) {
            const project = storedProjects[i];
            storedProjects.splice(i, 1);
          }

          localStorage.setItem("projects", JSON.stringify(storedProjects));

          // Remove todos related to the deleted project
          for (let i = 0; i < todoList.todos.length; i++) {
            const todo = todoList.todos[i];
            if (todo.project === currentValue) {
              todoList.todos.splice(i, 1);
              setTodosInLocalStorage(todoList.todos);
            }
          }
          event.stopPropagation();
          todosFunction();
        });
        newProjectContainer.append(newProjectName, deleteProject);
        projectsContainer.append(newProjectContainer);
      });

      // Reset the input and turn the display of it and the submit button off after adding
      projectNameInput.value = "";
      projectNameInput.style.display = "none";
      submitProjectName.style.display = "none";
      cancelProjectName.style.display = "none";
    } else {
      alert("Project with the same name already exists!");
    }
  }
};

// Function to display projects from local storage on page load
const displayStoredProjects = () => {
  const projectsContainer = document.getElementById("projects-container");

  // Retrieve existing projects from localStorage
  const storedProjectsString = localStorage.getItem("projects");
  const storedProjects = JSON.parse(storedProjectsString) || [];

  storedProjects.forEach((currentValue, index, array) => {
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("project-container");

    const newProjectName = document.createElement("p");
    newProjectName.textContent = currentValue;

    newProjectContainer.addEventListener("click", () => {
      currentProject = currentValue;
      projectTodos(currentValue);
    });

    const deleteProject = document.createElement("img");
    deleteProject.src = "./assets/delete.png";
    deleteProject.style.width = "20px";

    deleteProject.addEventListener("click", (event) => {
      newProjectContainer.remove();

      // Remove the project from stored projects
      for (let i = 0; i < storedProjects.length; i++) {
        storedProjects.splice(i, 1);
      }

      localStorage.setItem("projects", JSON.stringify(storedProjects));

      // Remove todos related to the deleted project
      for (let i = 0; i < todoList.todos.length; i++) {
        const todo = todoList.todos[i];
        if (todo.project === currentValue) {
          todoList.todos.splice(i, 1);
          setTodosInLocalStorage(todoList.todos);
        }
      }
      event.stopPropagation();
      todosFunction();
    });

    newProjectContainer.append(newProjectName, deleteProject);
    projectsContainer.append(newProjectContainer);
  });
};

// Call the function to display stored projects on page load
displayStoredProjects();

//Event listener to the submit project name button that calls the display project name function
const submitProjectName = document.getElementById("submit-project-name");
submitProjectName.addEventListener("click", () => {
  displayProjectName();
});

const cancelProjectName = document.getElementById("cancel-project-name");
cancelProjectName.addEventListener("click", () => {
  const projectNameInput = document.getElementById("project-name-id");
  projectNameInput.value = "";
  projectNameInput.style.display = "none";
  submitProjectName.style.display = "none";
  cancelProjectName.style.display = "none";
});

// Function to add todos under a project
const projectTodos = (projectName) => {
  const activeContainer = document.getElementById("active-container");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const todoInToday = document.getElementById("todos-in-today");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer, todosInInbox, todoInToday, and todoInNewProject
  activeContainer.innerHTML = "";
  todosInInbox.innerHTML = "";
  todoInToday.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const projectHeading = document.createElement("p");
  projectHeading.id = "project-todos-heading";
  projectHeading.textContent = projectName;
  activeContainer.append(projectHeading);

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];

    if (todo.project === projectName) {
      const todoElementsFromFunc = todoElements(todo, i);
      projectsContainerElement.append(todoElementsFromFunc);
    }
  }
  projectsContainerElement.append(addTodoButton);
};

// Calling the todos function to render existing todos on page load
todosFunction();
