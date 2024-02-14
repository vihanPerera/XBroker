import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Entity( { header, value, company, address, minHeight, margin, border }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: border? 3: 0, borderBottom: 3, borderColor: '#0A623A', minHeight: minHeight }}
    >
        <Box display="flex">
            <CustomLabel text={header}/>
            <CustomLabel text={"TIN:"} sx={{ marginLeft: margin }}/>
            <CustomTypography text={value} sx={{ marginLeft: '10px', marginTop: '-3px' }}/>
        </Box>

        <Box marginTop={'8px'}>
            <CustomTypography text={company}/>
            <CustomTypography text={address}/>
        </Box>
    </Box>
  );
}

export default Entity;