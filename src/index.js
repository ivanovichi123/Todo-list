import "./style.css";
import { initialSidebar } from "./loadSidebar";
import { initialProject } from "./loadProject";

function deployment () {
    initialSidebar();
    initialProject();
}

console.log("index js");
deployment();


//THE PLAN
//COMPLETE: First I put in order the header, sidebar, projectSpace, footer
//CURRENT: Make a js for the initial load of the sidebar and projectSpace
//NEXT: Make a js for the constant content of the header and the footer
//NEXT: Create the next plan for making a button that triggers a dialog which allows the submit of a new project
