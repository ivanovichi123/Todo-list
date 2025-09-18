import { storageReceiver } from "./storageLogic";

function addButton() {
  let counter = localStorage.getItem("Number")
    ? localStorage.getItem("Number").split(",").length
    : 0;
  const showButton = document.querySelector(".p6");
  const favDialog = document.querySelector(".favDialog");
  const selectEl = favDialog.querySelector("input");
  const theDescription = favDialog.querySelector(".description");
  const theDueDate = favDialog.querySelector(".dueDate");
  const thePriority = favDialog.querySelector(".priority");
  const theNotes = favDialog.querySelector(".notes");
  const theList = favDialog.querySelector(".list");
  const confirmBtn = favDialog.querySelector(".confirm");
  let projectListArray = localStorage.getItem("ProjectArray")
    ? localStorage.getItem("ProjectArray").split(",")
    : [];

  showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  favDialog.addEventListener("close", (e) => {
    let titleInfo = selectEl.value;
    let descriptionInfo = theDescription.value;
    let dueDateInfo = theDueDate.value;
    let notesInfo = theNotes.value;
    let priorityInfo = thePriority.value;
    let listInfo = theList.value;
    let listSelectorInfo = document.querySelector(
      "input[name = checklists]:checked",
    ).value;
    if (favDialog.returnValue === "" || favDialog.returnValue === "cancel") {
      return;
    } else {
      if (listInfo !== "") {
        projectListArray.push(listInfo);
      }
      storageReceiver(
        titleInfo,
        descriptionInfo,
        dueDateInfo,
        notesInfo,
        priorityInfo,
        listInfo,
        listSelectorInfo,
        projectListArray,
        counter,
      );
      counter += 1;
    }
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectEl.value === "") {
      alert("The title need to have at least 1 word");
      return;
    }
    if (Number(thePriority.value) < 1 || Number(thePriority.value) > 3) {
      alert("The priority must be between 1,2 or 3");
      return;
    }
    for (let i = 0; i < localStorage.getItem("ProjectArray").length; i++) {
      if (
        localStorage.getItem("ProjectArray").split(",")[i] === theList.value
      ) {
        alert("You already have a project list with the same name");
        return;
      }
    }
    if (
      document.querySelector("input[name = checklists]:checked").value ===
        "none" &&
      theList.value === ""
    ) {
      alert(
        "You need to create at least a new project list or select an exiting one",
      );
      return;
    }
    if (
      document.querySelector("input[name = checklists]:checked").value !==
        "none" &&
      theList.value !== ""
    ) {
      alert(
        "When creating a new list you need to select none in the checklist",
      );
      return;
    }
    favDialog.close("a");
  });

  favDialog.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
      confirmBtn.click();
    }
  });

  favDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      favDialog.close("cancel");
    }
  });

  const defaultList = () => {
    if (localStorage.length === 0) {
      projectListArray.push("Example list");
      storageReceiver(
        "Example task",
        "I need to put more tasks to do in my todo list",
        "2029-05-12",
        "Do not forget to buy bread",
        "2",
        "Example list",
        "none",
        projectListArray,
        counter,
        "firstLoad",
      );
      counter += 1;
    } else {
      storageReceiver("", "", "", "", "", "", "", "", "", "firstLoad");
    }
  };

  defaultList();
}

export { addButton };
