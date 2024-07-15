import React from "react";

const PatientPosition = ({ formData, handleChange }) => {
  return (
    <div className="w-1/3 ">
      <label
        htmlFor="patient_position"
        className="block text-sm font-medium text-gray-700"
      >
        Patient Position
      </label>
      <select
        id="patient_position"
        name="patient_position"
        value={formData.patient_position}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      >
        <option value="">Select Patient Position</option>
        <option value="sitting">Sitting</option>
        <option value="standing">Standing</option>
        <option value="prone">Prone</option>
      </select>
    </div>
  );
};

export default PatientPosition;
