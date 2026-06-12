import "./styles.css";
import { generateHome } from "./home.js";
import { generateBody } from "./menu.js";

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click",generateHome);

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click",generateBody);