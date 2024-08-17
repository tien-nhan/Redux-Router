import React, { useState } from "react";
import {
  ToolOutlined,
  HeartOutlined,
  PaperClipOutlined,
  MailOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, addToWishList } from "../../slices/ProductSlice";
import { useDispatch } from "react-redux";

const Right = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, _setState] = useState({
    size: item?.size || "6.5",
    quantity: item?.quantityitem || 1,
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const onChangeSize = (size) => {
    setState({ size });
  };
  const onAddToWishList = () => {
    dispatch(addToWishList(item));
  };
  const onAddToCart = () => {
    dispatch(
      addToCart({ ...item, size: state.size, quantity: state.quantity })
    );
    navigate("/cart");
  };
  return (
    <div className="grid__item medium-up--one-half product-single__meta mb-[45px] relative w-1/2 float-left pl-[15px] pr-[15px]">
      <h1 className="product-single__title text-[#111] capitalize font-semibold text-[22px] mb-[15px]">
        {item?.product?.title}
      </h1>
      <div className="product-info text-[#333] mb-5">
        <div className="review inline-block mr-[25px]">
          <a className="reviewLink text-[#000000b3]" href="#tab1551070927092">
            <span
              className="shopify-product-reviews-badge text-[#000000b3]"
              data-id="7823776907505"
            ></span>
          </a>
        </div>
        <div className="product-stock inline-block mr-[25px]">
          <span className="instock text-[#76bd1c]">In Stock</span>
        </div>
        <div className="product-sku inline-block mr-[25px]">
          SKU: <span className="variant-sku text-[#333]">{item?.sku}</span>
        </div>
      </div>
      <p className="flex leading-[1.4] items-center flex-wrap mb-[20px]">
        <span className="text-[#e95144] text-[20px] font-semibold mr-[10px]">
          <span
            id="ProductPrice-product-template"
            className="text-[#e95144] text-[20px] font-semibold"
          >
            ${item?.price?.amount}
          </span>
        </span>
      </p>
      <div
        className="product__policies rte mt-[-20px] mb-[20px]"
        data-product-policies=""
      >
        <a href="/policies/shipping-policy" className="p-b-[1px]">
          Shipping
        </a>{" "}
        calculated at checkout.
      </div>
      <div
        id="quantity_message"
        data-qty="18"
        className="text-white px-3 py-[1px] mb-5 inline-block bg-black"
      >
        Hurry, Only <span className="items">4</span> left!
      </div>
      <div className="product-form mfp-link flex flex-wrap -mx-[5px] mb-[10px]">
        <div
          className="swatch clearfix option1 mb-[15px] px-[5px] w-full"
          data-option-index="0"
        >
          <label className="header mb-2 uppercase block">
            size:{" "}
            <span className="slVariant min-w-[40px] inline-block font-bold">
              {state.size}
            </span>
            <a
              href="#sizechart"
              className="mfp sizelink ml-3 text-xs font-normal text-[#444] no-underline"
              data-effect="mfp-zoom-in"
            >
              <ToolOutlined /> Size Chart
            </a>
          </label>
          <div
            data-value="6.5"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer shadow-none text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "6.5" ? "border-[#e55151]" : "border-transparent"
              }`}
              htmlFor="7823776907505-0-6-5"
              onClick={() => {
                onChangeSize("6.5");
              }}
            >
              6.5
            </label>
          </div>{" "}
          <div
            data-value="7.5"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "7.5"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-7-5"
              onClick={() => {
                onChangeSize("7.5");
              }}
            >
              7.5
            </label>
          </div>{" "}
          <div
            data-value="8"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "8"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-8"
              onClick={() => {
                onChangeSize("8");
              }}
            >
              8
            </label>
          </div>{" "}
          <div
            data-value="9"
            className="swatch-element inline-block mr-1 mb-0 relative"
            onClick={() => {
              onChangeSize("9");
            }}
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "9"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-9"
            >
              9
            </label>
          </div>{" "}
          <div
            data-value="10"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "10"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-10"
              onClick={() => {
                onChangeSize("10");
              }}
            >
              10
            </label>
          </div>{" "}
          <div
            data-value="10.5"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "10.5"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-10-5"
              onClick={() => {
                onChangeSize("10.5");
              }}
            >
              10.5
            </label>
          </div>{" "}
          <div
            data-value="11.5"
            className="swatch-element inline-block mr-1 mb-0 relative"
          >
            <label
              className={`cursor-pointer text-[#333] text-[12px] font-normal leading-[32px] text-center inline-block m-0 min-w-[35px] h-[35px] px-[10px] bg-[#f5f5f5] border-2 rounded-[5px] ${
                state.size === "11.5"
                  ? "border-[#e55151] shadow-none"
                  : "border-transparent"
              }`}
              htmlFor="7823776907505-0-11-5"
              onClick={() => {
                onChangeSize("11.5");
              }}
            >
              11.5
            </label>
          </div>
        </div>
      </div>
      <div className="infolinks mfp-link">
        <a
          className="cursor-pointer inline-block align-top m-0 mr-[15px] mb-[15px] ml-0 text-[#000] hover:text-[#000] hover:opacity-80"
          onClick={() => {
            onAddToWishList(item);
          }}
          rel="bitis-hunter-core-mens-sneaker-dsmh09400den-black"
        >
          <HeartOutlined className="mr-1" />
          <span className="msg">Add to Wishlist</span>
        </a>
        <a
          href="#ShippingInfo"
          data-effect="mfp-zoom-in"
          className="inline-block align-top m-0 mr-[15px] mb-[15px] ml-0 text-[#000] hover:text-[#000] hover:opacity-80"
        >
          <PaperClipOutlined className="mr-1" />
          Delivery &amp; Returns
        </a>
        <a
          href="#productInquiry"
          data-effect="mfp-zoom-in"
          className="inline-block align-top m-0 mr-[15px] mb-[15px] ml-0 text-[#000] hover:text-[#000] hover:opacity-80"
        >
          <MailOutlined className="mr-1" /> Enquiry
        </a>
      </div>
      <div className="flex w-full relative mb-[15px] flex-wrap">
        <div
          className="w-[90px] mr-[10px] flex border border-[#dddddd] rounded-none"
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
        <button
          name="add"
          id="AddToCart-product-template"
          className="inline-block w-auto no-underline text-center align-middle cursor-pointer border-[2px] border-transparent text-white font-normal uppercase leading-tight whitespace-normal transition-all duration-300 text-[13px] py-[10px] px-[24px] select-none appearance-none rounded-none max-w-[500px] flex-1 h-[40px] mb-0 border-[#111] bg-[#111] hover:bg-white hover:text-black hover:border hover:border-black"
          onClick={onAddToCart}
        >
          <span id="AddToCartText-product-template">Add to cart</span>
        </button>
      </div>
      <img src="../images/paypal.png" />
    </div>
  );
};

export default Right;
