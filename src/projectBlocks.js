function projectBlocks (title,description,dueDate,notes,priority,list,selector,projectArray,number) {
    let temporalTitle = title;
    let temporalDescription = description;
    let temporalDueDate = dueDate;
    let temporalNotes = notes;
    let temporalPriority = priority;
    let temporalList = list;
    let temporalSelector = selector;
    const theRealContainer = document.querySelector(".projectList");
    const  blockCreator = () => {
        //Create the elements
        const blockContainer = document.createElement("div");
        const titleContainer = document.createElement("p");
        const descriptionContainer = document.createElement("p");
        const dueDateContainer = document.createElement("p");
        const notesContainer = document.createElement("p");
        const priorityContainer = document.createElement("p");
        const SelectorContainer = document.createElement("p");
        //Add classes
        blockContainer.classList.add(`divP${number}`);
        titleContainer.classList.add(`pT${number}`);
        descriptionContainer.classList.add(`pD${number}`);
        dueDateContainer.classList.add(`pDu${number}`);
        notesContainer.classList.add(`pN${number}`);
        priorityContainer.classList.add(`pP${number}`);
        SelectorContainer.classList.add(`pS${number}`);
        //Add the block to its respective project list
        if (temporalList === "") {
            for (let i = 0; i < projectArray.length; i++) {
                if (temporalSelector === projectArray[i]) {
                    console.log("I enter the if");
                    let temporalListBlock = document.createElement("div");
                    temporalListBlock.append(titleContainer,descriptionContainer,dueDateContainer,notesContainer,priorityContainer,SelectorContainer);
                    let fixTemporalSelector = temporalSelector.replaceAll(" ","-"); 
                    console.log(fixTemporalSelector);
                    console.log(temporalListBlock);
                    document.querySelector(`.${fixTemporalSelector}P`).append(temporalListBlock);
                    return
                }
            }
        }
        console.log(projectArray);
        //Add this "-" when encounter spaces
        let fixTemporalList = temporalList.replaceAll(" ", "-");
        let listBlock = document.createElement("div");
        listBlock.append(titleContainer,descriptionContainer,dueDateContainer,notesContainer,priorityContainer,SelectorContainer);
        let listDiv = document.createElement("div");
        listDiv.classList.add(`${fixTemporalList}`);
        let listTitle = document.createElement("p");
        listTitle.classList.add(`${fixTemporalList}P`);
        listTitle.textContent = temporalList;
        listTitle.appendChild(listBlock);
        listDiv.appendChild(listTitle);
        theRealContainer.appendChild(listDiv);
    };


    const blockInformation = (text,textD,textDu,textN,textP,textS) => {
        document.querySelector(`.pT${number}`).textContent = text;
        document.querySelector(`.pD${number}`).textContent = textD;
        document.querySelector(`.pDu${number}`).textContent = textDu;
        document.querySelector(`.pN${number}`).textContent = textN;
        document.querySelector(`.pP${number}`).textContent = textP;
        document.querySelector(`.pS${number}`).textContent = textS;
    };
    blockCreator();
    blockInformation(temporalTitle,temporalDescription,temporalDueDate,temporalNotes,temporalPriority,temporalSelector);
}

// `
export {projectBlocks}