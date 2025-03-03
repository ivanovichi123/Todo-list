function initialProject () {
    // Create the elements
    const theProjectSpace = document.querySelector("#theProjectSpace");
    const theProjectContainer = document.createElement("div");
    //Add classes
    theProjectContainer.classList.add("projectContainer");
    //Append the elements
    theProjectSpace.appendChild(theProjectContainer);
}

export {initialProject};