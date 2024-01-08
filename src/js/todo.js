export class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  // method to toggle completion state
  updateProperties(
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newProject
  ) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.project = newProject;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  // Static method to create a Todo instance from an object
  static fromObject(todoObject) {
    const todo = new Todo(
      todoObject.title,
      todoObject.description,
      todoObject.dueDate,
      todoObject.priority,
      todoObject.project
    );

    todo.completed = todoObject.completed;

    return todo;
  }
}

// Function to set todos to local storage
export const setTodosInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Function to get todos from local storage
const getTodosFromLocalStorage = () => {
  const todoObjects = JSON.parse(localStorage.getItem("todos")) || [];
  const todos = [];

  for (let i = 0; i < todoObjects.length; i++) {
    todos.push(Todo.fromObject(todoObjects[i]));
  }

  return todos;
};

export class TodoList {
  constructor() {
    this.todos = getTodosFromLocalStorage(); // Initialize with todos from local storage;
  }

  createTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority, project);
    this.todos.push(todo);
    setTodosInLocalStorage(this.todos); // Update local storage with the new todos
    return todo;
  }
}
