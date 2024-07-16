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
        appearance: 'none', 
        background: 'none', 
        border: 'none', 
        outline: 'none' 
      }}
       required
       type="date"
       name="date"
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none bg-transparent"
       value={formData.date}
       onChange={handleChange}
       onMouseEnter={() => setDate(true)}
       onMouseLeave={() => setDate(false)}
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

    
    </div>
  );
};

export default DateField;
