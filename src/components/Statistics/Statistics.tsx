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

const Statistics: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [stats, setStats] = useState<StatisticsInterface[]>([]);
  const [notification, setNotification] = useState<NotificationInterface>({
    message: "",
    type: "warning",
  });
  const [pointsLeft, setPointsLeft] = useState(10);
  const user = useUser();
  const [isNotificationOpen, toggleIsNotificationOpen] = useNotification();
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
        message: "Punkty statystyk zostały zaktualizowane.",
        type: "success",
      });
      toggleIsNotificationOpen();
    } catch (error) {
      console.log(error);
      setNotification({
        message: "Wystąpił błąd. Spróboj ponownie",
        type: "error",
      });
      toggleIsNotificationOpen();
    }
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
