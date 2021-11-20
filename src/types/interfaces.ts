import { AlertColor } from "@mui/material/Alert";

export interface NotificationInterface {
  message: string;
  type: AlertColor;
}

export interface StatisticsInterface {
  abbr: string;
  points: number;
}
