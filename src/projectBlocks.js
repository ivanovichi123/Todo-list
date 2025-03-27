import { theListEraser } from "./eraseLogic";

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
        const titleContainer = document.createElement("p");
        const descriptionContainer = document.createElement("p");
        const dueDateContainer = document.createElement("p");
        const notesContainer = document.createElement("p");
        const priorityContainer = document.createElement("p");
        const SelectorContainer = document.createElement("p");
        const temporalDialog = document.createElement("dialog");
        const temporalButton = document.createElement("button");
        const temporalDialogClose = document.createElement("button");
        const eraseList = document.createElement("button");
        //Add classes
        titleContainer.classList.add(`pT${number}`);
        descriptionContainer.classList.add(`pD${number}`);
        dueDateContainer.classList.add(`pDu${number}`);
        notesContainer.classList.add(`pN${number}`);
        priorityContainer.classList.add(`pP${number}`);
        SelectorContainer.classList.add(`pS${number}`);
        temporalDialog.classList.add(`dD${number}`);
        temporalButton.classList.add(`dB${number}`);
        temporalDialogClose.classList.add(`dDC${number}`);
        eraseList.classList.add(`dDB${number}`);
        //Add the block to its respective project list
        if (temporalList === "") {
            for (let i = 0; i < projectArray.length; i++) {
                if (temporalSelector === projectArray[i]) {
                    console.log("I enter the if");
                    let temporalListBlock = document.createElement("div");
                    temporalDialog.append(descriptionContainer,notesContainer,priorityContainer,SelectorContainer,temporalDialogClose);
                    temporalListBlock.append(titleContainer,dueDateContainer,temporalDialog,temporalButton,eraseList);
                    let fixTemporalSelector = temporalSelector.replaceAll(" ","-"); 
                    console.log(fixTemporalSelector);
                    console.log(temporalListBlock);
                    temporalListBlock.classList.add(`DI${number}`);
                    document.querySelector(`.${fixTemporalSelector}P`).append(temporalListBlock);
                    return
                }
            }
        }
        console.log(projectArray);
        //Add this "-" when encounter spaces
        let fixTemporalList = temporalList.replaceAll(" ", "-");
        let listBlock = document.createElement("div");
        listBlock.classList.add(`DI${number}`);
        temporalDialog.append(descriptionContainer,notesContainer,priorityContainer,SelectorContainer,temporalDialogClose);
        listBlock.append(titleContainer,dueDateContainer,temporalDialog,temporalButton,eraseList);
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
        document.querySelector(`.pD${number}`).textContent = "Description: " + textD;
        document.querySelector(`.pDu${number}`).textContent = textDu;
        document.querySelector(`.pN${number}`).textContent = "Notes: " + textN;
        document.querySelector(`.pP${number}`).textContent = "Priority: " + textP;
        document.querySelector(`.pS${number}`).textContent = "Selection: " + textS;
        document.querySelector(`.dDC${number}`).textContent = "Close";
    };

    const colorChanger = () => {
        let theDiv = document.querySelector(`.DI${number}`);
        let thePriority = document.querySelector(`.pP${number}`);
        let thePriorityNumber = thePriority.innerHTML.slice(-1);
        console.log(thePriorityNumber);
        if (thePriorityNumber === "1"){
            theDiv.style.backgroundColor = "rgb(207, 75, 75)";
        }else if (thePriorityNumber === "2") {
            theDiv.style.backgroundColor = "yellow";
        }else if (thePriorityNumber === "3") {
            theDiv.style.backgroundColor = "rgb(94, 94, 209)";
        }
    }
    
    //The code to show the modal with the rest of the information
    const showDialog = () => {
        let temporalButton = document.querySelector(`.dB${number}`);
        let temporalDialog = document.querySelector(`.dD${number}`);
        let temporalCloseButton = document.querySelector(`.dDC${number}`)
        temporalButton.addEventListener("click",() => {
            temporalDialog.showModal();
        })
        temporalCloseButton.addEventListener("click",() => {
            temporalDialog.close();
        })
    }

    const eraseAList = () => {
        let temporalEraseButton = document.querySelector(`.dDB${number}`);
        temporalEraseButton.addEventListener("click",() => {
            theListEraser(number,projectArray);
        })

    }

    blockCreator();
    blockInformation(temporalTitle,temporalDescription,temporalDueDate,temporalNotes,temporalPriority,temporalSelector);
    colorChanger();
    showDialog();
    eraseAList();
}

// `
export {projectBlocks}