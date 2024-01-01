import { Todo, TodoList } from "./todo";

const todoList = new TodoList();

const todoProperty = () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("date");
  const priority = document.getElementById("priority");

  return { title, description, dueDate, priority };
};

const createTodo = () => {
  const todoProperties = todoProperty();
  const aTodo = todoList.createTodoForInbox(
    todoProperties.title.value,
    todoProperties.description.value,
    todoProperties.dueDate.value,
    todoProperties.priority.value
  );
  todosFunction();

  return aTodo;
};

let isFormVisible = false;

const showForm = () => {
  isFormVisible = !isFormVisible;

  if (isFormVisible) {
    todoDetailsFormContainer.classList.add("todo-form-show");
    todoDetailsFormContainer.classList.remove("todo-form-container");
  } else {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
  }
};

const showAddTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "block";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "none";
};

const showUpdateTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "none";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "block";
};

const addTodoButton = document.getElementById("add-todo-button");
addTodoButton.addEventListener("click", (event) => {
  showAddTaskButton();
  showForm(event);
});

const form = document.getElementById("my-form");
form.addEventListener("click", (event) => {
  event.stopPropagation();
});

const toggleForm = () => {
  if (isFormVisible) {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
    isFormVisible = false;
  }
};
const todoDetailsFormContainer = document.getElementById("my-form-container");
todoDetailsFormContainer.addEventListener("click", () => {
  toggleForm();
});

const todosFunction = () => {
  const activeContainer = document.getElementById("active-container");

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";

  todoList.todosForInbox.forEach((value, index, array) => {
    const todoContainer = document.createElement("div"); // Container for each todo
    todoContainer.classList.add("todo-container"); // Add a class for styling if needed

    const todoTitle = document.createElement("p");
    todoTitle.append(todoList.todosForInbox[index].title);
    todoTitle.addEventListener("click", (event) => {
      toggleTodoDetails(event, index);
    });

    const deleteTodo = document.createElement("p");
    deleteTodo.textContent = "delete";
    deleteTodo.addEventListener("click", () => {
      array.splice(index, 1);
      todoContainer.remove(); // Remove the todo container from the DOM
      console.log(todoList.todosForInbox);
    });

    const updateTodo = document.createElement("p");
    updateTodo.textContent = "update";
    updateTodo.addEventListener("click", (event) => {
      showUpdateTaskButton();
      showForm(event);

      const todoTitle = document.createElement("p");

      document
        .getElementById("update-task")
        .addEventListener("click", (event) => {
          event.preventDefault();

          const todoPropertiesUpdate = todoProperty();

          todoTitle.textContent = todoPropertiesUpdate.title.value;

          todoList.todosForInbox[index].updateProperties(
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
    activeContainer.append(todoContainer);
  });
};

const toggleTodoDetails = (event, index) => {
  const activeContainer = document.getElementById("active-container");

  // Find the existing detail container for the clicked todo
  const existingDetailContainer = document.getElementById(
    `todo-detail-${index}`
  );

  if (existingDetailContainer) {
    // If the container exists, remove it to hide the details
    existingDetailContainer.remove();
  } else {
    // If the container doesn't exist, create and append it after the clicked todo title
    const todoDetailContainer = document.createElement("div");
    todoDetailContainer.classList.add("todo-detail-container");
    todoDetailContainer.id = `todo-detail-${index}`; // Use an id to identify the container

    const todoTitle = document.createElement("p");
    todoTitle.append(todoList.todosForInbox[index].title);

    const todoDescription = document.createElement("p");
    todoDescription.append(todoList.todosForInbox[index].description);

    const todoDuedate = document.createElement("p");
    todoDuedate.append(todoList.todosForInbox[index].dueDate);

    const todoPriority = document.createElement("p");
    todoPriority.append(todoList.todosForInbox[index].priority);

    todoDetailContainer.append(
      todoTitle,
      todoDescription,
      todoDuedate,
      todoPriority
    );

    // Find the index of the clicked todo title and insert the details container after it
    const clickedTodoIndex = Array.from(activeContainer.children).indexOf(
      event.currentTarget.parentElement
    );
    activeContainer.insertBefore(
      todoDetailContainer,
      activeContainer.children[clickedTodoIndex + 1]
    );
  }
};

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  createTodo();
  form.reset();
  toggleForm();
});
