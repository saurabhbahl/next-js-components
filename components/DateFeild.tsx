import React, { useState } from "react";
import { FormData } from "./Form";

interface DateFieldProps {
  formData: FormData;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DateField: React.FC<DateFieldProps> = ({ formData, handleChange }) => {
  let [date, setDate] = useState(false);
  return (
    <div className="w-1/3">
      <label className="block text-sm font-medium text-gray-700">Date</label>
      {date ? (
       <input
       style={{
        appearance: 'none', // Remove default styling
        background: 'none', // Make background transparent
        border: 'none', // Remove border if desired
        outline: 'none' // Remove outline
      }}
       required
       type="date"
       name="date"
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none bg-transparent"
       value={formData.date}
       onChange={handleChange}
       onMouseEnter={() => setDate(true)}
       onMouseLeave={() => setDate(false)}
       style={{ background: 'none' }} 
     />
     
      ) : (
        <input
          value={formData.date}
          readOnly={true}
          onMouseEnter={() => setDate(true)}
          onMouseLeave={() => setDate(false)}
          className="mt-1 w-full px-3 py-[9px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-3xl "
        />
      )}

      {/* <input
        required
        type="date"
        name="date"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={formData.date}
        onChange={handleChange}
        onMouseEnter={() => setDate(true)}
        onMouseLeave={() => setDate(false)}
      /> */}
    </div>
  );
};

export default DateField;
