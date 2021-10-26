import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Registration } from "./auth/Registration";

function App() {
  return (
    <Router>
      <Registration />
    </Router>
    
  );
}

export default App;
