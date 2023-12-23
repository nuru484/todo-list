import logo from "../assets/logo.png";

export default class Projects {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const project = { name };
    this.projects.push(project);
    return project;
  }

  removeProject(projectToRemove) {
    const indexToRemove = this.projects.indexOf(projectToRemove);
    if (indexToRemove !== -1) {
      this.projects.splice(indexToRemove, 1);
    }
  }
}
export const examp = () => {
  const dom = document.getElementById("container");
  const imagess = document.createElement("img");
  imagess.src = "./assets/logo.png";
  dom.append(imagess);
};
