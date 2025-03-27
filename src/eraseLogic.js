import { updateSelector } from "./updateSelector";

function theListEraser (theNumber,theList) {
    let theGoodList = [];
    let theClass = document.querySelector(`.DI${theNumber}`);
    let theClassParent = theClass.parentElement;
    let theClassParentParent = theClassParent.parentElement
    //Remove the class
    theClass.remove();

    //Logic to erase the list selector
    const makingTheList = () => {
        let theSame = String(theClassParentParent.classList);
        let theNewSame = theSame.replace("-"," ");
        for(let i = 0; i < theList.length;i++) {
            if(theNewSame === theList[i]) {
                theList.splice(i,1);
            }
        }
        updateSelector(theList);
    }

    if (theClassParent.childElementCount === 0) {
        theClassParentParent.remove();
        makingTheList();
    }


}

// `
export{theListEraser};