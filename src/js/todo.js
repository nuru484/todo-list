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
  }

  createTodoForInbox(title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority);
    this.todosForInbox.push(todo);
    return todo;
  }
}

export function createDynamicClassForProject() {
  class DynamicClassForProject {
    constructor() {
      this.todosForProject = [];
    }

    createTodoForProject(data) {
      const newObj = { data };
      this.dynamicArray.push(newObj);
      console.log("Object added to dynamicArray:", newObj);
    }
  }

  return DynamicClassForProject;
}
