import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const PageList = () => {
  return (
    <div className="max-w-full mx-auto px-[55px]">
      <div className="list-none mx-[-15px] p-0">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
};

export default PageList;
