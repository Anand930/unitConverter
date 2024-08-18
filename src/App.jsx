import { useEffect, useState } from "react";
import InputBox from "./InputBox";

function App() {
  const [currencyData, setCurrencyData] = useState({});
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState("usd");
  const [convertedInput, setConvertedInput] = useState(0)
  const [convertedSelectValue, setConvertedSelectValue] = useState("inr")

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const clickHandler = async(e)=>{
    e.preventDefault();
    setConvertedInput(Math.round(inputValue * currencyData[selectValue][convertedSelectValue]))
    console.log(inputValue*currencyData[selectValue]?typeof Number:"not found")
  }


  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectValue}.json`)
      .then((res) => res.json())
      .then((data) => setCurrencyData(data))
      .catch((err) => console.log(err));
  }, [selectValue]);

  
  
  const apikeys = currencyData[selectValue] ? Object.keys(currencyData[selectValue]) : [];
  const options = apikeys.map((item, i) => (
    <option value={item} key={i}>
      {item}
    </option>
  ));

  const selectOnChange = (e) => {

    setSelectValue(e.target.value);
  };

  const convertedSelectOnChange = (e) => {
    setConvertedSelectValue(e.target.value)
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center gap-6 items-center">
      <h1 className="font-bold text-4xl text-orange-500">Currency Converter</h1>
      <div className="flex flex-col justify-center items-center gap-6 border-2 bg-orange-200 rounded-2xl border-orange-700 w-2/5 h-60 ">
        <InputBox
          selectValue={selectValue}
          options={options}
          inputValue={inputValue}
          inputOnChange={inputOnChange}
          selectOnChange={selectOnChange}
        />
        <InputBox
         readOnly={true}
         selectValue={convertedSelectValue}
         options={options}
         inputValue={convertedInput}
         selectOnChange={convertedSelectOnChange}
         />
         <h1 className="font-bold text-center text-xl border-2 border-orange-700 bg-orange-300 p-2 w-48 cursor-pointer text-orange-700  rounded-lg " onClick={clickHandler}>convert</h1>
      </div>
    </div>
  );
}

export default App;
