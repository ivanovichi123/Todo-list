import { projectBlocks } from "./projectBlocks";

function addButton () {
    let counter = 0
    const showButton = document.querySelector(".p6");
    const favDialog = document.querySelector(".favDialog");
    const selectEl = favDialog.querySelector("input");
    const theDescription = favDialog.querySelector(".description");
    const theDueDate = favDialog.querySelector(".dueDate");
    const theNotes = favDialog.querySelector(".notes");
    const confirmBtn = favDialog.querySelector(".confirm");

    showButton.addEventListener("click", () => {
        favDialog.showModal();
    })

    favDialog.addEventListener("close", (e) => {
        let titleInfo = selectEl.value;
        let descriptionInfo = theDescription.value;
        let dueDateInfo = theDueDate.value;
        let notesInfo = theNotes.value;
        console.log(titleInfo);
        console.log(descriptionInfo);
        console.log(dueDateInfo);
        console.log(notesInfo);
        console.log(favDialog.returnValue);
        if (favDialog.returnValue === "" || favDialog.returnValue === "cancel" ) {
            alert("I enter 1");
            return
        } else {
            alert("I enter 2");
            projectBlocks(titleInfo,descriptionInfo,dueDateInfo,notesInfo,counter);
            counter += 1;
        }
    });


    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (selectEl.value === "") {
            alert("The title need to have at least 1 word");
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

}





export {addButton};