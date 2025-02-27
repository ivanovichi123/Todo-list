function addButton () {
    const showButton = document.querySelector(".p6");
    const favDialog = document.querySelector(".favDialog");
    const outputBox = document.querySelector("output");
    const selectEl = favDialog.querySelector("select");
    const confirmBtn = favDialog.querySelector(".confirm");

    showButton.addEventListener("click", () => {
        favDialog.showModal();
    })

    favDialog.addEventListener("close", (e) => {
        if (favDialog.returnValue === "default") {
            outputBox.value = "No return value";
        } else {
            outputBox.textContent = `ReturnValue: ${favDialog.returnValue}`;
        }
    });


    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        favDialog.close(selectEl.value);
    });
}





export {addButton};