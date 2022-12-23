import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";
const Layout = ({ children }) => {
  const li_style =
    "mr-[80px] font-sant not-italic font-medium text-[24px] leading-5 hover:cursor-pointer";

  const [pathName, setPathName] = useState(window.location.pathname);

  let location = useLocation();
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);
  return (
    <div>
      <Header />
      <ul className="mt-[30px] ml-[60px] list-none flex mb-[30px]">
        <li
          data-id="user"
          className={`${li_style} ${
            pathName == "/user" ? "text-white" : "text-[#8f8f8f]"
          }`}
        >
          <Link to={`user`}>User</Link>
        </li>
        <li
          data-id="saving"
          className={`${li_style} ${
            pathName == "/saving" ? "text-white" : "text-[#8f8f8f]"
          }`}
        >
          <Link to={`saving`}>Saving</Link>
        </li>
        <li
          data-id="rule"
          className={`${li_style} ${
            pathName == "/rule" ? "text-white" : "text-[#8f8f8f]"
          }`}
        >
          <Link to={`rule`}>Rule</Link>
        </li>
        <li
          data-id="report"
          className={`${li_style} ${
            pathName == "/report" ? "text-white" : "text-[#8f8f8f]"
          }`}
        >
          <Link to={`report`}>Report</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
