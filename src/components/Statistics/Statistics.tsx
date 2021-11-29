import { FunctionComponent, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import {
  StatisticsInterface,
  NotificationInterface,
} from "../../types/interfaces";
import StatisticsItem from "./StatisticsItem";
import TopBar from "../atoms/TopBar/TopBar";
import ButtonMui from "../atoms/Buttons/ButtonMui";
import Notification from "../atoms/Notification/Notification";
import useNotification from "../../hooks/useNotification";
import BallTriangleLoader from "../atoms/Loaders/BallTriangleLoader";

const Statistics: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [stats, setStats] = useState<StatisticsInterface[]>([]);
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
    const getStatistics = async () => {
      try {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const statsArr: any = Object.entries(docSnap.data().stats).map(
            ([i, stats]) => stats
          );
          setStats(statsArr);
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
  const updateStatsinDb = async () => {
    const docRef = doc(db, "users", user?.uid);
    try {
      await updateDoc(docRef, {
        stats,
      });
      await updateDoc(docRef, {
        character_points: pointsLeft,
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
      {stats.length === 0 ? (
        <div className="loader-wrapper">
          <BallTriangleLoader size={60} />
        </div>
      ) : (
        <div className="content__wrapper">
          <div className="points-left">
            {languagePacks.headers?.points_left[langCode]}: {pointsLeft}
          </div>
          {stats.map(({ abbr, points }) => {
            if (abbr === "luck" || abbr === "dmg" || abbr === "def") {
              return null;
            } else {
              return (
                <StatisticsItem
                  key={abbr}
                  abbr={abbr}
                  points={points}
                  pointsLeft={pointsLeft}
                  setStatistics={setStats}
                  setPointsLeft={setPointsLeft}
                />
              );
            }
          })}
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
