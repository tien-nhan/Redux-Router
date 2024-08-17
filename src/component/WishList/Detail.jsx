import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { removeFromWishList } from "../../slices/ProductSlice";
import { useDispatch } from "react-redux";

const Detail = ({ item }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Thực hiện điều hướng và push state
    navigate(path, { state: { item } });
  };
  const handleRemoveWishList = () => {
    dispatch(removeFromWishList(item));
  };

  return (
    <li className="border-t border-[#e5e5e5] relative list-none py-4 table text-xs w-full m-0">
      <div className="product_img table-cell align-middle w-[100px] p-0">
        <a
          onClick={() => handleNavigation(item?.product?.url)}
          class="product-grid-image"
        >
          <img src={item?.image?.src} alt="" />
        </a>
      </div>
      <div className="product_name table-cell align-middle text-left pl-5">
        <a
          onClick={() => handleNavigation(item?.product?.url)}
          className="product-title text-xs"
        >
          {item?.product?.title}
        </a>
      </div>
      <div className="product_price table-cell align-middle w-[14%]">
        <p className="product-price__price regular-product text-[#ed4e4e] mb-0">
          <span className="money">${item?.price?.amount} </span>
        </p>
      </div>
      <div className="product_stock table-cell align-middle text-center min-w-[110px] w-[15%] text-[#76bd1c]">
        In Stock
      </div>
      <div className="product_add table-cell align-middle w-[170px] text-center">
        <a
          onClick={() => handleNavigation(item?.product?.url)}
          className="btn btn-view inline-block w-auto text-center align-middle cursor-pointer border-2 border-transparent bg-[#ef5b5b] text-white font-normal uppercase leading-none whitespace-normal transition-all duration-300 ease-in-out text-[13px] py-[10px] px-[24px] select-none appearance-none rounded-none  hover:text-white hover:bg-[#111] hover:border hover:border-transparent"
        >
          View Product
        </a>
      </div>
      <div className="product_remove table-cell align-middle text-right w-10">
        <a
          className="btn btn-remove-wishlist btn--secondary inline-block w-auto text-center align-middle cursor-pointer border-2 border-transparent bg-[#e34848] text-white font-normal uppercase leading-none text-[15px] py-[9px] px-[9px] transition-all duration-300 ease-in-out hover:text-white hover:bg-[#111] hover:border hover:border-transparent"
          title="Remove From Wishlist"
          onClick={handleRemoveWishList}
        >
          <CloseOutlined />
        </a>
      </div>
    </li>
  );
};

export default Detail;
