import React from "react";
import { Checkbox } from "antd";

const LeftComponent = () => {
  return (
    <div className="grid__item large-up--one-quarter sidebar filterbar left transition-all duration-300 ease-in-out w-1/4 float-left pl-[15px] pr-[15px]">
      <div className="sidebar_tags">
        <div className="sidebar_widget filterBox mt-8">
          <div className="widget-title text-[#111] text-[15px] mb-2.5 font-bold tracking-[.2px] relative">
            CATEGORIES
          </div>

          <ul className="widget-content opt twoCall column-count-2 column-gap-12px">
            <li className="py-1">
              <Checkbox>Hunter Shoes</Checkbox>
            </li>

            <li className="py-1">
              <Checkbox>Sneaker</Checkbox>
            </li>
          </ul>
        </div>

        <div className="sidebar_widget filterBox mt-8">
          <div className="widget-title text-[#111] text-[15px] mb-2.5 font-bold tracking-[.2px] relative">
            SIZE
          </div>

          <ul className="widget-content opt twoCall column-count-2 column-gap-12px">
            <li className="py-1">
              <Checkbox>6.5</Checkbox>
            </li>
            <li className="py-1">
              <Checkbox>7.5</Checkbox>
            </li>

            <li className="py-1">
              <Checkbox>8</Checkbox>
            </li>
            <li className="py-1">
              <Checkbox>9</Checkbox>
            </li>
            <li className="py-1">
              <Checkbox>10</Checkbox>
            </li>
            <li className="py-1">
              <Checkbox>10.5</Checkbox>
            </li>
            <li className="py-1">
              <Checkbox>11.5</Checkbox>
            </li>
          </ul>
        </div>

        <div className="sidebar_widget filterBox mt-8">
          <div className="widget-title text-[#111] text-[15px] mb-2.5 font-bold tracking-[.2px] relative">
            COLOR
          </div>
          <div className="widget-content">
            <ul className="clr m-0 p-0">
              <li className="inline-block p-0 mr-[5px] mb-[5px] relative group">
                <input
                  className="custCheck"
                  type="checkbox"
                  value="black"
                  id="1514544048360-0"
                  hidden
                />
                <label
                  htmlFor="1514544048360-0"
                  className="swtblack small clrbox bg-black rounded-full text-[11px] block h-[18px] w-[18px] leading-[18px]"
                ></label>
                <span className="text-[11px] leading-[18px] transition-all duration-200 ease-in-out opacity-0 invisible bg-black text-white rounded-none px-[5px] whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible group-hover:bottom-[calc(100%+7px)]">
                  Black
                </span>
              </li>

              <li className="inline-block p-0 mr-[5px] mb-[5px] relative group">
                <input
                  className="custCheck"
                  type="checkbox"
                  value="blue"
                  id="1514544048360-2"
                  hidden
                />
                <label
                  htmlFor="1514544048360-2"
                  className="swtblue small clrbox bg-blue-700 rounded-full text-[11px] block h-[18px] w-[18px] leading-[18px]"
                ></label>
                <span className="text-[11px] leading-[18px] transition-all duration-200 ease-in-out opacity-0 invisible bg-black text-white rounded-none px-[5px] whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible group-hover:bottom-[calc(100%+7px)]">
                  Blue
                </span>
              </li>

              <li className="inline-block p-0 mr-[5px] mb-[5px] relative group">
                <input
                  className="custCheck"
                  type="checkbox"
                  value="orange"
                  id="1514544048360-4"
                  hidden
                />
                <label
                  htmlFor="1514544048360-4"
                  className="swtorange small clrbox bg-orange-500 rounded-full text-[11px] block h-[18px] w-[18px] leading-[18px]"
                ></label>
                <span className="text-[11px] leading-[18px] transition-all duration-200 ease-in-out opacity-0 invisible bg-black text-white rounded-none px-[5px] whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible group-hover:bottom-[calc(100%+7px)]">
                  Orange
                </span>
              </li>

              <li className="inline-block p-0 mr-[5px] mb-[5px] relative group">
                <input
                  className="custCheck"
                  type="checkbox"
                  value="navy"
                  id="1514544048360-10"
                  hidden
                />
                <label
                  htmlFor="1514544048360-10"
                  className="swtnavy small clrbox bg-blue-950 rounded-full text-[11px] block h-[18px] w-[18px] leading-[18px]"
                ></label>
                <span className="text-[11px] leading-[18px] transition-all duration-200 ease-in-out opacity-0 invisible bg-black text-white rounded-none px-[5px] whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible group-hover:bottom-[calc(100%+7px)]">
                  Navy
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar_widget filterBox mt-8">
          <div className="widget-title text-[#111] text-[15px] mb-2.5 font-bold tracking-[.2px] relative">
            PRICE
          </div>

          <ul className="widget-content opt ">
            <li className="py-1">
              <Checkbox>$50 - $60</Checkbox>
            </li>
          </ul>
        </div>

        <div className="sidebar_widget mt-8">
          <div className="widget-title text-[#111] text-[15px] mb-2.5 font-bold tracking-[.2px] relative"></div>
          <div className="widget-content">
            <p>
              Please select collection from store admin &gt; customize &gt;
              Collection page &gt; sidebar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
