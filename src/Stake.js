import React, { useState } from "react";
import "./Stake.css"; // Import CSS file for styling

const Stake = () => {
  // State for the amount entered in the input field
  const [amount, setAmount] = useState("");

  // Function to handle input change
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality to handle form submission here
    console.log("Submitted:", amount);
  };

  return (
    <div className="krypto-container">
      <div className="display-flex-col">
        <div className="display-flex-1">
          <div className="left-section">
            <h2>Available to Stake</h2>
            <p>0.0 stETH</p>
          </div>
          <div className="right-section">
            <h2>0xCd3E...59BDa6yegred</h2>
          </div>
        </div>
        <div className="display-flex-2">
          <div className="left-section">
            <h2>Stake Amounts</h2>
            <p>0.0 stETH</p>
          </div>
          <div className="right-section-2">
            <h2>Lido APR</h2>
            <p>3.9%</p>
          </div>
        </div>
        <div className="amount-section">
          <div className="section-two">
            <div className="justify-around">
              <div>
                <form onSubmit={handleSubmit} className="form-container-3">
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    className="amount-input"
                  />
                </form>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
              <div className="display-flex">
                <div className="left-section">
                  <h2>You will receive</h2>
                  <h2>Exchange rate</h2>
                  <h2>Transaction cost</h2>
                  <h2>Reward fee</h2>
                </div>
                <div className="right-section-3">
                  <h2>0stETH</h2>
                  <h2>1ETH = 1 stETH</h2>
                  <h2>$1.69</h2>
                  <h2>10%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lido-stat-section">
          <div className="display-flex-4">
            <div className="left-section">
              <h2>Lido statist</h2>
            </div>
            <div className="right-section-2">
              <h2>Lido statist</h2>
            </div>
          </div>
          <div className="display-flex">
            <div className="left-section">
              <h2>Annual perentage rate</h2>
              <h2>Total staked with Lido</h2>
              <h2>Stakers</h2>
              <h2>stETH market cap</h2>
            </div>
            <div className="right-section-3">
              <h2>0stETH</h2>
              <h2>1ETH = 1 stETH</h2>
              <h2>$1.69</h2>
              <h2>10%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
