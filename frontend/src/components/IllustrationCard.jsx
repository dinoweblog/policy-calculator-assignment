import { TableRow, TableCell } from "@mui/material";

export const IllustrationCard = ({ data }) => {
  return (
    <TableRow>
      <TableCell align="left">{data.DOB}</TableCell>
      <TableCell align="left">{data.gender}</TableCell>
      <TableCell align="left">{data.sumAssured}</TableCell>
      <TableCell align="left">{data.modelPremium}</TableCell>
      <TableCell align="left">{data.premiumFrequency}</TableCell>
      <TableCell align="left">{data.PT}</TableCell>
      <TableCell align="left">{data.PPT}</TableCell>
    </TableRow>
  );
};
