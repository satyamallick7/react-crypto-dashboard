import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];

  const [chosenPrimary, setChosenPrimary] = useState("BTC");
  const [chosenSecondary, setChosenSecondary] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  const convert = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimary,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondary,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h1>CurrencyConverter</h1>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  onChange={(event) => {
                    setAmount(event.target.value);
                  }}
                  type="number"
                  name="currency-amount-1"
                />
              </td>
              <td>
                <select
                  value={chosenPrimary}
                  onChange={(event) => {
                    setChosenPrimary(event.target.value);
                  }}
                  name="currency-option-1"
                  className="currency-option"
                >
                  {currencies.map((currency) => (
                    <option>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input type="number" name="currency-amount-2" disabled={true} value={result}/>
              </td>
              <td>
                <select
                  value={chosenSecondary}
                  onChange={(event) => {
                    setChosenSecondary(event.target.value);
                  }}
                  name="currency-option-2"
                  className="currency-option"
                >
                  {currencies.map((currency) => (
                    <option>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="convert-btn" onClick={convert}>
          Convert
        </button>
      </div>

      <ExchangeRate exchangeRate={exchangeRate} chosenPrimary={chosenPrimary} chosenSecondary={chosenSecondary}/>
    </div>
  );
};

export default CurrencyConverter;
