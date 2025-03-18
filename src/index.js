import "./style.css";
import { initialSidebar } from "./loadSidebar";
import { initialProject } from "./loadProject";
import { initialFooter } from "./initialfooter";
import { initialHeader } from "./intialheader";

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
//NEXT: Resolve the bugs
//NEXT: check the hovering
//NEXT: if the add project list is alone, by default create a list 

//NEXT: With this the step 3 should be complete and ready to go


//ADD BR TO THE THINGS