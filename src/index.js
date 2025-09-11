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





