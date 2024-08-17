import React, { useState } from "react";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../slices/ProductSlice";
import { useDispatch } from "react-redux";

const Detail = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, _setState] = useState({ quantity: item?.quantity || 1 });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  const handleNavigation = (path) => {
    // Thực hiện điều hướng và push state
    navigate(path, { state: { item } });
  };
  const handleRemoveCart = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <tr className="border-t border-b border-[#eeeeee]">
      <td className="w-[30px] p-0 border-0 text-center">
        <a
          onClick={handleRemoveCart}
          title="Remove"
          className="btn remove opacity-100 h-[22px] w-[22px] rounded-full p-[5px] leading-[12px] border-0 inline-block text-center align-middle cursor-pointer bg-[#ef5b5b] text-white font-normal uppercase text-[13px] transition-all duration-300 ease-in-out whitespace-nowrap hover:text-white hover:bg-[#262525]"
        >
          <CloseOutlined />
        </a>
      </td>
      <td className="border-0 text-center w-[110px] p-[10px]">
        <a onClick={() => handleNavigation(item?.product?.url)}>
          <img className="cart__image" src={item?.image?.src} />
        </a>
      </td>
      <td className="text-left p-[10px] border-0">
        <a
          onClick={() => handleNavigation(item?.product?.url)}
          className="overflow-hidden text-ellipsis whitespace-nowrap w-full block text-[#111] text-[14px] font-normal hover:text-[#f06543] hover:opacity-[0.8]"
        >
          <b>{item?.product?.title} </b>
        </a>

        <div className="py-[5px] text-[13px] italic">
          size: {item?.size}
          <br />
        </div>
      </td>
      <td className="text-left p-[10px] border-0">
        <div
          className="pn-price-item text-center"
          data-id="43435273453809:3f4a60b498f4b371c9d448618a464cea"
        >
          ${item?.price?.amount}
        </div>
      </td>
      <td className="p-[10px] border-0 align-middle flex justify-center items-center mt-6">
        <div
          className="w-[90px] mr-[10px] flex border border-[#dddddd] rounded-none text-center"
          title="Quantity"
        >
          <a
            className="qtyBtn minus leading-[17px] m-0 text-black w-[28px] h-[38px] text-center py-[11px] bg-transparent rounded-none"
            onClick={() => {
              setState({ quantity: state.quantity - 1 || 1 });
            }}
          >
            <MinusOutlined />
          </a>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={state?.quantity}
            className="m-0 text-black w-[28px] h-[38px] leading-normal text-center py-[11px] bg-transparent rounded-none border-0"
          />
          <a
            className="qtyBtn plus leading-[17px] m-0 text-black w-[28px] h-[38px] text-center py-[11px] bg-transparent rounded-none"
            onClick={() => {
              setState({ quantity: state.quantity + 1 });
            }}
          >
            <PlusOutlined />
          </a>
        </div>
      </td>
      <td className="text-right small--hide">
        <div>
          <div
            className="pn-total-line-item"
            data-id="43435273453809:3f4a60b498f4b371c9d448618a464cea"
          >
            ${item?.price?.amount * state.quantity}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Detail;
