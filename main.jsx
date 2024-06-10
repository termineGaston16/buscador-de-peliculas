import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./src/css/main.css"

const root = createRoot(document.getElementById("app")).render(
  <App />
)