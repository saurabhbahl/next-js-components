"use client";
import React, { useState } from "react";
import * as z from "zod";
import InputField from "./InputFeild";
import TimeFeild from "./TimeFeild";
import TimeField from "./TimeFeild";
import DateFeild from "./DateFeild";
import PatientPosition from "./PatientPosition";

const schema = z.object({
  patient_chart_id: z.number().min(1),
  blood_pressure_systolic: z.number().min(1),
  blood_pressure_diastolic: z.number().min(1).max(355),
  pulse_rate: z.number().min(1),
  respiratory_rate: z.number().min(1).max(5000),
  body_temperature: z.number().min(1),
  oxygen_saturation_level: z.number().min(1).max(300),
  weight: z.number().min(1).max(900),
  height: z.number().min(1).max(255),
  body_mass_index: z.number().min(1),
  additional_notes: z.string().min(1).max(5000),
  patient_position: z.string().min(3),
  recorded_time: z.string(),
  date: z.string(),
  time: z.string(),
  // .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
  // .refine((value) => {
  //   const date = new Date(value);
  //   return !isNaN(date.getTime());
  // }, "Invalid date format"),
});

export type FormData = {
  patient_chart_id?: number | null;
  blood_pressure_systolic?: number | null;
  blood_pressure_diastolic?: number | null;
  pulse_rate?: number | null;
  respiratory_rate?: number | null;
  body_temperature?: number | null;
  oxygen_saturation_level?: number | null;
  weight?: number | null;
  height?: number | null;
  body_mass_index?: number | null;
  additional_notes?: string | null;
  recorded_time?: string | null;
  patient_position?: string | null;
  date?: string | null;
  time?: string | null;
};
// type FormData = z.infer<typeof schema>;

let defaultFormData: FormData = {
  patient_chart_id: null,
  blood_pressure_systolic: null,
  blood_pressure_diastolic: null,
  pulse_rate: null,
  respiratory_rate: null,
  body_temperature: null,
  oxygen_saturation_level: null,
  weight: null,
  height: null,
  body_mass_index: null,
  additional_notes: null,
  recorded_time: null,
  patient_position: null,
  date: null,
  time: null,
};
// throw new Error("Error occured")
const Form = ({ params = 0 }: { params: number }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  // setFormData({ formData, patient_chart_id: params })
  // console.log(process.env.HOST)
  // console.log(process.env.BACKEND_URL)

  const [formErrors, setFormErrors] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("env", process.env.NEXT_PUBLIC_BACKEND_URL);
    if (
      name === "date" ||
      name === "time" ||
      name === "patient_position" ||
      name === "additional_notes"
    ) {
      setFormData({
        ...formData,
        [name]: value,
      });
      return;
    }

    const numericValue = Number(value);
    const newValue = isNaN(numericValue) ? value : numericValue;
    console.log(newValue, typeof newValue);
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let date = new Date();

    // setFormErrors(null);
    const combinedDateTime = `${formData.date} ${
      formData.time
    }:${date.getSeconds()}`;
    setFormData({
      ...formData,
      recorded_time: combinedDateTime,
      patient_chart_id: params,
    });
    console.log("Form submitted with data:", formData);
    console.log(formErrors)
    try {
      const combinedDateTime = `${formData.date} ${
        formData.time
      }:${date.getSeconds()}`;
      schema.parse({
        ...formData,
        recorded_time: combinedDateTime,
      });
      setFormData({
        ...formData,
        recorded_time: combinedDateTime,
      });
      setFormErrors(null);

      const response = await fetch(`http://localhost:3000/api/post-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData(defaultFormData);
        alert("Form Submitted sucessfully");
      } else {
        alert("Form not submitted");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("Validation errors:", error);
        setFormErrors(error.issues);
      }
    }
  };

  console.log(formData);

  let fields = [
    {
      id: "blood_pressure_systolic",
      label: "Blood Pressure Systolic",
      type: "number",
      name: "blood_pressure_systolic",
      value: formData.blood_pressure_systolic,
    },
    {
      id: "blood_pressure_diastolic",
      label: "Blood Pressure Diastolic",
      type: "number",
      name: "blood_pressure_diastolic",
      value: formData.blood_pressure_diastolic,
    },
    {
      id: "pulse_rate",
      label: "Pulse Rate",
      type: "number",
      name: "pulse_rate",
      value: formData.pulse_rate,
    },
    {
      id: "respiratory_rate",
      label: "Respiratory Rate",
      type: "number",
      name: "respiratory_rate",
      value: formData.respiratory_rate,
    },
    {
      id: "body_temperature",
      label: "Body Temperature",
      type: "number",
      name: "body_temperature",
      value: formData.body_temperature,
    },
    {
      id: "oxygen_saturation_level",
      label: "Oxygen Saturation Level",
      type: "number",
      name: "oxygen_saturation_level",
      value: formData.oxygen_saturation_level,
    },
    {
      id: "weight",
      label: "Weight",
      type: "number",
      name: "weight",
      value: formData.weight,
    },
    {
      id: "height",
      label: "Height",
      type: "number",
      name: "height",
      value: formData.height,
    },
    {
      id: "body_mass_index",
      label: "Body Mass Index",
      type: "number",
      name: "body_mass_index",
      value: formData.body_mass_index,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl text-center bg-gray-200 w-full py-2  font-semibold text-gray-900 mb-2">
          Add Record - Vital Signs
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <p className="font-bold    text-md my-2">Date and Time & Position</p>
          <div className="flex gap-4 justify-center items-center mb-4">
            <DateFeild formData={formData} handleChange={handleChange} />
            {/* <div className="w-1/2 pr-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                required
                type="date"
                name="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.date}
                onChange={handleChange}
              />
            </div> */}
            {/* <div className="w-1/2 pl-2">
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.time}
                onChange={handleChange}
              />
              {formData?.time == "" && (
                <p className="text-red-500 text-xs mt-1 font-bold">
                  *Select the Time
                </p>
              )}
            </div> */}
            <TimeField formData={formData} handleChange={handleChange} />
            <PatientPosition formData={formData} handleChange={handleChange} />
          </div>

          <p className="font-bold text-md my-2">Vital Signs</p>
          <div className="grid grid-cols-3 gap-4">
            {fields.map((field) => (
              <InputField
                key={field.name}
                id={field.id}
                label={field.label}
                type={field.type}
                name={field.name}
                value={field.value}
                error={formErrors}
                onChange={handleChange}
              />
            ))}
          </div>
          <p className="font-bold text-md my-2">Notes</p>
          <textarea
            className={`mt-1 block w-full px-3 py-2 border ${
              formErrors?.some((e) => e.path[0] === "additional_notes")
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            name="additional_notes"
            value={formData.additional_notes}
            onChange={handleChange}
          ></textarea>
          {formErrors?.map((e) => {
            if (e.path[0] === "additional_notes") {
              return (
                <p key={e.id} className="text-red-500 text-xs mt-1 font-bold">
                  *{e.message}
                </p>
              );
            }
            return null;
          })}

          <div className="flex gap-3 items-center justify-center   ">
            <button
              type="reset"
              onClick={() => setFormData(defaultFormData)}
              className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
