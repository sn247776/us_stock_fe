import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.js";
import Superinvestor from "./Components/Superinvestor/Superinvestor.js";
import Investorholding from "./Components/Investorholding/Investorholding.js";
import Login from "./Components/Login/Login.js";
import LoginPage from "./Pages/Auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Dashboard/Home.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./Components/global/Sidebar";
import Topbar from "./Components/global/Topbar";
import SuperInvestor from "./Pages/Dashboard/SuperInvestor";
import InvestorHolding from "./Pages/Dashboard/InvestorHolding";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [error, setError] = useState("");
  const handleLogin = (details) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    fetch("/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data["result"] === "OK") {
          setUser(details);
          localStorage.setItem("user", details);
        } else {
          setError("Username and Password Dont match");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLogout = () => {
    setUser("");
    localStorage.setItem("user", "");
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            {user === "" ? <></> : <Sidebar isSidebar={isSidebar} />}
            {user === "" ? <></> : <Header handleLogout={handleLogout} />}

            <main className="content">
              {user === "" ? (
                <></>
              ) : (
                <Topbar
                  setIsSidebar={setIsSidebar}
                  handleLogout={handleLogout}
                />
              )}
              <Routes>
                {user === "" ? (
                  <Route
                    path="/"
                    // element={<Login handleLogin={handleLogin} error={error} />}
                    element={
                      <LoginPage handleLogin={handleLogin} error={error} />
                      // <SuperInvestor />
                    }
                  ></Route>
                ) : (
                  <>
                    <Route
                      path="/"
                      element={<InvestorHolding />}
                      // element={<Header handleLogout={handleLogout} />}
                    ></Route>
                    <Route
                      path="/team"
                      // element={<Superinvestor />}
                      element={<SuperInvestor />}
                    ></Route>
                    <Route
                      path="/contacts"
                      element={<Investorholding />}
                      // element={<InvestorHolding />}
                    ></Route>
                  </>
                )}
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
