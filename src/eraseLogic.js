import { storageEraser } from "./eraseStorage";
import { updateSelector } from "./updateSelector";

function theListEraser(theNumber, theList) {
  let theGoodList = [];
  let theClass = document.querySelector(`.DI${theNumber}`);
  let theClassParent = theClass.parentElement;
  let theClassParentParent = theClassParent.parentElement;
  //Remove the class
  theClass.remove();

  //Logic to erase the list selector
  const makingTheList = () => {
    let theSame = String(theClassParentParent.classList);
    let theNewSame = theSame.replace("-", " ");
    for (let i = 0; i < theList.length; i++) {
      if (theNewSame === theList[i]) {
        theList.splice(i, 1);
      }
    }
    updateSelector(theList);
    //Update the storage
    alert("I call the 28 eraser");
    storageEraser(theNumber, theList);
    return;
  };

  if (theClassParent.childElementCount === 0) {
    theClassParentParent.remove();
    makingTheList();
  } else {
    alert("I call the 38 eraser");
    storageEraser(theNumber, false);
  }
}

// `
export { theListEraser };
