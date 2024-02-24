import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
    const theme = useTheme();
    return (
      <Box>
        <Typography
          variant="h3"
          color={theme.palette.secondary[100]}
          fontWeight="bold"
          ml={1}
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Box>
    );
  };
  
  export default Header;