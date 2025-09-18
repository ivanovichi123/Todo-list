import "./style.css";
import { initialSidebar } from "./loadSidebar";
import { initialProject } from "./loadProject";
import { initialFooter } from "./initialfooter";
import { initialHeader } from "./intialheader";

function deployment() {
  initialProject();
  initialSidebar();
  initialFooter();
  initialHeader();
}

deployment();
