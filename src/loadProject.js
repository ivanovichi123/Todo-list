function initialProject () {
    // Create the elements
    const theProjectSpace = document.querySelector("#theProjectSpace");
    const theProjectContainer = document.createElement("div");
    //Dialog 
    const outputBox = document.createElement("output");
    outputBox.classList.add(".outputs");
    theProjectContainer.appendChild(outputBox);
    //finish
    //Add classes
    theProjectContainer.classList.add("projectContainer");
    //Append the elements
    theProjectSpace.appendChild(theProjectContainer);
}

export {initialProject};