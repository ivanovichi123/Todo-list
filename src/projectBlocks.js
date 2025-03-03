function projectBlocks (title,number) {
    let temporalTitle = title;
    const theRealContainer = document.querySelector(".projectContainer");
    // let counter = 0;
    const  blockCreator = () => {
        const blockContainer = document.createElement("div");
        const titleContainer = document.createElement("p");
        blockContainer.classList.add(`divP${number}`);
        titleContainer.classList.add(`pP${number}`);
        blockContainer.appendChild(titleContainer);
        theRealContainer.appendChild(blockContainer);

    };


    const blockInformation = (text) => {
        document.querySelector(`.pP${number}`).textContent = text;
        // counter += 1;
    };

    alert("Hey " + title);
    blockCreator();
    blockInformation(temporalTitle);
}

// `
export {projectBlocks}