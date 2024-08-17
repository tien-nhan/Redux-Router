import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const Index = ({ children }) => {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  const { pathname } = useLocation();
  const type = pathname?.split("/");
  useEffect(() => {
    fetch(`https://665f0fcd1e9017dc16f2a71a.mockapi.io/api/bitis`)
      .then((res) => res.json())
      .then((s) => {
        setState({
          listAllData: s.reduce((a, c) => [...a, ...c?.productVariants], []),
        });
      });
  }, []);

  const name = useMemo(() => {
    return (
      state.listAllData
        ?.find((o) => o.product.url.split("/")[1] === type?.[2])
        ?.product?.title?.toUpperCase() ||
      type?.[2]?.toUpperCase() ||
      type?.[1]?.toUpperCase()
    );
  }, [state.listAllData, type]);

  return (
    <div className="min-h-[500px]">
      <div className="bredcrumbWrap bg-[#f9f9f9] mb-[30px]">
        <nav
          className="page-width breadcrumbs mx-auto px-[15px] max-w-[1200px] py-[8px]"
          role="navigation"
          aria-label="breadcrumbs"
        >
          <a
            href="/"
            title="Back to the home page"
            className="text-[#111] inline-block pr-[3px] mr-[3px] text-[12px]"
          >
            Home
          </a>

          <span
            aria-hidden="true"
            className="symbol text-[#111] inline-block pr-[3px] mr-[3px] text-[12px]"
          >
            |
          </span>
          <span className="title-bold text-[#111] inline-block pr-[3px] mr-[3px] text-[12px] font-bold">
            {name}
          </span>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Index;
