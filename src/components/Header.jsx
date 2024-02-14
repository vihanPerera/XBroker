import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
    const theme = useTheme();
    return (
      <Box>
        <Typography
          variant="h2"
          color={theme.palette.secondary[100]}
          fontWeight="bold"
          sx={{ mb: "4px" }}
        >
          {title}
        </Typography>
      </Box>
    );
  };
  
  export default Header;