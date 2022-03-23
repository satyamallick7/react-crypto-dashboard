import React from "react";

const ExchangeRate = ({ exchangeRate, chosenPrimary, chosenSecondary }) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1> {exchangeRate}</h1>
      <p>{chosenPrimary} to {chosenSecondary}</p>
    </div>
  );
};

export default ExchangeRate;
