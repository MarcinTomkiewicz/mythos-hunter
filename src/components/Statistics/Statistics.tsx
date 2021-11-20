import { FunctionComponent, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import TopBar from "../atoms/TopBar/TopBar";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import { StatisticsInterface } from "../../types/interfaces";
import StatisticsItem from "./StatisticsItem";
import ButtonBlue from "../atoms/Buttons/BlueButton";

const Statistics: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [stats, setStats] = useState<StatisticsInterface[]>([]);
  const [pointsLeft, setPointsLeft] = useState(10);
  const user = useUser();
  useEffect(() => {
    const getStatistics = async () => {
      try {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStats(docSnap.data().stats);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getStatistics();
    } else {
      return;
    }
  }, [user]);
  const updateDataInDb = async () => {
    const docRef = doc(db, "users", user?.uid);
    await updateDoc(docRef, {
      stats,
    });
  };
  return (
    <>
      <TopBar title={languagePacks.headers?.statistics[langCode]} />
      <div className="content__wrapper">
        <div className="points-left">Pozostało punktów: {pointsLeft}</div>
        {stats.map(({ abbr, points }) => (
          <StatisticsItem
            key={abbr}
            abbr={abbr}
            points={points}
            pointsLeft={pointsLeft}
            setStatistics={setStats}
            setPointsLeft={setPointsLeft}
          />
        ))}
        <ButtonBlue
          text={languagePacks.labels?.apply[langCode]}
          onClick={updateDataInDb}
        />
      </div>
    </>
  );
};

export default Statistics;
