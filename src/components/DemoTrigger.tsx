import { useNotification } from "../context/NotificationContext";

const DemoTrigger = () => {
  const { addNotification } = useNotification();

  return (
    <button
      onClick={() => addNotification("This is a notification 🚀")}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      Show Notification
    </button>
  );
};

export default DemoTrigger;
