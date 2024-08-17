import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
import {  addToWishList } from "../../slices/ProductSlice";
import { useLocation } from "react-router-dom";
import ProductItemList from "./ProductItemList";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
};

const RightComponent = () => {
  const [state, _setState] = useState({ display: "grid" });
  const dispatch = useDispatch();
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  const { pathname } = useLocation();
  const type = pathname.split("/")[2];
  useEffect(() => {
    const id = type === "girl" ? 3 : type === "women" ? 2 : 1;
    fetch(`https://665f0fcd1e9017dc16f2a71a.mockapi.io/api/bitis/${id}`)
      .then((res) => res.json())
      .then((s) => {
        setState(s);
      });
  }, [type]);

  const onAddToWishList = (item) => {
    dispatch(addToWishList(item));
  };

  return (
    <div className='className="grid__item large-up--one-quarter sidebar filterbar left transition-all duration-300 ease-in-out w-3/4 float-right pl-[15px] pr-[15px]'>
      <div className="mb-6">
        <div className="relative">
          <Slider
            {...settings}
            prevArrow=<ArrowBackIosIcon />
            nextArrow=<ArrowForwardIosIcon />
          >
            <img
              src="https://bitis.com/cdn/shop/files/MEN_1200x.webp?v=1652154185"
              alt="banner"
            />
            <img
              src="https://bitis.com/cdn/shop/files/WOMEN_1200x.webp?v=1652154207"
              alt="banner"
            />
          </Slider>
        </div>
      </div>
      <div className="clPageBnr info-below bg-transparent relative bg-center bg-no-repeat bg-cover text-left">
        <h1
          className="collection-title text-[#111111] text-[18px] uppercase font-bold mb-0"
          itemProp="name"
        >
          Sneaker {state.title}
        </h1>
      </div>
      <div className="topSpace h-7"></div>
      <div className="productList">
        <div className="filters-toolbar flex flex-wrap items-center justify-between mb-5">
          <div className="filters-toolbar__item collection-view-as">
            <button
              type="button"
              title="Grid View"
              className={`change-view text-lg leading-none bg-none border-0 px-0.5 py-0 ${
                state.display === "grid" ? "opacity-100" : "opacity-50"
              }`}
              data-view="grid"
              onClick={() => {
                setState({ display: "grid" });
              }}
            >
              <AppstoreOutlined />
            </button>
            <button
              type="button"
              title="List View"
              className={`change-view text-lg leading-none bg-none border-0 px-0.5 py-0 ${
                state.display === "list" ? "opacity-100" : "opacity-50"
              }`}
              data-view="list"
              onClick={() => {
                setState({ display: "list" });
              }}
            >
              <UnorderedListOutlined />
            </button>
          </div>

          <div className="filters-toolbar__item flbarCount small--hide text-[14px]">
            <span className="filters-toolbar__product-count">
              Showing: {state?.productVariants?.length || 0} Results
            </span>
          </div>

          <div className="filters-toolbar__item text-right text-[14px]">
            <select
              name="SortBy"
              id="SortBy"
              className="filters-toolbar__input filters-toolbar__input--sort text-[12px] h-auto max-w-[140px] min-w-inherit m-0 p-[5px] pl-[5px] pr-[25px] border-0"
            >
              <option value="title-ascending" selected="selected">
                Sort By
              </option>
              <option value="manual">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="title-ascending">A-Z</option>
              <option value="title-descending">Z-A</option>
              <option value="price-ascending">Lowest Price</option>
              <option value="price-descending">Highest Price</option>
              <option value="created-descending">New to Old</option>
              <option value="created-ascending">Old to New</option>
            </select>
          </div>
        </div>
        {state.display === "grid" ? (
          <div className="grid-rows-4">
            {state?.productVariants?.map((item) => (
              <ProductItem item={item} onAddWishList={onAddToWishList} />
            ))}
          </div>
        ) : (
          <div className="list-view-items">
            {state?.productVariants?.map((item) => (
              <ProductItemList item={item} onAddWishList={onAddToWishList} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightComponent;
