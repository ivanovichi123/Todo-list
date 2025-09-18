function initialHeader() {
  // Create the elements
  const theHeader = document.querySelector("#theHeader");
  const theHeaderContainer = document.createElement("div");
  const theNotification = document.createElement("div");
  const theTitle = document.createElement("div");

  //Add classes
  theHeaderContainer.classList.add("headerContainer");
  theNotification.classList.add("notification");
  theTitle.classList.add("title");

  //Add text
  theTitle.textContent = "The ivanovichi's to-do-list";

  //Append the elements
  theHeaderContainer.append(theNotification, theTitle);
  theHeader.appendChild(theHeaderContainer);

  const clickEvents = () => {
    document.querySelector(".notification").addEventListener("click", () => {
      alert("You have 0 notifications");
    });
  };

  clickEvents();
}

export { initialHeader };
