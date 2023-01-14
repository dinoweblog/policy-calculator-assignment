import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_LINK } from "../../api";

export const PolicyCalculator = () => {
  const [details, setDetails] = useState({
    DOB: "",
    gender: "",
    sumAssured: "",
    modelPremium: "",
    premiumFrequency: "",
    PT: "",
    PPT: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setDetails({ ...details, [name]: value });
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
      .then(() => {
        navigate("/illustration");
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
        borderRadius: 10,
      }}
    >
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
          />
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              // value={gender}
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
          name="sumAssured"
          label="Sum Assured"
          variant="outlined"
        />

        <TextField
          type="number"
          name="modelPremium"
          label="Model Premium"
          variant="outlined"
        />
        <FormControl>
          <InputLabel id="premium-frequency">Premium Frequency</InputLabel>
          <Select
            labelId="premium-frequency"
            // value={age}
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
            name="PT"
            label="PT"
            variant="outlined"
          />
          <TextField
            sx={{ flex: 1 }}
            type="number"
            name="PPT"
            label="PPT"
            variant="outlined"
          />
        </Box>

        <Button type="submit" variant="contained">
          Check
        </Button>
      </form>
    </Box>
  );
};
