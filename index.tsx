import { createRoot } from "react-dom/client";
import App from "./src/App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to load");
}
createRoot(container).render(<App />);
