import React from "react";
import { data } from "../Mock";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const [changeValue, setChangeValue] = React.useState(
    localStorage.getItem("lang") || "uzb"
  );
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    localStorage.setItem("lang", changeValue);
  }, [changeValue]);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = data[changeValue].input_name;
    }

    const phonePattern = /^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phone)) {
      newErrors.phone = `${data[changeValue].input_phone}`;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //     try {
    //       const rawResponse = await fetch(
    //         "https://api.ept.myschoollc.uz/api/v1/student/register",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({ name: name, phone_number: phone }),
    //         }
    //       );

    //       if (!rawResponse.ok) {
    //         throw new Error(`HTTP error! status: ${rawResponse.status}`);
    //       }

    //       const content = await rawResponse.json();
    //       if (content.status === 200) {
    //         navigate("/thankyou");
    //       }
    //     } catch (error) {
    //       console.error("Error during submission:", error);
    //     }
    // }

    if(phone,name ){
      navigate("/thankyou");
    }
  };

  return {
    changeValue,
    setChangeValue,
    name,
    setName,
    phone,
    setPhone,
    errors,
    setErrors,
    handleSubmit,
  };
};

export default useRegister;
