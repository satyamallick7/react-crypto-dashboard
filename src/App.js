import React from "react";
import "./App.css";
import Newsfeed from "./components/Newsfeed";
import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRate from "./components/ExchangeRate";


function App() {
  return (
    <div className="app">
      <CurrencyConverter />
      <Newsfeed />
      
    </div>
  );
}

export default App;
