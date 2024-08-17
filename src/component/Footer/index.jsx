import React from "react";

const index = () => {
  return (
    <div id="shopify-section-footer" className="shopify-section">
      <footer
        className="site-footer mt-12 text-[13px] text-[#111] bg-[#fafafa] border-t border-[#eeeeee]"
        role="contentinfo"
      >
        <div className="footer-fw px-16">
          <div className="footer-top footer-block flex w-full items-stretch flex-wrap -mb-[30px] -ml-[30px] py-[35px] px-0">
            <div className="footer-block flex-none mb-[30px] pl-[30px] max-w-full w-1/4">
              <h4 className="h4 text-black text-[14px] tracking-normal mb-[15px] font-bold">
                SUPPORT
              </h4>
              <ul>
                <li>
                  <a href="https://bitis.com/apps/trackingmore">
                    Checking Order
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/delivery-methods"
                    className="hover:opacity-70 hover:underline"
                  >
                    Delivery Method
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/checkout-methods"
                    className="hover:opacity-70 hover:underline"
                  >
                    Checkout Method
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/return-policy"
                    className="hover:opacity-70 hover:underline"
                  >
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block flex-none mb-[30px] pl-[30px] max-w-full w-1/4">
              <h4 className="h4 text-black text-[14px] tracking-normal mb-[15px] font-bold">
                INFORMATION
              </h4>
              <ul>
                <li>
                  <a href="/" className="hover:opacity-70 hover:underline">
                    Store Finder
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/contact-us"
                    className="hover:opacity-70 hover:underline"
                  >
                    Cooperation With Biti's
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/delivery-methods"
                    className="hover:opacity-70 hover:underline"
                  >
                    Q&amp;A
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block flex-none mb-[30px] pl-[30px] max-w-full w-1/4">
              <h4 className="h4 text-black text-[14px] tracking-normal mb-[15px] font-bold">
                ABOUT BITI'S
              </h4>
              <ul>
                <li>
                  <a
                    href="/pages/activities-1"
                    className="hover:opacity-70 hover:underline"
                  >
                    {" "}
                    Activities
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/bitis-development"
                    className="hover:opacity-70 hover:underline"
                  >
                    Biti's Development
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/bitis-stories"
                    className="hover:opacity-70 hover:underline"
                  >
                    Biti's Stories
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/contact-us"
                    className="hover:opacity-70 hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block flex-none mb-[30px] pl-[30px] max-w-full w-1/4">
              <p className="footer-logo mb-[15px]">
                <img
                  className="autoHt ls-is-cached lazyloaded"
                  data-src="//bitis.com/cdn/shop/files/logo-with-slogan.png?v=1622043051"
                  width="220"
                  height="130.98148148148147"
                  alt="Bitis"
                  src="//bitis.com/cdn/shop/files/logo-with-slogan.png?v=1622043051"
                />
              </p>
              <div className="text custom-text">
                <p className="mb-[15px]">BINH TIEN IMEX CORP., PTE., LTD</p>
                <p className="mb-[15px]">
                  <strong>Phone</strong>: (480) 570 1811
                </p>
                <p className="mb-[15px]">
                  <strong>Email: </strong>support@bitis.com
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="flex footer-fw">
            <div className="text-center">
              <div className="row">
                <div className="col-md-6 col-xs-9">
                  <div className="block_list">
                    <p>
                      <span className="text-xs">
                        © Copyright Bitis.com&nbsp;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <span className="designBy">
                <br />
                Designed by{" "}
                <a href="https://www.adornthemes.com" target="_blank">
                  AdornThemes
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
