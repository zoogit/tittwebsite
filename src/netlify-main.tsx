import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import DesignSystem from "../app/design-system/page";
import "../app/globals.css";

const isDesignSystem = window.location.pathname.replace(/\/$/, "") === "/design-system";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{isDesignSystem ? <DesignSystem /> : <Home />}</React.StrictMode>,
);
