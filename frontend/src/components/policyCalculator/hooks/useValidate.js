import { useState } from "react";

const useValidate = () => {
  const [validate, setValidate] = useState({});
  const handleValidate = (type, value) => {
    switch (type) {
      case "PPT":
        setValidate({
          [type]: "",
        });
        if (value > 10 || value < 5)
          setValidate({
            ...validate,
            [type]: "PPT value should be 5<=PPT<=10",
          });
        break;

      case "PT":
        setValidate({
          [type]: "",
        });
        if (value > 20 || value < 10)
          setValidate({
            ...validate,
            [type]: "PT value should be 10<=PPT<=20",
          });
        break;

      default:
        break;
    }
  };

  return { validate, handleValidate };
};

export default useValidate;
