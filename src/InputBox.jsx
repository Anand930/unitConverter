import React from "react";

const InputBox = ({ selectValue, options, inputValue, inputOnChange,selectOnChange, readOnly=false }) => {
  return (
    <div className="flex items-center justify-center gap-6 mx-auto ">
      <input
        className="border-2 border-orange-700 w-52 h-12 px-4 bg-orange-300 text-orange-700 font-bold  rounded-xl"
        value={inputValue}
        type="text" 
        onChange={inputOnChange}
        readOnly={readOnly}
      />
      <select className="w-40 h-12 border-2 border-orange-700 text-orange-700 px-3 font-bold bg-orange-300 rounded-lg" value={selectValue} onChange={selectOnChange}> 
        {options}
      </select>
    </div>
  );
};

export default InputBox;
