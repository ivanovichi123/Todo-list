function initialProject() {
  // Create the elements
  const theProjectSpace = document.querySelector("#theProjectSpace");
  const theProjectList = document.createElement("div");
  //Add classes
  theProjectList.classList.add("projectList");
  //Append the elements
  theProjectSpace.appendChild(theProjectList);
}

export { initialProject };
