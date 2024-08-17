import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item, onAddWishList }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Thực hiện điều hướng và push state
    navigate(path, { state: { item } });
  };
  return (
    <div className="grid__item fadeIn w-1/4 float-left px-4">
      <div className="grid-view-item mb-[30px] text-center relative z-0 border border-transparent transition-all duration-300 ease-out fadeIn group">
        <div className="grid-view_image w-full overflow-hidden relative z-10">
          <a
            className="grid-view-item__link opacity-100"
            onClick={() => handleNavigation(item?.product?.url)}
          >
            <div
              className="grid-view-item__image primary lazyloaded transition-all duration-400 ease-out cursor-pointer"
              data-bgset={item?.image?.src}
              data-parent-fit="contain"
            >
              <picture className="group-hover:hidden">
                <source
                  data-srcSet={item?.image?.src}
                  sizes="238px"
                  srcSet={item?.image?.src}
                />
                <img
                  alt=""
                  className="lazyautosizes lazyloaded ls-is-cached h-56"
                  data-sizes="auto"
                  data-parent-fit="cover"
                  sizes="238px"
                  src={item?.image?.src}
                />
              </picture>
            </div>
            <div
              className="grid-view-item__image hover lazyloaded transition-all duration-400 ease-out cursor-pointer"
              data-bgset={item?.image?.src}
              data-parent-fit="contain"
            >
              <picture className="hidden group-hover:block">
                <source
                  data-srcSet={item?.image?.src}
                  sizes="238px"
                  srcSet={item?.image?.src}
                />
                <img
                  alt=""
                  className="lazyautosizes lazyloaded ls-is-cached h-56"
                  data-sizes="auto"
                  data-parent-fit="cover"
                  sizes="238px"
                />
              </picture>
            </div>
            <div className="grid-view-item__image hover variantImg"></div>
          </a>
          <div className="button-set w-full block text-0 absolute -bottom-[30px] left-0 z-[444] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:bottom-3">
            <a
              className="tooltip-group btn wishlist addto-wishlist inline-block border-0 bg-[#111] relative text-[18px] p-0 m-[2px] leading-[35px] w-[38px] h-[36px] text-center rounded-[25px] cursor-pointer"
              rel="bitis-hunter-core-dsmh09400xam-grey"
              onClick={() => {
                onAddWishList(item);
              }}
            >
              <HeartOutlined className="text-white" />
              <span className="tooltip-label text-[11px] leading-[18px] transition-all duration-200 ease-in-out invisible opacity-0 bg-black text-white rounded-none px-1.5 whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 -translate-x-1/2">
                Add to Wishlist
              </span>
            </a>

            <a
              className="tooltip-group btn btn-options inline-block border-0 bg-[#111] relative text-[18px] p-0 m-[2px] leading-[35px] w-[38px] h-[36px] text-center rounded-[25px] cursor-pointer"
              onClick={() => handleNavigation(item?.product?.url)}
            >
              <ShoppingCartOutlined className="text-white" />
              <span className="tooltip-label text-[11px] leading-[18px] transition-all duration-200 ease-in-out invisible opacity-0 bg-black text-white rounded-none px-1.5 whitespace-nowrap absolute bottom-[calc(100%+20px)] left-1/2 -translate-x-1/2">
                Select Options
              </span>
            </a>
          </div>
        </div>
        <div className="details pt-[15px] pr-[10px] pb-[10px] pl-[10px]">
          <a
            onClick={()=>handleNavigation(item?.product?.url)}
            className="grid-view-item__title overflow-hidden text-ellipsis whitespace-nowrap w-full block text-[#111] text-[14px] text-normal font-normal"
          >
            {item?.product?.title}
          </a>
          <div className="grid-view-item__meta mt-[5px] mb-[10px] mx-0">
            <span className="visually-hidden absolute overflow-hidden h-[1px] w-[1px] -m-[1px] p-0 border-0 clip-rect-0">
              Regular price
            </span>
            <span className="product-price__price text-[14px] font-normal inline-block text-[#ed4e4e]">
              ${item?.price?.amount}
            </span>
          </div>

          <span
            className="shopify-product-reviews-badge"
            data-id="7847277691121"
          ></span>

          <ul className="gridSwatches"></ul>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
