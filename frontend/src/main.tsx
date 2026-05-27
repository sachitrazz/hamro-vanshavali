import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";

import { MembersProvider }
from "./context/MembersContext";

createRoot(
  document.getElementById("root")!
).render(

  <StrictMode>

    <MembersProvider>

      <App />

    </MembersProvider>

  </StrictMode>

);