import React, { FunctionComponent } from "react";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { StatisticsInterface } from "../../types/interfaces";
import RoundButton from "../atoms/Buttons/RoundButton";
import { useUser } from "../../hooks/useUser";

interface StatisticsItemProps {
  abbr: string;
  points: number;
  pointsLeft: number;
  setStatistics: React.Dispatch<React.SetStateAction<StatisticsInterface[]>>;
  setPointsLeft: React.Dispatch<React.SetStateAction<number>>;
}

const StatisticsItem: FunctionComponent<StatisticsItemProps> = ({
  abbr,
  points,
  pointsLeft,
  setStatistics,
  setPointsLeft,
}) => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const user = useUser();
  const handleIncreasePoints = () => {
    if (pointsLeft === 0) {
      return;
    }
    setStatistics((prevState) => {
      return prevState.map((el) => {
        if (abbr === el.abbr) {
          return { ...el, points: el.points + 1 };
        } else {
          return el;
        }
      });
    });
    setPointsLeft((prevState) => prevState - 1);
  };

  const handleDecreasePoints = () => {
    if (points === 1) {
      return;
    }
    setStatistics((prevState) => {
      return prevState.map((el) => {
        if (abbr === el.abbr) {
          return { ...el, points: el.points - 1 };
        } else {
          return el;
        }
      });
    });
    setPointsLeft((prevState) => prevState + 1);
  };
  return (
    <div className="stat-item">
      <span className="stat-item__name">
        {languagePacks.statistics?.[abbr][langCode]}
      </span>
      <div className="stat-item__wrapper">
        <div className="stat-item__points">{points}</div>
        <RoundButton
          iconName="add_circle"
          onClick={handleIncreasePoints}
          color="success"
        />
        {user?.isStatsEdited ? null : (
          <RoundButton
            iconName="remove_circle"
            onClick={handleDecreasePoints}
            color="error"
          />
        )}
      </div>
    </div>
  );
};

export default StatisticsItem;
