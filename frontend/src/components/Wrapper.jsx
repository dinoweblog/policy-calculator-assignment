import { Box } from "@mui/material";

export const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#ffffff",
        width: "70%",
        margin: "auto",
        alignItems: "center",
        p: 10,
        borderRadius: 10,
        mt: 10,
      }}
    >
      <Box flex={1} textAlign="center">
        <img
          style={{
            width: "40%",
          }}
          src="./avatar.png"
          alt=""
        />
      </Box>
      {children}
    </Box>
  );
};
