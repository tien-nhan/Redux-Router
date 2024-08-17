import React from "react";
import { useSelector } from "react-redux";
import Detail from "./Detail";

const Index = () => {
  const { cart } = useSelector((state) => state.product) || {};

  return (
    <div className="page-width mx-auto px-[15px] max-w-[1200px]">
      <h1 className="page-title tracking-normal font-bold text-[20px] relative mb-[30px] text-center">
        Your cart
      </h1>
      <div className="list-none m-0 -mx-[15px] p-0">
        <div className="pl-[15px] pr-[15px] w-full">
          <table className="w-full border-collapse mb-[25px]">
            <thead className="cart__row cart__header small--hide">
              <tr>
                <th className="p-[10px] border-0 text-center bg-[#f5f5f5] uppercase"></th>
                <th
                  colspan="2"
                  className="p-[10px] text-left border-0 bg-[#f5f5f5] uppercase"
                >
                  Product
                </th>
                <th className="small--hide p-[10px] border-0 bg-[#f5f5f5] uppercase">
                  Price
                </th>
                <th className="text-center p-[10px] border-0 bg-[#f5f5f5] uppercase">
                  Quantity
                </th>
                <th className="small--hide p-[10px] text-right border-0 bg-[#f5f5f5] uppercase">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <Detail item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
