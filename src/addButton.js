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
            // outputBox.value = "No return value";
            projectBlocks(favDialog.returnValue,counter);
            counter += 1;
        } else {
            // outputBox.textContent = `ReturnValue: ${favDialog.returnValue}`;
            projectBlocks(favDialog.returnValue,counter);
            counter += 1;
        }
    });


    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        favDialog.close(selectEl.value);
    });
}





export {addButton};