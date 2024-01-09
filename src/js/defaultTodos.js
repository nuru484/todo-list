// Imports the other modules of the project
import { TodoList, setTodosInLocalStorage } from "./todo.js";

// Create an instance of the TodoList class in the todo.js module
const todoList = new TodoList();

// Define an array of default todos
const defaultTodos = [
  {
    title: "Default Todo 1",
    description: "This is the first default todo.",
    dueDate: new Date(),
    priority: "High",
    project: "Inbox",
  },
  {
    title: "Default Todo 2",
    description: "This is the second default todo.",
    dueDate: new Date(),
    priority: "Medium",
    project: "Inbox",
  },

  {
    title: "Default Todo 3",
    description: "This is the third default todo.",
    dueDate: new Date(),
    priority: "Medium",
    project: "New Project",
  },
  {
    title: "Default Todo 4",
    description: "This is the fouth default todo.",
    dueDate: "2024-01-01",
    priority: "Medium",
    project: "Personal",
  },
  // Add more default todos as needed
];

// Define an array of default projects
const defaultProjects = [
  "New Project",
  "Work",
  "Personal" /* Add more default projects */,
];

// Function to initialize default todos and projects
const initializeDefaultData = () => {
  // Check if there are already todos and projects in local storage
  const storedTodosString = localStorage.getItem("todos");
  const storedTodos = JSON.parse(storedTodosString) || [];

  const storedProjectsString = localStorage.getItem("projects");
  const storedProjects = JSON.parse(storedProjectsString) || [];

  // If no todos are stored, create default todos
  if (storedTodos.length === 0) {
    defaultTodos.forEach((defaultTodo) => {
      const { title, description, dueDate, priority, project } = defaultTodo;
      todoList.createTodo(title, description, dueDate, priority, project);
    });

    // Update local storage with the default todos
    setTodosInLocalStorage(todoList.todos);
  }

  // If no projects are stored, create default projects
  if (storedProjects.length === 0) {
    storedProjects.push(...defaultProjects);
    localStorage.setItem("projects", JSON.stringify(storedProjects));
  }
};

// Call the function to initialize default todos and projects
initializeDefaultData();
