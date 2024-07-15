import React from 'react'

const DateFeild = ({formData,handleChange}) => {
  return (
    <div className="w-1/3 ">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                required
                type="date"
                name="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
  )
}

export default DateFeild