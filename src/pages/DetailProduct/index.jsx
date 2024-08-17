import React from "react";
import { Main } from "../../component";
import Left from "./Left";
import Right from "./Right";

const Index = () => {
  return (
    <Main>
      <div className="shopify-section">
        <div class="mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="list-none m-0 -mx-4 p-0">
            <Left />
            <Right />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
