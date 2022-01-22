import { AlertColor } from "@mui/material/Alert";

export interface NotificationInterface {
  message: string;
  type: AlertColor;
}

export interface StatsInterface {
  [key: string]: {
    abbr: string;
    points: number;
  };
}
