import React, { FunctionComponent } from "react";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { StatsInterface } from "../../types/interfaces";
import RoundButton from "../atoms/Buttons/RoundButton";
import Tooltip from "@mui/material/Tooltip";

interface StatisticsItemProps {
  abbr: string;
  points: number;
  initialPoints: number;
  pointsLeft: number;
  setStats: React.Dispatch<React.SetStateAction<StatsInterface | null>>;
  setPointsLeft: React.Dispatch<React.SetStateAction<number>>;
}

const StatisticsItem: FunctionComponent<StatisticsItemProps> = ({
  abbr,
  points,
  initialPoints,
  pointsLeft,
  setStats,
  setPointsLeft,
}) => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const handleChangePoints = (action: string) => {
    setStats((prev): any => {
      if (prev !== null) {
        if (action === "inc") {
          if (pointsLeft > 0) {
            setPointsLeft(pointsLeft - 1);
            return {
              ...prev,
              [abbr]: { ...prev[abbr], points: prev[abbr].points + 1 },
            };
          } else {
            return prev;
          }
        } else {
          if (pointsLeft >= 0 && points > initialPoints) {
            setPointsLeft(pointsLeft + 1);
            return {
              ...prev,
              [abbr]: { ...prev[abbr], points: prev[abbr].points - 1 },
            };
          } else {
            return prev;
          }
        }
      }
    });
  };

  return (
    <div className="stat-item">
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontFamily: "inherit",
              fontSize: "1.4rem",
              textAlign: "center",
            },
          },
        }}
        title="In esse exercitation fugiat excepteur laboris laborum commodo aliquip officia sint consectetur elit anim."
        arrow
        placement="top"
      >
        <span className="stat-item__name">
          {languagePacks.statistics?.[abbr][langCode]}
        </span>
      </Tooltip>
      <div className="stat-item__wrapper">
        <div className="stat-item__points">{points}</div>
        <RoundButton
          iconName="add_circle"
          onClick={() => handleChangePoints("inc")}
          color="success"
        />
        <RoundButton
          iconName="remove_circle"
          onClick={() => handleChangePoints("dec")}
          color="error"
        />
      </div>
    </div>
  );
};

export default StatisticsItem;
