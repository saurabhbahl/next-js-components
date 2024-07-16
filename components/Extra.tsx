"use client";
import React, { useRef, useState } from "react";
import { FormData } from "./Form";

interface DateFieldProps {
  formData: FormData;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Extra: React.FC = () => {
  let [date, setDate] = useState(true);
  let ref=useRef()
  let [val,setVal]=useState<string>("")
  console.log(val)
  console.log(ref)
  return (
    <div className="w-1/3">
      <label className="block text-sm font-medium text-gray-700">Date</label>
      <input
        required
        ref={ref}
        type="text"     
        placeholder="YYYY/MM/DD"
        onFocus={(e) => {
          e.target.type = "date"; 
        }}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.type = "text"; 
          }
        }}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={val}
        onChange={(e) => setVal(e.target.value)} 
      />
      {/* {date ? (
        <input
          required
          type="date"
          name="date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={val}
          onChange={(e)=>setVal(e.target.value)}
          onMouseEnter={() => setDate(true)}
          onMouseLeave={() => setDate(false)}
        />
      ) : (
        <input
          value={val}
          readOnly={true}
          onMouseEnter={() => setDate(true)}
          onMouseLeave={() => setDate(false)}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      )} */}
    </div>
  );
};

export default Extra;
