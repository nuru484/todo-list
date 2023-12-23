import Projects from "./projects";
import "../css/style.css";
import { examp } from "./projects";

// class Todo {
//   constructor(title, description, dueDate, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//   }

//   updateProperties(newTitle, newDescription, newDueDate, newPriority) {
//     this.title = newTitle;
//     this.description = newDescription;
//     this.dueDate = newDueDate;
//     this.priority = newPriority;
//   }
// }

// class TodoList {
//   constructor() {
//     this.todosForInbox = [];
//     this.todosForProjects = [];
//   }

//   createTodoForInbox(title, description, dueDate, priority) {
//     const todo = new Todo(title, description, dueDate, priority);
//     this.todosForInbox.push(todo);
//     return todo;
//   }

//   createTodoForProjects(title, description, dueDate, priority) {
//     const todo = new Todo(title, description, dueDate, priority);
//     this.todosForProjects.push(todo);
//     return todo;
//   }

//   removeTodo(todo) {
//     const inboxIndex = this.todosForInbox.indexOf(todo);
//     const projectsIndex = this.todosForProjects.indexOf(todo);
//     if (inboxIndex !== -1) {
//       this.todosForInbox.splice(inboxIndex, 1);
//     }
//     if (projectsIndex !== -1) {
//       this.todosForProjects.splice(projectsIndex, 1);
//     }
//   }
// }

// const todoList = new TodoList();

// const todoForInbox1 = todoList.createTodoForInbox(
//   "Wash",
//   "To wash the clothes",
//   new Date(),
//   "High"
// );

// const todoForProjects1 = todoList.createTodoForProjects(
//   "Clean",
//   "To Clean the clothes",
//   new Date(),
//   "Important"
// );

const newProject = new Projects();

const myProject = newProject.createProject("first Project");

console.log(newProject.projects);
newProject.removeProject(myProject);

// examp();
