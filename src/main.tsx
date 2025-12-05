
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Starting app...");
try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error("Root element not found!");
    } else {
        console.log("Root element found, rendering...");
        createRoot(rootElement).render(<App />);
        console.log("Render called.");
    }
} catch (e) {
    console.error("Error in main.tsx:", e);
}
