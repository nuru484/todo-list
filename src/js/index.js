import Projects from "./projects";
import "../css/index.css";

import { TodoList, Todo } from "./todo";

const newProject = new Projects();

const myProject = newProject.createProject("first Project");

console.log(newProject.projects);
newProject.removeProject(myProject);
