const hideDisplayNaBarElement = document.getElementById("logo-container");

hideDisplayNaBarElement.addEventListener("click", () => {
  const navBarElement = document.getElementById("nav-bar");
  navBarElement.classList.toggle("nav-bar-hide");

  const allElementContainer = document.getElementById("container");
  allElementContainer.classList.toggle("container-only");

  const footerContainer = document.getElementById("footer-container");
  footerContainer.classList.toggle("without-nav-bar");

  const mainContentElement = document.getElementById("main-content");
  mainContentElement.classList.toggle("main-without-nav-bar");
});
