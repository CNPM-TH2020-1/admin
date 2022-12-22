import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/Layout.css";
const Layout = ({ children }) => {
  console.log(window.location);
  const [pathName, setPathName] = useState("User");
  const NavClick = (e) => {
    console.log(e.currentTarget.dataset.id);
    window.history.replaceState(null, "", `/${e.currentTarget.dataset.id}`);
  };

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <div>
      <Header />
      <ul className="nav">
        <li onClick={NavClick} data-id="User">
          User
        </li>
        <li onClick={NavClick} data-id="Saving">
          Saving
        </li>
        <li onClick={NavClick} data-id="Rule">
          Rule
        </li>
        <li onClick={NavClick} data-id="Report">
          Report
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
