import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Commodity({ header, value1, value2, value3 }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderRight: 3, borderColor: '#0A623A', minHeight: '58px', }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <Box width='80px' sx={{ borderRight: 3, borderColor: '#0A623A', }}>
                <CustomTypography text={value1} sx={{ paddingRight: '2px' }} />
            </Box>
            <Box width='40px'>
                <CustomTypography text={value2} sx={{ paddingRight: '2px', paddingLeft: '6px' }} />
            </Box>
            <Box sx={{ borderLeft: 3, borderColor: '#0A623A', }}>
                <CustomTypography text={value3} sx={{ marginLeft: '8px', paddingLeft: '2px' }} />
            </Box>
        </Box>
    </Box>
  );
}

export default Commodity;