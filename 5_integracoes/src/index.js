import "./fonts.css";
import "./index.scss";

import $ from "jquery";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBacon, faAnchor } from "@fortawesome/free-solid-svg-icons";

// Import bootstrap
import "bootstrap";

library.add(faBacon);
library.add(faAnchor);
dom.watch();

const body = $("body");
const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);
