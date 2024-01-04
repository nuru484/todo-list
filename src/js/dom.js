// Imports the other modules of the project
import { createDynamicClassForProject, TodoList } from "./todo";

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

// Creates a todo by calling the todoList.createTodoForInbox method to create todos for the inbox
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

    // Runs the todosFunction everytime a new todo is created
    todosFunction();
  } else {
    // Handle project-specific todos if needed
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

const todosFunction = () => {
  const activeContainer = document.getElementById("active-container");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const todoInToday = document.getElementById("todos-in-today");

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todosInInbox.innerHTML = "";
  todoInToday.innerHTML = "";

  const inboxHeading = document.createElement("p");
  inboxHeading.id = "inbox-todos-heading";
  inboxHeading.textContent = "Inbox";
  activeContainer.append(inboxHeading);

  todoList.todos.forEach((value, index, array) => {
    const todoContainer = document.createElement("div"); // Container for each todo
    todoContainer.classList.add("todo-container"); //  class for styling if needed

    const todoTitle = document.createElement("p");
    todoTitle.append(todoList.todos[index].title);
    todoTitle.addEventListener("click", (event) => {
      toggleTodoDetails(event, index);
    });

    const deleteTodo = document.createElement("p");
    deleteTodo.textContent = "delete";
    deleteTodo.addEventListener("click", () => {
      array.splice(index, 1);
      todoContainer.remove(); // Remove the todo container from the DOM
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

          todoList.todos[index].updateProperties(
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
    todosInInbox.append(todoContainer);
  });
};

// submit button when the add task button is clicked

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  createTodo(currentProject);
  form.reset();
  toggleForm();
});

const toggleTodoDetails = (event, index) => {
  const todoContainer = event.currentTarget.parentElement;

  // Find the existing detail container for the clicked todo
  const existingDetailContainer = document.getElementById(
    `todo-detail-${index}`
  );

  if (existingDetailContainer) {
    // If the container exists, remove it to hide the details
    existingDetailContainer.remove();
  } else {
    // If the container doesn't exist, create and append it inside the todo container
    const todoDetailContainer = document.createElement("div");
    todoDetailContainer.classList.add("todo-detail-container");
    todoDetailContainer.id = `todo-detail-${index}`; // Use an id to identify the container

    const todoTitle = document.createElement("p");
    todoTitle.append(todoList.todos[index].title);

    const todoDescription = document.createElement("p");
    todoDescription.append(todoList.todos[index].description);

    const todoDuedate = document.createElement("p");
    todoDuedate.append(todoList.todos[index].dueDate);

    const todoPriority = document.createElement("p");
    todoPriority.append(todoList.todos[index].priority);

    todoDetailContainer.append(
      todoTitle,
      todoDescription,
      todoDuedate,
      todoPriority
    );

    // Append the details container inside the todo container
    todoContainer.appendChild(todoDetailContainer);
  }
};

const todayTodos = () => {
  const activeContainer = document.getElementById("active-container");
  const todoInToday = document.getElementById("todos-in-today");
  const todosInInbox = document.getElementById("todos-in-inbox");

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todoInToday.innerHTML = "";
  todosInInbox.innerHTML = "";

  const todayHeading = document.createElement("p");
  todayHeading.id = "today-todos-heading";
  todayHeading.textContent = "Today";
  activeContainer.append(todayHeading);

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  todoList.todosForInbox.forEach((todo, index, array) => {
    const todoDueDate = new Date(todo.dueDate).toISOString().split("T")[0];

    if (todoDueDate === todayFormatted) {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");

      const todoTitle = document.createElement("p");
      todoTitle.append(todo.title);
      todoTitle.addEventListener("click", (event) => {
        toggleTodoDetails(event, index);
      });

      const deleteTodo = document.createElement("p");
      deleteTodo.textContent = "delete";
      deleteTodo.addEventListener("click", () => {
        array.splice(index, 1);
        todoContainer.remove();
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

            todoList.todos[index].updateProperties(
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
      todoInToday.append(todoContainer);
    }
  });
};
// Calls the todayTodos function when the today tab is active
const todayTodoContainer = document.getElementById("today-container");
todayTodoContainer.addEventListener("click", () => {
  currentProject = "Inbox";
  todayTodos();
});

// Calls the todosFunction when the inbox tab is active
const inboxTodoContainer = document.getElementById("inbox-container");
inboxTodoContainer.addEventListener("click", () => {
  todosFunction();
});

//starts here for projects

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
      currentProject = projectName;

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

  // Filter todos based on the selected project
  const projectTodos = todoList.todos.filter(
    (todo) => todo.project === projectName
  );

  projectTodos.forEach((todo, index) => {
    // Display project-specific todos as needed
  });
};
