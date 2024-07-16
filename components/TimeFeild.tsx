import React, { useEffect, useState } from "react";

type Props = {
  formData: {
    time: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TimeField: React.FC<Props> = ({ formData, handleChange }) => {
  let [time, setTime] = useState(false);
  useEffect(() => {
    
    // setTime((prev) => !prev);
  }, [formData.time]);
  return (
    <div className="w-1/3">
      <label className="block text-sm font-medium text-gray-700">Time</label>
      {time ? (
        <input
          required
          placeholder="Time"
          type="time"
          name="time"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={formData.time}
          onMouseLeave={()=> setTime(false)}
          onMouseEnter={()=> setTime(true)}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          className="mt-1 w-full px-3 py-[9px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-3xl "
          value={formData.time}
          onMouseLeave={()=> setTime(false)}
          onMouseEnter={()=> setTime(true)}
          readOnly
        />
      )}
    </div>
  );
};

export default TimeField;
