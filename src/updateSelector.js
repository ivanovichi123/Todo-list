function updateSelector (theList) {
    console.log("I am the updater");

    //Create the elements
    const theChecklist = document.querySelector(".checklist");
    const theListUpdater = theList;

    const theUpdater = (theRealList) => {
        //Erase everything inside the div
        theChecklist.innerHTML = "";
        //Create the p of the title
        let theTitle = document.createElement("p");
        theTitle.classList.add("checklistB");
        theTitle.textContent = "Choose a project list*: ";
        //Create the none checklist input 
        let theNoneValueInput = document.createElement("input");
        theNoneValueInput.setAttribute("type","radio");
        theNoneValueInput.setAttribute("id","none");
        theNoneValueInput.setAttribute("value",false);
        //Create the none checklist label
        let theNoneValueLabel = document.createElement("label");
        theNoneValueLabel.setAttribute("for","none");
        theNoneValueLabel.setAttribute("class","nones");
        theNoneValueLabel.textContent = "None";
        //Add it to the checklist
        theChecklist.append(theTitle,theNoneValueInput,theNoneValueLabel);
        for (let i = 0; i < theRealList.length;i++) {
            //Creation of the input
            let temporalInput = document.createElement("input");
            temporalInput.setAttribute("type","radio");
            temporalInput.setAttribute("id",`${theRealList[i]}`);
            temporalInput.setAttribute("value", `${theRealList[i]}`);
            //Creation of the label
            let temporalLabel = document.createElement("label");
            temporalLabel.setAttribute("for",`${theRealList[i]}`);
            temporalLabel.classList.add(`${theRealList[i]}s`);
            temporalLabel.textContent = `${theRealList[i]}`;
            //Append to the checklist
            theChecklist.append(temporalInput,temporalLabel);
        }
        console.log(theRealList);
    }

    theUpdater(theListUpdater);
}
// `
export{updateSelector}