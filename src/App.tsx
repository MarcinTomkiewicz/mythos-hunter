import React from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import { db } from "./config/firebaseConfig";

function App() {
  return (
    // <Router>

    // </Router>
    <>{console.log(db)}</>
  );
}

export default App;
