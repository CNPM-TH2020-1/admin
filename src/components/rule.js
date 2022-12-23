import React from "react";

const Rules = () => {
  const th_style =
    "text-[#FFCD00] font-sans not-italic font-normal text-md text-centr py-3 width-[100px]";
  const thb_style =
    "text-white font-sans not-italic font-normal text-4sm text-center py-3 px-[100px]";
  return (
    <div className="mx-[60px]">
      <button className="bg-[#FFCD00] text-black my-4  w-48 h-10 rounded-[10px] flex justify-center items-center hover:bg-[#FFD62E]">
        <p className="font-sans not-italic font-normal text-xl text-center">
          Create
        </p>
      </button>
      <div className="border-solid border-b-[0.1px] border-gray-400"></div>
      <div>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="my-[40px] relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/Search_light.svg" width={30} height={30} />
          </div>
          <input
            type="search"
            id="search"
            class="block w-[400px] h-[45px] p-4 pl-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
      <table>
        <thead className="border-solid border-b-[0.1px] border-gray-400">
          <tr>
            <th scope="col" className={`${th_style}`}>
              Id
            </th>
            <th scope="col" className={`${th_style}`}>
              Create At
            </th>
            <th scope="col" className={`${th_style}`}>
              Username
            </th>
            <th scope="col" className={`${th_style}`}>
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-solid border-b-[0.1px] border-gray-400">
            <th scope="row" className={`${thb_style}`}>
              215560574
            </th>
            <th scope="row" className={`${thb_style}`}>
              20-12-2022
            </th>
            <th scope="row" className={`${thb_style}`}>
              abcsd
            </th>
            <th scope="row" className={`${thb_style}`}>
              Đường Tạ Quang Bửu, khu phố 6,....
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rules;
