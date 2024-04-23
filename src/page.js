// App.js
import React, { useState } from "react";
import "./page.css";
import Stake from "./Stake";
import Liquidity from "./Liquidity";

function Page() {
  const [currentPage, setCurrentPage] = useState("liquidity");

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => switchPage("stake")}>STAKE</button>
        <button onClick={() => switchPage("liquidity")}>LIQUIDITY</button>
      </div>
      <div className="content">
        {currentPage === "liquidity" && <LiquidityPage />}

        {currentPage === "stake" && <StakePage />}
      </div>
    </div>
  );
}

function StakePage() {
  return (
    <div className="page">
      <Stake />
    </div>
  );
}

function LiquidityPage() {
  return (
    <div className="page">
      <Liquidity />
    </div>
  );
}

export default Page;
