import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function CityCode( { header, value1, value2, border}) {
  return (
    <Box
        p={1}
        sx={{ borderRight: border? 3: 0, borderBottom: 3, borderColor: '#0A623A', minHeight: '54px', }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <CustomLabel text={"a"} sx={{ paddingRight: '4px' }} />
            <CustomTypography text={value1} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingRight: '8px', paddingLeft: '4px' }} />
            <CustomLabel text={"b"} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingRight: '4px', paddingLeft: '4px' }} />
            <CustomTypography text={value2} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }} />
        </Box>
    </Box>
  );
}

export default CityCode;