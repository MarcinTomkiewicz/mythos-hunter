import { FunctionComponent, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import { StatsInterface, NotificationInterface } from "../../types/interfaces";
import StatisticsItem from "./StatisticsItem";
import TopBar from "../atoms/TopBar/TopBar";
import ButtonMui from "../atoms/Buttons/ButtonMui";
import Notification from "../atoms/Notification/Notification";
import useNotification from "../../hooks/useNotification";
import BallTriangleLoader from "../atoms/Loaders/BallTriangleLoader";

const Statistics: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [stats, setStats] = useState<StatsInterface | null>(null);
  const [notification, setNotification] = useState<NotificationInterface>({
    message: "",
    type: "warning",
  });
  const [pointsLeft, setPointsLeft] = useState(0);
  const user = useUser();
  const [isNotificationOpen, toggleIsNotificationOpen] = useNotification();

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
        acc[abbr] = stats.points;
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
      await updateDoc(docRef, {
        isStatsEdited: true,
      });
      setNotification({
        message: languagePacks.notifications?.stats_success[langCode],
        type: "success",
      });
      toggleIsNotificationOpen();
    } catch (error) {
      console.log(error);
      setNotification({
        message: languagePacks.notifications?.error[langCode],
        type: "error",
      });
      toggleIsNotificationOpen();
    }
  };
  return (
    <>
      <TopBar title={languagePacks.headers?.statistics[langCode]} />
      {stats === null ? (
        <div className="center-wrapper">
          <BallTriangleLoader size={60} />
        </div>
      ) : (
        <div className="content__wrapper">
          <div className="points-left">
            {languagePacks.headers?.points_left[langCode]}: {pointsLeft}
          </div>
          <StatisticsItem
            abbr={stats.str.abbr}
            points={stats.str.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.agi.abbr}
            points={stats.agi.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.tough.abbr}
            points={stats.tough.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.vit.abbr}
            points={stats.vit.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.int.abbr}
            points={stats.int.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.perc.abbr}
            points={stats.perc.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <StatisticsItem
            abbr={stats.speed.abbr}
            points={stats.speed.points}
            pointsLeft={pointsLeft}
            setStats={setStats}
            setPointsLeft={setPointsLeft}
          />
          <ButtonMui
            text={languagePacks.labels?.apply[langCode]}
            onClick={updateStatsinDb}
          />
        </div>
      )}
      <Notification
        message={notification.message}
        type={notification.type}
        isNotificationOpen={isNotificationOpen}
        toggleIsNotificationOpen={toggleIsNotificationOpen}
      />
    </>
  );
};

export default Statistics;
