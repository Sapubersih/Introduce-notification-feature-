import { NotificationProvider } from "./context/NotificationContext";
import NotificationContainer from "./components/NotificationContainer";
import DemoTrigger from "./components/DemoTrigger";

function App() {
  return (
    <NotificationProvider>
      <div style={{ padding: "20px" }}>
        <h1>Notification Feature Demo</h1>
        <DemoTrigger />
      </div>

      <NotificationContainer />
    </NotificationProvider>
  );
}

export default App;
