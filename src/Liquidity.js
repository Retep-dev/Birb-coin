import React, { useState } from "react";
import "./Liquidity.css"; // Import CSS file for styling

const Liquidity = () => {
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
        <div className="amount-section">
          <div className="section-two">
            <div className="justify-around">
              <div>
                <form onSubmit={handleSubmit} className="form-container-1">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    className="amount-input-1"
                  />
                </form>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  Connect Wallet
                </button>
              </div>
              <div className="display-flex">
                <div className="left-section">
                  <h2>Unlock Fee</h2>
                  <h2>Gas Fee</h2>
                  <h2>Exchange Rate</h2>
                  <h2>Allowance</h2>
                  <h2>You Will Receive</h2>
                </div>
                <div className="right-section-3">
                  <h2>$1.31</h2>
                  <h2>$2.35</h2>
                  <h2>1 stETH = 0.9247 </h2>
                  <h2>0.0 stETH</h2>
                  <h2>0.0 wstETH</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="amount-section">
          <div className="section-two">
            <div className="justify-around">
              <div>
                <form onSubmit={handleSubmit} className="form-container-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    className="amount-input-2"
                  />
                </form>
              </div>

              <div>
                <button type="submit" className="submit-button">
                  Connect Wallet
                </button>
              </div>
              <div className="display-flex">
                <div className="left-section">
                  <h2>Gas Fee</h2>
                  <h2>Exchange Rate</h2>
                </div>
                <div className="right-section-3">
                  <h2>$2.35</h2>
                  <h2>wstETH = 1.0815</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
