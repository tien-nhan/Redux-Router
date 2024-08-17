import React from "react";

const Index = ({ title, url, option, isActive }) => {
  return (
    <li className="lvl1 parent dropdown relative inline-block text-left mr-2 list-none group">
      <a
        href={url}
        className={`text-[#111] text-[13px] font-semibold uppercase relative leading-[40px] no-underline block opacity-100 ${
          isActive ? "text-red-400" : ""
        }`}
      >
        {title}
      </a>
      <ul className="dropdown absolute left-[-17px] w-[240px] p-[10px] bg-white border border-[#eeeeee] shadow-[2px_2px_2px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 group-hover:visible z-[999] transition-all duration-300 ease-in-out">
        {option.map((o, i) => (
          <li
            className={`lvl-1 border-0 relative list-none ${
              i > 0 ? "border-t border-t-[#eeeeee]" : ""
            }`}
            key={i}
          >
            <a
              href={o.url}
              className="site-nav lvl-1 text-[#444] text-[13px] font-normal py-2 px-1 bg-white no-underline block opacity-100 hover:text-[#000] hover:bg-[#fafafa] hover:pl-[10px]"
            >
              {o.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Index;
