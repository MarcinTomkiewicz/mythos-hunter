import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Character from "./components/Character/Character";
import Stats from "./Stats/Stats";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Chat from "./components/Chat/Chat";
import ChallengesOfGods from "./components/ChallengesOfGods/ChallengesOfGods";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="character" element={<Character />} />
        <Route path="stats" element={<Stats />} />
        <Route path="challenges-of-gods" element={<ChallengesOfGods />} />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
