import { useNotification } from "../context/NotificationContext";
import Notification from "./Notification";

const NotificationContainer = () => {
  const { notifications } = useNotification();

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      {notifications.map((n) => (
        <Notification key={n.id} message={n.message} />
      ))}
    </div>
  );
};

export default NotificationContainer;
