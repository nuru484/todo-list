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
  // Add more default todos as needed
];

// Function to initialize default todos
const initializeDefaultTodos = () => {
  // Check if there are already todos in local storage
  const storedTodosString = localStorage.getItem("todos");
  const storedTodos = JSON.parse(storedTodosString) || [];

  // If no todos are stored, create default todos
  if (storedTodos.length === 0) {
    defaultTodos.forEach((defaultTodo) => {
      todoList.createTodo(
        defaultTodo.title,
        defaultTodo.description,
        defaultTodo.dueDate,
        defaultTodo.priority,
        defaultTodo.project
      );
    });

    // Update local storage with the default todos
    setTodosInLocalStorage(todoList.todos);
  }
};

// Call the function to initialize default todos
initializeDefaultTodos();
