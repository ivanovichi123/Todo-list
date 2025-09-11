import { projectBlocks } from "./projectBlocks";
import { updateSelector } from "./updateSelector";
import { storageReceiver } from "./storageLogic";

function storageEraser(Number,list) {
 

    console.log("Before local storage");
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

    function storageObtain() {
      let temporalTitle = localStorage.getItem("Title");
      let temporalTitleString = temporalTitle.split(",");
      alert(Number);
      temporalTitleString.splice(Number,1);
      localStorage.setItem("Title", temporalTitleString);

      let temporalDescription = localStorage.getItem("Description");
      let temporalDescriptionString = temporalDescription.split(",");
      temporalDescriptionString.splice(Number,1);
      localStorage.setItem("Description", temporalDescriptionString);

      let temporalDate = localStorage.getItem("DueDate");
      let temporalDateString = temporalDate.split(",");
      temporalDateString.splice(Number,1);
      localStorage.setItem("DueDate", temporalDateString);

      let temporalNotes = localStorage.getItem("Notes");
      let temporalNotesString = temporalNotes.split(",");
      temporalNotesString.splice(Number,1);
      localStorage.setItem("Notes", temporalNotesString);

      let temporalPriority = localStorage.getItem("Priority");
      let temporalPriorityString = temporalPriority.split(",");
      temporalPriorityString.splice(Number,1);
      localStorage.setItem("Priority", temporalPriorityString);

      let temporalList = localStorage.getItem("List");
      let temporalListString = temporalList.split(",");
      temporalListString.splice(Number,1);
      localStorage.setItem("List", temporalListString);

      let temporalSelector = localStorage.getItem("Selector");
      let temporalSelectorString = temporalSelector.split(",");
      temporalSelectorString.splice(Number,1);
      localStorage.setItem("Selector", temporalSelectorString);

      if (list !== false) {
        localStorage.setItem("ProjectArray",list);
      }



      let numberArray = [];
      let numberStorage = (localStorage.getItem("Title")).split(",").length;  
      let numberString = localStorage.getItem("Title").split(",");
      for (let count = 0; count < numberStorage; count++) {
        numberArray.push(count);
      }
      if (numberString[0] === "") {
        numberArray = "";
      }
      localStorage.setItem("Number", numberArray);


    }

    function storageUpdate() {
      let theTotalProjects = localStorage.getItem("Number").split(",");
      let theListComparator = localStorage.getItem("List").split(",");
      console.log(theListComparator);
      let theSelectorComparator = localStorage.getItem("Selector").split(",");
      let theProjects = localStorage.getItem("ProjectArray").split(",");
      let projectsArray = [];
      let listUpdate = [];

      for (let i = 0; i < theTotalProjects.length; i++)   {
        for(let j = 0; j < theProjects.length; j++) {
          if(theListComparator[i] === theProjects[j] || theSelectorComparator[i] === theProjects[j]) {
            if (projectsArray[j] === theProjects[j]) {
              break
            }
            if (theListComparator[i] === "") {
              theListComparator[i] = theProjects[j];
              projectsArray.push(theProjects[j]);
            } else {
              projectsArray.push(theProjects[j]);
            }
          }
        }
        listUpdate.push(theListComparator[i]);
      }
      console.log(theListComparator);
      localStorage.setItem("List",theListComparator);
    }

    function Reorder() {
      let theProjects = localStorage.getItem("ProjectArray").split(",");
      let theGoodOrder = [];
      let theListComparator = localStorage.getItem("List").split(",");
      console.log(theListComparator);
      let theSelectorComparator = localStorage.getItem("Selector").split(",");
      let theTotalProjects = localStorage.getItem("Number").split(",");
      for (let i = 0; i < theProjects.length; i++) {
        for(let j = 0; j < theTotalProjects.length; j++) {
          if(theListComparator[j] === theProjects[i] || theSelectorComparator[j] === theProjects[i]) {
            theGoodOrder.push(j);
          }
        }
      }
      console.log(theGoodOrder);
      let theTitleOld = localStorage.getItem("Title").split(",");
      let theTitleNew = [];
      let theDescriptionOld = localStorage.getItem("Description").split(",");
      let theDescriptionNew = [];
      let theDueDateOld = localStorage.getItem("DueDate").split(",");
      let theDueDateNew = [];
      let theNotesOld = localStorage.getItem("Notes").split(",");
      let theNotesNew = [];
      let thePriorityOld = localStorage.getItem("Priority").split(",");
      let thePriorityNew = [];
      let theListOld = localStorage.getItem("List").split(",");
      console.log(theListOld);
      let theListNew = [];
      let theSelectorOld = localStorage.getItem("Selector").split(",");
      let theSelectorNew = [];

      for (let k = 0; k < theGoodOrder.length; k++) {
        let index = theGoodOrder[k];
        theTitleNew.push(theTitleOld[index]);
        theDescriptionNew.push(theDescriptionOld[index]);
        theDueDateNew.push(theDueDateOld[index]);
        theNotesNew.push(theNotesOld[index]);
        thePriorityNew.push(thePriorityOld[index]);
        theListNew.push(theListOld[index]);
        theSelectorNew.push(theSelectorOld[index]);

      }

      localStorage.setItem("Title",theTitleNew);
      localStorage.setItem("Selector",theSelectorNew);
      localStorage.setItem("Description",theDescriptionNew);
      localStorage.setItem("Priority",thePriorityNew);
      localStorage.setItem("Notes", theNotesNew);
      localStorage.setItem("DueDate",theDueDateNew);
      console.log(theListNew);
      localStorage.setItem("List", theListNew);

    }

    storageObtain();
    storageUpdate();
    Reorder();
    storageReceiver(0,0,0,0,0,0,0,0,0,"Update");

    console.log("After local storage");
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }


  }

export{storageEraser};

//Tiene que haber 3 casos de borrado:
//Borrar y agregar de una misma seleccion
//Borrar y garegar de selecciones distintas
//Al no haber nada no hacer nada