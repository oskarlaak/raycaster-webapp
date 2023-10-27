import "../css/style.css";
import Drawer from "./Drawer";

// const FPS: number = 60;
// const FRAME_DELAY: number = 1000 / FPS;

const ROOT: HTMLElement = document.querySelector("#root")!;

const DRAWER: Drawer = new Drawer(ROOT, 8);

DRAWER.prepareCanvas();
