import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  let nav = useNavigate();
  let location = useLocation();
  console.log("App:  ", location);
  useEffect(() => {
    if (location.pathname == "/") {
      return nav("/user");
    }
  }, []);
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
