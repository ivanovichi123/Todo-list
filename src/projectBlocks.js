function projectBlocks (title,description,dueDate,notes,number) {
    let temporalTitle = title;
    let temporalDescription = description;
    let temporalDueDate = dueDate;
    let temporalNotes = notes;
    const theRealContainer = document.querySelector(".projectContainer");
    const  blockCreator = () => {
        const blockContainer = document.createElement("div");
        const titleContainer = document.createElement("p");
        const descriptionContainer = document.createElement("p");
        const dueDateContainer = document.createElement("p");
        const notesContainer = document.createElement("p");
        blockContainer.classList.add(`divP${number}`);
        titleContainer.classList.add(`pT${number}`);
        descriptionContainer.classList.add(`pD${number}`);
        dueDateContainer.classList.add(`pDu${number}`);
        notesContainer.classList.add(`pN${number}`);
        blockContainer.append(titleContainer,descriptionContainer,dueDateContainer,notesContainer);
        theRealContainer.appendChild(blockContainer);
    };


    const blockInformation = (text,textD,textDu,textN) => {
        document.querySelector(`.pT${number}`).textContent = text;
        document.querySelector(`.pD${number}`).textContent = textD;
        document.querySelector(`.pDu${number}`).textContent = textDu;
        document.querySelector(`.pN${number}`).textContent = textN;
    };

    alert("Hey " + title);
    alert("Description: " + description)
    blockCreator();
    blockInformation(temporalTitle,temporalDescription,temporalDueDate,temporalNotes);
}

// `
export {projectBlocks}