import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // create a method that gets a messaege from the /api/messages endpoint
    async function getMessage() {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessage(data.message);
    }

    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.imgur.com/xf6bG3Z.png"
          className="App-logo"
          alt="logo"
        />
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
