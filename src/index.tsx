import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </StyledEngineProvider>,
  document.getElementById("root")
);
