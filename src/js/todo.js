export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  updateProperties(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
  }
}

export class TodoList {
  constructor() {
    this.todosForInbox = [];
    this.projects = [];
  }

  createTodoForInbox(title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority);
    this.todosForInbox.push(todo);
    return todo;
  }
  createProject(projectName) {
    const project = { name: projectName, todos: [] };
    this.projects.push(project);
    return project;
  }

  createTodoForProject(projectName, title, description, dueDate, priority) {
    // Find the project by name
    const project = this.projects.find(
      (project) => project.name === projectName
    );

    if (project) {
      // If the project exists, create a todo for it
      const todo = new Todo(title, description, dueDate, priority);
      project.todos.push(todo);
      return todo;
    } else {
      // If the project doesn't exist, you may choose to handle this case accordingly
      console.error(`Project with name '${projectName}' not found.`);
      return null;
    }
  }
}
