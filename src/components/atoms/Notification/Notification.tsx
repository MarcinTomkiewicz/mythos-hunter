import { forwardRef, SyntheticEvent } from "react";
import { FunctionComponent } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AlertColor } from "@mui/material/Alert";

interface NotificationProps {
  message: string;
  type: AlertColor;
  isNotificationOpen: boolean;
  toggleIsNotificationOpen: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification: FunctionComponent<NotificationProps> = ({
  message,
  type,
  isNotificationOpen,
  toggleIsNotificationOpen,
}) => {
  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    toggleIsNotificationOpen();
  };

  return (
    <Snackbar
      open={isNotificationOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{
          fontFamily: "inherit",
          fontSize: "1.4rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
