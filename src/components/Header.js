import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-left">
        <h2>ADMIN DASHBOARD</h2>
      </div>

      <div className="Header-right">
        <div className="infor">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg"
            alt="khong co"
            className="Avt"
          ></img>
          <h2 className="Name">Tri</h2>
          <img
            src="/DownArrow.svg"
            alt="DownArrow"
            width={10}
            height={10}
            className="DownArrowIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
