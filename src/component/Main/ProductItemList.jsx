import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItemList = ({ item, onAddWishList }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Thực hiện điều hướng và push state
    navigate(path, { state: { item } });
  };
  return (
    <div
      className="list-view-item wow fadeInUp table table-fixed mb-[10px] pb-[20px] w-full relative"
      data-wow-delay="0ms"
    >
      <div className="list-view-item__image-column table-cell align-middle w-[230px]">
        <div className="list-view-item__image-wrapper relative mr-[20px] overflow-hidden text-center">
          <a
            onClick={() => handleNavigation(item?.product?.url)}
            className="hover:text-[#f06543] hover:opacity-80 hover:outline-none transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              className="list-view-item__image primary lazyautosizes lazyloaded"
              src={item?.image?.src}
              data-widths="[180, 360, 540, 720, 900, 1080, 1200]"
              data-aspectratio="1.0"
              data-sizes="auto"
              data-srcset={item?.image?.src}
              sizes="210px"
              srcset={item?.image?.src}
            />
          </a>
          {/* <div className="product-labels rectangular">
            <label className="lbl sold-out">
              <span>Sold out</span>
            </label>
          </div> */}
        </div>
      </div>
      <div className="list-view-item__title-column table-cell align-middle">
        <a
          onClick={() => handleNavigation(item?.product?.url)}
          className="list-view-item__title text-[#111] text-[17px] font-bold"
        >
          {item?.product?.title}
        </a>

        <span
          className="shopify-product-reviews-badge"
          data-id="7747183542513"
        ></span>

        <p>{item?.product?.untranslatedTitle}</p>
        <p className="list-view-item__meta my-3">
          {/* <span className="visually-hidden">Regular price</span> */}
          <span className="product-price__price inline-block font-bold text-[#ed4e4e]">
            ${item?.price?.amount}
          </span>
        </p>
        <div className="listview-button">
          <a
            className="btn btn-options h-[37px] leading-[36px] px-[10px] inline-block align-top w-auto text-decoration-none text-center cursor-pointer border-2 border-transparent bg-[#ef5b5b] text-white font-normal uppercase transition-all duration-300 ease-in-out text-[13px] rounded-none mr-1 hover:bg-black"
            onClick={() => handleNavigation(item?.product?.url)}
          >
            Select Options
          </a>
          <a
            className="btn wishlist addto-wishlist h-[37px] leading-[36px] px-[10px] inline-block align-top w-auto text-decoration-none text-center cursor-pointer border-2 border-transparent bg-[#ef5b5b] text-white font-normal uppercase transition-all duration-300 ease-in-out text-[13px] rounded-none hover:bg-black"
            rel="bitis-hunter-street-x-vietmax-arising-vietnam-r9-bold-womens-sneakers-dswh05600den"
            onClick={() => onAddWishList(item)}
          >
            <HeartOutlined className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItemList;
