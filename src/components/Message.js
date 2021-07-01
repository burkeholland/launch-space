import { useEffect, useState } from "react";

const Message = ({ user }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function getMessage() {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessage(data.message);
    }

    if (user) {
      getMessage();
    }
  }, [user]);

  return <h1 className="is-size-1">{message}</h1>;
};

export default Message;
