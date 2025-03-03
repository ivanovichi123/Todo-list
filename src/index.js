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
//CURRENT: Add style to the form
