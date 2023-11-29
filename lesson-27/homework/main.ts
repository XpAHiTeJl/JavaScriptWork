import "./style.css";

import { App } from "./apps";
import { setSpinner } from "./store";
import { setInfoBox } from "../store/getInfoBox";

setSpinner();
setInfoBox();

const appComp = new App();
appComp.load();
