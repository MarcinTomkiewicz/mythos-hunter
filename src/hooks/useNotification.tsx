import { useState } from "react";

const useNotification = (): [boolean, () => void] => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleIsNotificationOpen = () =>
    setIsNotificationOpen(!isNotificationOpen);
  return [isNotificationOpen, toggleIsNotificationOpen];
};

export default useNotification;
