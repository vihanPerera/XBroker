import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Country( { header, value, border}) {
  return (
    <Box
        p={1}
        sx={{ borderRight: border? 3: 0, borderBottom: 3, borderColor: '#0A623A', minHeight: '54px' }}
    >
        <CustomLabel text={header} />
        <CustomTypography text={value} />
    </Box>
  );
}

export default Country;