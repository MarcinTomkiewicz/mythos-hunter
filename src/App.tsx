import React from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import { db } from "./config/firebaseConfig";
import { useLanguagePacks } from "./hooks/useLanguagePacks"

function App() {

  const languages = useLanguagePacks();

  return (
    // <Router>

    // </Router>
    <>
    {console.log(db)}
    {console.log(languages)}
    </>
  );
}

export default App;
