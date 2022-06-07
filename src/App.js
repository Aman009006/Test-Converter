import './App.css';
import CurrencyInput from "./CurrencyInput";
import {useState} from "react";

function App() {

  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');

  const stateCurrency = {
     base  : " EUR " ,
      rates : {
     USD  : 1.07 ,
     EUR  : 1 ,
     KGZ  : 84.955337 ,
     GBP  : 0.85 ,
     JPY  : 141.7404 ,
     INR  : 83.111374 ,
     CHF  : 1.040842 
  }
  }

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * stateCurrency.rates[currency2] / stateCurrency.rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * stateCurrency.rates[currency2] / stateCurrency.rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * stateCurrency.rates[currency1] / stateCurrency.rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * stateCurrency.rates[currency1] / stateCurrency.rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div>
      <h1>Конвертор валют</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(stateCurrency.rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(stateCurrency.rates)}
        amount={amount2}
        currency={currency2} />
    </div>
  );
}

export default App;
