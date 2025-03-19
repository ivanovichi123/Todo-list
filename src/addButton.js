import { projectBlocks } from "./projectBlocks";
import { updateSelector } from "./updateSelector";

function addButton () {
    let counter = 0
    const showButton = document.querySelector(".p6");
    const favDialog = document.querySelector(".favDialog");
    const selectEl = favDialog.querySelector("input");
    const theDescription = favDialog.querySelector(".description");
    const theDueDate = favDialog.querySelector(".dueDate");
    const thePriority = favDialog.querySelector(".priority");
    const theNotes = favDialog.querySelector(".notes");
    const theList = favDialog.querySelector(".list");
    const confirmBtn = favDialog.querySelector(".confirm");
    let projectListArray = [];



    showButton.addEventListener("click", () => {
        favDialog.showModal();
    })

    favDialog.addEventListener("close", (e) => {
        let titleInfo = selectEl.value;
        let descriptionInfo = theDescription.value;
        let dueDateInfo = theDueDate.value;
        let notesInfo = theNotes.value;
        let priorityInfo = thePriority.value;
        let listInfo = theList.value;
        let listSelectorInfo = document.querySelector('input[name = checklists]:checked').value;
        if (favDialog.returnValue === "" || favDialog.returnValue === "cancel" ) {
            alert("I enter 1");
            return
        } else {
            alert("I enter 2");
            projectBlocks(titleInfo,descriptionInfo,dueDateInfo,notesInfo,priorityInfo,listInfo,listSelectorInfo,projectListArray,counter);
            counter += 1;
            if (listInfo !== "") {
                projectListArray.push(listInfo);
            }
            updateSelector(projectListArray);
            console.log(projectListArray);
        }
    });


    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (selectEl.value === "") {
            alert("The title need to have at least 1 word");
            return
        } 
        if(Number(thePriority.value) < 1 || Number(thePriority.value) > 3) {
            alert("The priority must be between 1,2 or 3");
            return
        }
        for (let i = 0;i < projectListArray.length; i++) {
            if (theList.value === projectListArray[i]) {
                alert("You already have a project list with the same name");
                return
            }
        }
        if(document.querySelector('input[name = checklists]:checked').value === "none" && theList.value === "") {
            alert("You need to create at least a new project list or select an exiting one");
            return
        }
        if(document.querySelector('input[name = checklists]:checked').value !== "none" && theList.value !== "") {
            alert("When creating a new list you need to select none in the checklist");
            return
        }
        favDialog.close("a");
    });

    favDialog.addEventListener("keypress",function (event) {
        if (event.key === "Enter") {
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
        projectBlocks("Example task","I need to put more tasks to do in my todo list","2029-05-12","Do not forget to buy bread","2","Example list","none",projectListArray,counter);
        counter += 1;
        projectListArray.push("Example list");
        updateSelector(projectListArray);
        console.log(projectListArray);
    }

    defaultList();
}

export {addButton};