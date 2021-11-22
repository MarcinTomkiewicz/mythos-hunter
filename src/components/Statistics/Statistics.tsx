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
import ButtonBlue from "../atoms/Buttons/BlueButton";
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
    if (stats.length === 0) {
      return;
    }
    const totalAssignedPoints = stats.reduce(
      (sum, curr) => (sum += curr.points),
      0
    );
    if (totalAssignedPoints === 30) {
      setPointsLeft(0);
    } else {
      setPointsLeft(30 - totalAssignedPoints);
    }
  }, [stats]);

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
    try {
      await updateDoc(docRef, {
        stats,
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
          <span>Ładowanie...</span>
        </div>
      ) : (
        <div className="content__wrapper">
          <div className="points-left">
            {languagePacks.headers?.points_left[langCode]}: {pointsLeft}
          </div>
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
