// import React from "react";

// interface Props {
//   label: string;
//   name: string;
//   value: string | number;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error: string | undefined;
//   type?: "text" | "number" | "datetime-local"; // Add more types as needed
// }

// const InputField: React.FC<Props> = ({
//   label,
//   name,
//   value,
//   onChange,
//   error,
//   type = "text",
// }) => {
//   return (
//     <div className="mb-4">
//       <label
//         htmlFor={name}
//         className="block text-sm font-medium text-gray-700"
//       >
//         {label}
//       </label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`mt-1 block w-full px-3 py-2 border ${
//           error ? "border-red-500" : "border-gray-300"
//         } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//         required
//       />
//       {error && (
//         <p className="text-red-500 text-xs mt-1">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default InputField;

// import React from "react";
// import * as z from "zod";

// interface InputFieldProps {
//   id: string;
//   label: string;
//   type: string;
//   name: string;
//   value: string | number;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   id,
//   label,
//   type,
//   name,
//   value,
//   error,
//   onChange,
// }) => {

// //   let setError
// //   if (error?.length > 1) {
// //     setError=error?.map((e) => {
// //         if(e.path[0]==name){
// //             return e.message
// //         }
// //         else{
// //             return null
// //         }
// //     });
// //     console.log(setError)
// console.log(error)
//   }
//   return (
//     <div className="mb-4">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`mt-1 block w-full px-3 py-2 border *:border-gray-300 ${
//           setError ? "border-red-500" : ""
//         } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//         required
//       />
//       {setError && (
//         <p className="text-red-500 text-xs mt-1 font-bold">*{setError}</p>
//       )}
//     </div>
//   );
// };

// export default InputField;

// import React, { useState } from "react";

// interface InputFieldProps {
//   id: string;
//   label: string;
//   type: string;
//   name: string;
//   value: string | number;
//   error?: string[];
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   id,
//   label,
//   type,
//   name,
//   value,
//   error,
//   onChange,
// }) => {
//     console.log(error)
//     let [errors,setErrors]=useState([])
//    error?.some((e) => {
//     if(e.path[0] == name){
//         let err={
//             name=e.message
//             flag=true
//         }
//         setErrors([...errors,err])
//     }
//    });
//   console.log(hasError)

//   return (
//     <div className="mb-4">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`mt-1 block w-full px-3 py-2 border ${
//           hasError.flag? "border-red-500" : "border-gray-300"
//         } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}

//       />
//       {hasError.flag && (
//         <p className="text-red-500 text-xs mt-1 font-bold">
//           {/* *{error?.find((e) => e.path[0] === name)?.message} */}
//           *{hasError.name}
//         </p>
//       )}
//     </div>
//   );
// };

// export default InputField;

import React, { useState, useEffect } from "react";
import { ZodIssue } from "zod";
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string | number;
  error?: { path: string[] | ZodIssue[]; message: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  value,
  error,
  onChange,
}) => {
  const [errors, setErrors] = useState<{ name: string; flag: boolean }[]>([]);

  useEffect(() => {
    console.log("call");
    if (error && error.length > 0) {
      const newErrors = error
        .filter((e) => e.path[0] === name)
        .map((e) => ({ name: e.message, flag: true }));
      setErrors(newErrors);
    }
  }, [error, name]);

  const hasError = errors.length > 0;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          hasError ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
      {hasError && (
        <p className="text-red-500 text-xs mt-1 font-bold">*{errors[0].name}</p>
      )}
    </div>
  );
};

export default InputField;
