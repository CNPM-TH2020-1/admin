import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="flex justify-between font-medium text-center items-center text-white relative w-full border-solid border-b-[0.1px] border-gray-400">
      <div className="pl-16 text-[28px] font-medium text-white">
        <h2>ADMIN DASHBOARD</h2>
      </div>

      <div className="pr-16 font-medium text-white">
        <div className="flex justify-center items-center">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg"
            alt="khong co"
            className="ml-2 mr-2 my-2 w-14 h-14 rounded-[50px]"
          ></img>
          <h2 className="ml-2 mr-2">Tri</h2>
          <img
            src="/DownArrow.svg"
            alt="DownArrow"
            width={10}
            height={10}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
