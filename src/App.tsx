import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Form from "./Components/Form/Form";


import { StrictMode } from "react";
import "./css.css";


const App = () => {

  return (
    <div className="appWrapper">
      <StrictMode>

      </StrictMode>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
