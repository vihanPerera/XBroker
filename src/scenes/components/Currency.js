import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Currency({ header, currency, totalAmount, }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '60px' }}
    >
        <CustomLabel text={header} />
        <Box  display="flex" sx={{marginTop: '2px',}}>
            <CustomTypography text={currency} />
            <CustomTypography text={totalAmount} sx={{ marginLeft: '10px', borderLeft: 3, borderColor: '#0A623A', paddingLeft: '8px' }} />
        </Box>
    </Box>
  );
}

export default Currency;