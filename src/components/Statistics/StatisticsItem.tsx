import React, { FunctionComponent } from "react";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { StatisticsInterface } from "../../types/interfaces";
import Icon from "@mui/material/Icon";

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
        <button className="btn-round" onClick={handleIncreasePoints}>
          <Icon color="success" style={{ fontSize: "22px" }}>
            add_circle
          </Icon>
        </button>
        <button className="btn-round" onClick={handleDecreasePoints}>
          <Icon color="error" style={{ fontSize: "22px" }}>
            remove_circle
          </Icon>
        </button>
      </div>
    </div>
  );
};

export default StatisticsItem;
