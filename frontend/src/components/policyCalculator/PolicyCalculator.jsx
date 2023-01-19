import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { API_LINK } from "../../api";
import useValidate from "./hooks/useValidate";

export const PolicyCalculator = () => {
  const [successMgs, setSuccessMsg] = useState("");
  const [details, setDetails] = useState({
    DOB: "",
    gender: "",
    sumAssured: "",
    modelPremium: "",
    premiumFrequency: "",
    PT: "",
    PPT: "",
  });

  const { validate, handleValidate } = useValidate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
    handleValidate(name, value);
    setSuccessMsg("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_LINK}/policy-calc`, {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSuccessMsg(res.message);
        setDetails({
          DOB: "",
          gender: "",
          sumAssured: "",
          modelPremium: "",
          premiumFrequency: "",
          PT: "",
          PPT: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        width: "40%",
        margin: "auto",
        p: 10,
        mt: 5,
        borderRadius: 5,
      }}
    >
      <Typography>Policy Calculator</Typography>
      <form
        className="policy-calculator-form"
        onSubmit={handleSubmit}
        onChange={handleChange}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 25,
          margin: "auto",
        }}
      >
        <Box sx={{ display: "flex", gap: "10%" }}>
          <TextField
            sx={{ flex: 1 }}
            type="date"
            name="DOB"
            variant="outlined"
            value={details.DOB}
            inputProps={{ "data-testid": "dob" }}
          />
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              SelectDisplayProps={{ "data-testid": "gender" }}
              labelId="gender"
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          type="number"
          inputProps={{ "data-testid": "sumAssured" }}
          name="sumAssured"
          label="Sum Assured"
          variant="outlined"
          value={details.sumAssured}
        />

        <TextField
          type="number"
          inputProps={{ "data-testid": "modelPremium" }}
          name="modelPremium"
          label="Model Premium"
          variant="outlined"
          value={details.modelPremium}
        />
        <FormControl>
          <InputLabel id="premium-frequency">Premium Frequency</InputLabel>
          <Select
            SelectDisplayProps={{ "data-testid": "premiumFrequency" }}
            labelId="premium-frequency"
            name="premiumFrequency"
            onChange={handleChange}
          >
            <MenuItem value="Yearly">Yearly</MenuItem>
            <MenuItem value="Half-Yearly">Half-Yearly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", gap: "10%" }}>
          <TextField
            sx={{ flex: 1 }}
            type="number"
            inputProps={{ "data-testid": "PT" }}
            name="PT"
            label="PT"
            variant="outlined"
            value={details.PT}
          />
          <TextField
            sx={{ flex: 1 }}
            type="number"
            inputProps={{ "data-testid": "PPT" }}
            name="PPT"
            label="PPT"
            variant="outlined"
            value={details.PPT}
          />
        </Box>
        <Typography sx={{ color: "red" }}>{validate.PPT}</Typography>
        <Typography sx={{ color: "red" }}>{validate.PT}</Typography>

        <Button type="submit" variant="contained">
          Check
        </Button>
        <Typography sx={{ color: "red" }} data-testid="success-msg">
          {successMgs}
        </Typography>
      </form>
    </Box>
  );
};
