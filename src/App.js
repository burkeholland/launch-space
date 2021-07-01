import { useEffect, useState } from "react";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // create a method that gets a user from the /.auth/me endpoint
    async function getUser() {
      const response = await fetch("/.auth/me");
      const data = await response.json();
      setUser(data.clientPrincipal);
    }

    getUser();
  }, []);

  return (
    <div className="App">
      <nav>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? (
                <div>
                  <div className="navbar-item">
                    <span>{user.userDetails}</span>
                  </div>
                  <a href="/.auth/logout" className="button is-primary">
                    Logout
                  </a>
                </div>
              ) : (
                <a href="/.auth/login/github" className="button is-primary">
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <img
          src="https://i.imgur.com/xf6bG3Z.png"
          className="App-logo"
          alt="logo"
        />
        <Message user={user}></Message>
      </header>
    </div>
  );
}

export default App;
