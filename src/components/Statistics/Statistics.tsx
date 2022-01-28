import { FunctionComponent, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import { StatsInterface } from "../../types/interfaces";
import StatisticsItem from "./StatisticsItem";
import TopBar from "../atoms/TopBar/TopBar";
import ButtonMui from "../atoms/Buttons/ButtonMui";
import BallTriangleLoader from "../atoms/Loaders/BallTriangleLoader";

const Statistics: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [stats, setStats] = useState<StatsInterface | null>(null);
  const [initialStats, setInitialStats] = useState<StatsInterface | null>(null);
  const [pointsLeft, setPointsLeft] = useState(0);
  const user = useUser();

  useEffect(() => {
    setPointsLeft(user?.character_points);
  }, [user]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const statsModified: StatsInterface = Object.entries(
            docSnap.data().stats
          ).reduce((acc: any, [abbr, points]) => {
            acc[abbr] = { abbr, points };
            return acc;
          }, {});
          setStats(statsModified);
          setInitialStats(statsModified);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getStats();
    } else {
      return;
    }
  }, [user]);
  const updateStatsinDb = async () => {
    const docRef = doc(db, "users", user?.uid);
    let statsInitObj;
    if (stats !== null) {
      statsInitObj = Object.entries(stats).reduce((acc: any, [abbr, stat]) => {
        acc[abbr] = stat.points;
        return acc;
      }, {});
    }
    try {
      await updateDoc(docRef, {
        stats: statsInitObj,
      });
      await updateDoc(docRef, {
        character_points: pointsLeft,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <TopBar title={languagePacks.headers?.statistics[langCode]} />
      {stats !== null && initialStats !== null ? (
        <div className="content__wrapper">
          <div className="points-left">
            {languagePacks.headers?.points_left[langCode]}: {pointsLeft}
          </div>
          <StatisticsItem
            abbr={stats?.str.abbr}
            points={stats?.str.points}
            initialPoints={initialStats?.str.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.agi.abbr}
            points={stats?.agi.points}
            initialPoints={initialStats?.agi.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.tough.abbr}
            points={stats?.tough.points}
            initialPoints={initialStats?.tough.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.vit.abbr}
            points={stats?.vit.points}
            initialPoints={initialStats?.vit.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.int.abbr}
            points={stats?.int.points}
            initialPoints={initialStats?.int.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.perc.abbr}
            points={stats?.perc.points}
            initialPoints={initialStats?.perc.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats?.speed.abbr}
            points={stats?.speed.points}
            initialPoints={initialStats?.speed.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <ButtonMui
            text={languagePacks.labels?.apply[langCode]}
            onClick={updateStatsinDb}
          />
        </div>
      ) : (
        <div className="center-wrapper">
          <BallTriangleLoader size={60} />
        </div>
      )}
    </>
  );
};

export default Statistics;
