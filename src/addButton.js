import { projectBlocks } from "./projectBlocks";

function addButton () {
    let counter = 0
    const showButton = document.querySelector(".p6");
    const favDialog = document.querySelector(".favDialog");
    const selectEl = favDialog.querySelector("input");
    const confirmBtn = favDialog.querySelector(".confirm");

    showButton.addEventListener("click", () => {
        favDialog.showModal();
    })

    favDialog.addEventListener("close", (e) => {
        if (favDialog.returnValue === "default") {
            projectBlocks(favDialog.returnValue,counter);
            counter += 1;
        } else {
            projectBlocks(favDialog.returnValue,counter);
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
        favDialog.close(selectEl.value);
    });
}





export {addButton};