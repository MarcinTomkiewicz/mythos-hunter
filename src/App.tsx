import "./scss/main.scss";
import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CharacterView from "./components/CharacterView/CharacterView";
import Statistics from "./components/Statistics/Statistics";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Chat from "./components/Chat/Chat";
import ChallengesOfGods from "./components/ChallengesOfGods/ChallengesOfGods";
import Armoury from "./components/Armoury/Armoury";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="armoury" element={<Armoury />} />
        <Route path="character-view" element={<CharacterView />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="challenges-of-gods" element={<ChallengesOfGods />} />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
