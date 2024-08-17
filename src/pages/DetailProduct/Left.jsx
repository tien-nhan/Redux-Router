import React from "react";
import { useLocation } from "react-router-dom";

const Left = () => {
  const location = useLocation();
  const { item } = location.state || {};
  return (
    <div className="grid__item medium-up--one-half product-single__photos left float-left pl-4 pr-4 w-1/2 mb-[45px]">
      <div className="relative z-[1]">
        <div
          id="30534598164721"
          className="relative left-0 top-0 z-[999] opacity-100 overflow-hidden"
          data-zoom={item?.image?.src}
          data-slide="0"
          data-slick-index="0"
          aria-hidden="false"
          tabIndex="-1"
          role="option"
          aria-describedby="slick-slide10"
        >
          <img src={item?.image?.src} className="zoomImg" />
        </div>
      </div>
    </div>
  );
};

export default Left;
