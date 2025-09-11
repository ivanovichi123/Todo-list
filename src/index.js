import "./style.css";
import { initialSidebar } from "./loadSidebar";
import { initialProject } from "./loadProject";
import { initialFooter } from "./initialfooter";
import { initialHeader } from "./intialheader";
import { storageReceiver} from "./storageLogic";

function deployment () {
    initialProject();
    initialSidebar();
    initialFooter();
    initialHeader();
}

console.log("index js");
deployment();


//THE PLAN
//COMPLETE: First I put in order the header, sidebar, projectSpace, footer
//COMPLETE: Make a js for the initial load of the sidebar and projectSpace
//COMPLETE: Make a js for the constant content of the header and the footer
//COMPLETE: Create the next plan for making a button that triggers a dialog which allows the submit of a new project
//COMPLETE: Make another js with a the method for the button add
//COMPLETE: Create a dialog that only asks for the title
//COMPLETE: Create the logic that creates a block with the information of the dialog
//COMPLETE: Add style to the form
//CURRENT: Make the form to pass the cancel as no information
//COMPLETE: Make esc do the same as cancel
//COMPLETE: Make enter not trigger cancel button
//COMPLETE: Add the description, dueDate, priority, and notes to the form
//COMPLETE: Add style to the project blocks
//COMPLETE: If the input is empty make a logic that it anyways make the space
//COMPLETE: Add a priority in the form
//COMPLETE: Add a project list in the form
//COMPLETE: Make the page create the space for the project list with the block
//COMPLETE: Add the project selector in the form
//COMPLETE: Avoid the same project list to repeat
//COMPLETE: Make the same project list names to stack together
//COMPLETE: Change the project list form to a checklist
//COMPLETE: Make the checklist to update base on the projects created
//COMPLETE: Resolve the bugs
//COMPLETE: check the hovering
//COMPLETE: Create a default list
//COMPLETE: With this the step 3 should be complete and ready to go
//COMPLETE: Change the add text for the things that will not work
//COMPLETE: Change the color base on the priority
//CURRENT: Make only visually the title and due date
    //COMPLETE: In projectBlocks put all the other information in a dialog
    //COMPLETE: Add a button that shows the dialog with the extra information in another module
//COMPLETE: Make possible the expansion of a todo to see the rest of the things
//CURRENT:Delete a todo
    //COMPLETE: Make a button
    //COMPLETE: Make the logic to erase them, if possible create a new module
//COMPLETE: With this the step 4 is complete
//CURRENT: Make the plans for the step 8
    //COMPLETE: CHECK FOR SIMPLE INPUTS IN THE STORAGE VIA THE INDEX.JS
    //COMPLETE: THINK IN THE MOMENT WHERE THE MODULE STORAGE IS CALL
    //COMPLETE: MAKE ADD BUTTON GIVE THE INFORMATION TO THE STORAGE
    //COMPLETE: MAKE THE INDEX TO LOAD THE STORAGE INFORMATION IF IT IN THERE
    //COMPLETE: CREATE LOGIC TO THE STORAGE WITH THE ERASE LOGIC   
    //COMPLETE: WITH THE NUMBER THE STORAGE WILL RECEIVE TRY TO CHANGE IN WHEN YOU ERASE IT, AND CREATE THEM AGAIN WITH THE NUMBERS CHANGE
    //NEXT: Check if the erase
//INNER HTML DO NOT US IT


