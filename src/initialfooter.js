function initialFooter () {
    // Create the elements
    const theFooterSpace = document.querySelector("#theFooter");
    const theFooterContainer = document.createElement("div");
    const theFooterText = document.createElement("p");
    //Add classes
    theFooterContainer.classList.add("footerContainer");
    theFooterText.classList.add("footerText");
    //Add text
    theFooterText.textContent = "This page was made by Ivanovichi's production";
    //Append the elements
    theFooterContainer.appendChild(theFooterText);
    theFooterSpace.appendChild(theFooterContainer);
}

export {initialFooter};