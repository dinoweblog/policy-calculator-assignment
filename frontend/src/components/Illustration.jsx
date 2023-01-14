import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { API_LINK } from "../api";
import { IllustrationCard } from "./IllustrationCard";

export const Illustration = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`${API_LINK}/policy-calc`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "auto", mt: 5, width: "90%" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">DOB</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Sum Assured</TableCell>
            <TableCell align="left">Model Premium</TableCell>
            <TableCell align="left">Premium Frequency</TableCell>
            <TableCell align="left">PT</TableCell>
            <TableCell align="left">PPT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <IllustrationCard key={item._id} data={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
