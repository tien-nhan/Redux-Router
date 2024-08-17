import React from "react";
import Detail from "./Detail";
import { useSelector } from "react-redux";

const Index = () => {
  const { wishList } = useSelector((state) => state.product) || {};
  return (
    <div className="page-width mx-auto px-[15px] max-w-[1200px]">
      <h1 className="page-title tracking-normal font-bold text-[20px] relative mb-[30px] text-center">
        Wishlist
      </h1>
      <div className="list-none m-0 -mx-[15px] p-0">
        <div className="float-left px-[15px] w-full">
          <ul className="mt-[20px]">
            <li className="first text-black font-bold py-2 bg-[#f9f9f9] uppercase tracking-[1px] border-none relative list-none table text-xs w-full m-0">
              <div className="product_img table-cell align-middle w-[100px] p-0"></div>
              <div className="product_name table-cell align-middle text-left pl-5">
                Product
              </div>
              <div className="product_price table-cell align-middle w-[14%]">
                Price
              </div>
              <div className="product_stock table-cell align-middle text-center min-w-[110px] w-[15%]"></div>
              <div className="product_add table-cell align-middle w-[170px] text-center"></div>
              <div className="product_remove table-cell align-middle text-right w-10"></div>
            </li>
            {wishList.map((item) => (
              <Detail item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
