import React from "react";
import Dropdown from "./Dropdown";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Index = () => {
  const product = useSelector((state) => state.product);
  const { pathname } = useLocation();
  const type = pathname.split("/")[2];

  return (
    <div className="relative z-10 bg-white border-b border-[#eeeeee]">
      <header className="flex w-full items-center min-h-10 relative px-4 mx-auto max-w-[1200px]">
        <div className="header-logo flex-1 m-0 min-w-44 max-w-36">
          <a href="/" className="header-logo-link font-bold text-3xl">
            <img
              className="block max-w-32 max-h-20"
              src="//bitis.com/cdn/shop/files/embrace_happiness_paths_of_all_125x.png?v=1668669166"
              alt="Bitis"
            />
          </a>
        </div>
        <div className="shopify-section small--hide medium--hide flex-1">
          <ul
            id="siteNav"
            className="siteNavigation gap-10 flex justify-center"
            role="navigation"
            data-section-id="site-navigation"
            data-section-type="site-navigation"
          >
            <li className="lvl1 parent dropdown relative inline-block text-left mr-2 list-none group">
              <a
                href="/collections/men"
                className={`text-[#111] text-[13px] font-semibold uppercase relative leading-[40px] no-underline block opacity-100 hover:text-red-400 ${
                  type === "men" ? "text-red-400" : ""
                }`}
              >
                MEN
              </a>
            </li>
            <li className="lvl1 parent dropdown relative inline-block text-left mr-2 list-none group">
              <a
                href="/collections/women"
                className={`text-[#111] text-[13px] font-semibold uppercase relative leading-[40px] no-underline block opacity-100 hover:text-red-400 ${
                  type === "women" ? "text-red-400" : ""
                }`}
              >
                WOMEN
              </a>
            </li>
            <li className="lvl1 parent dropdown relative inline-block text-left mr-2 list-none group">
              <a
                href="/collections/girl"
                className={`text-[#111] text-[13px] font-semibold uppercase relative leading-[40px] no-underline block opacity-100 hover:text-red-400 ${
                  type === "girl" ? "text-red-400" : ""
                }`}
              >
                GIRLS
              </a>
            </li>
          </ul>
        </div>
        <div className="icons-col flex">
          <a
            href="/wish-list"
            className="hdicon wishlist relative text-[#030505] inline-block h-[30px] leading-[30px] text-center px-[9px]"
            title="Wishlist"
          >
            <HeartOutlined />
            <span className="favCount absolute bg-[#000] text-[#fff] min-w-[16px] h-[16px] rounded-full leading-[17px] text-[11px] right-[-7px] top-[-3px]">
              {product?.wishList?.length || 0}
            </span>
          </a>
          <a
            href="/cart"
            className="hdicon relative text-[#030505] inline-block h-[30px] leading-[30px] text-center px-[9px]"
            title="Cart"
          >
            <ShoppingCartOutlined />
            <span
              id="CartCount"
              className="site-header__cart-count absolute bg-[#000] text-[#fff] min-w-[16px] h-[16px] rounded-full leading-[17px] text-[11px] right-[-7px] top-[-3px]"
              data-cart-render="item_count"
            >
              {product?.cart?.length || 0}
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Index;
