type Props = {
  message: string;
};

const Notification = ({ message }: Props) => {
  return (
    <div
      style={{
        background: "#333",
        color: "#fff",
        padding: "10px 15px",
        marginBottom: "10px",
        borderRadius: "6px",
        minWidth: "200px",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
