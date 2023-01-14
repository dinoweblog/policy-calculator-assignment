const useValidate = () => {
  const [validate, setValidate] = useState({});
  const handleValidate = ({ type, value }) => {
    switch (type) {
      case "PPT":
        if (value > 10 || value < 5)
          setValidate({
            ...validate,
            [type]: "PPT value should be 5<=PPT<=10",
          });
        return validate;
        break;

      default:
        break;
    }
  };

  return handleValidate;
};

export default useValidate;
