import { projectBlocks } from "./projectBlocks";
import { updateSelector } from "./updateSelector";

function storageReceiver(title,description,dueDate,notes,priority,list,selector,projectArray,number, load) {
    //Make the local storage for each element
    console.log(list);
    function storageSaver() {

      let titleArray = [];
      let titleStorage = localStorage.getItem("Title");
      if(titleStorage === "") {
        titleArray.push(title);
      } else {
        titleArray.push(titleStorage,title);
      }
      localStorage.setItem("Title",titleArray);

      let descriptionArray = [];
      let descriptionStorage = localStorage.getItem("Description");
      if(descriptionStorage === "") {
        descriptionArray.push(description);
      } else {
        descriptionArray.push(descriptionStorage,description);
      }
      localStorage.setItem("Description",descriptionArray);

      let dueDateArray = [];
      let dueDateStorage = localStorage.getItem("DueDate");
      if(dueDateStorage === "") {
        dueDateArray.push(dueDate)
      } else {
        dueDateArray.push(dueDateStorage, dueDate);
      }
      localStorage.setItem("DueDate", dueDateArray);

      let notesArray = [];
      let notesStorage = localStorage.getItem("Notes");
      if(notesStorage === "") {
        notesArray.push(notes);
      } else {
        notesArray.push(notesStorage, notes);
      }
      localStorage.setItem("Notes", notesArray);

      let priorityArray = [];
      let priorityStorage = localStorage.getItem("Priority");
      if(priorityStorage === "") {
        priorityArray.push(priority);
      } else {
        priorityArray.push(priorityStorage, priority);
      }
      localStorage.setItem("Priority", priorityArray);

      let listArray = [];
      let listStorage = localStorage.getItem("List");
      if(listStorage === "") {
        listArray.push(list);
      } else {
        listArray.push(listStorage, list);
      }
      alert(list);
      localStorage.setItem("List", listArray);

      let selectorArray = [];
      let selectorStorage = localStorage.getItem("Selector");
      if(selectorStorage === "") {
        selectorArray.push(selector);
      } else {
        selectorArray.push(selectorStorage, selector);
      }
      localStorage.setItem("Selector", selectorArray);

      let projectArrayList = (localStorage.getItem("ProjectArray")).split(",");
      //AQUI TE QUEDASTE if project array === "" -> localStorage.setItem("project array", newprojectArray);
      let theDeterminer = 0;
      let newProjectArray = "";
      if (list !== "") {
        newProjectArray = list;
      } else {
        newProjectArray = selector;
      }
      if(localStorage.getItem("ProjectArray") === "") {
        alert("I enter the if ");
        localStorage.setItem("ProjectArray",newProjectArray)
      } else {
        for (let theC = 0; theC < projectArrayList.length; theC++) {
          if(newProjectArray === projectArrayList[theC]) {
            theDeterminer = 1;
          }
        }
        if(theDeterminer === 0) {
          projectArrayList.push(newProjectArray);
        }
        localStorage.setItem("ProjectArray", projectArrayList);
      }




      let numberArray = [];
      let numberStorage = (localStorage.getItem("Number")).split(",").length;
      if(localStorage.getItem("Number") === "") {
        numberStorage = 0;
      }
      for (let count = 0; count <= numberStorage; count++) {
        numberArray.push(count);
      }
      localStorage.setItem("Number", numberArray);

    }

    function storageDivider() {


      document.querySelector(".projectList").innerHTML = "";
      let theSplit = [];
      for (let i = 0; i < localStorage.length; i++) {
        const storageUnit = (localStorage.getItem(localStorage.key(i)));
        theSplit.push(storageUnit.split(","));
      }
      console.log(theSplit);
      for(let j = 0; j < theSplit[0].length; j++) {
        let theUnitTitle = theSplit[0][j];
        let theUnitProjectArray = theSplit[1];
        let theUnitSelector = theSplit[2][j];
        let theUnitDescription = theSplit[3][j];
        let theUnitPriority = theSplit[4][j];
        let theUnitNotes = theSplit[5][j];
        let theUnitDueDate = theSplit[6][j];
        let theUnitList = theSplit[7][j];
        let theUnitNumber = theSplit[8][j];
        if(theUnitTitle === "") {
          return
        }
        console.log("Project Array " + theUnitProjectArray);
        updateSelector(theUnitProjectArray);
        projectBlocks(theUnitTitle,theUnitDescription,theUnitDueDate,theUnitNotes,theUnitPriority,theUnitList,theUnitSelector,theUnitProjectArray,theUnitNumber);
        // function projectBlocks (title,description,dueDate,notes,priority,list,selector,projectArray,number)
      }


    } 

    // localStorage.clear();
    if (localStorage.length === 0) {
      localStorage.setItem("Title", title);
      localStorage.setItem("Description", description);
      localStorage.setItem("DueDate", dueDate);
      localStorage.setItem("Notes", notes);
      localStorage.setItem("Priority", priority);
      localStorage.setItem("List", list);
      localStorage.setItem("Selector", selector);
      localStorage.setItem("ProjectArray", projectArray);
      localStorage.setItem("Number", number);
      storageDivider();
      return
    }

    if(localStorage.length !== 0 && load === "firstLoad") {
      storageDivider(); 
    } else if (load === "Update"){
      storageDivider();
    } else {
      storageSaver();
      storageDivider();
    }
    
    console.log("local storage");
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

  }

export{storageReceiver};
  
// localStorage.clear();
// title,description,dueDate,notes,priority,list,selector,projectArray,number
// Lo que falta es hacer la logica de cuando se elimina algo