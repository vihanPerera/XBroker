import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function CustomRef({ value1, value2, value3, value4, date, manifest}) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderColor: '#0A623A', minHeight: '54px' }}
    >
        <Box display={'flex'}>
            <CustomTypography text={value1} />
            <CustomTypography text={value2} sx={{ marginLeft: '4px' }}/>
        </Box>
        <CustomLabel text={"Customs Reference Number:"} />
        <Box display={'flex'}>
            <CustomTypography text={value3} />
            <CustomTypography text={value4} sx={{ marginLeft: '12px' }} />
            <CustomTypography text={date} sx={{ marginLeft: '12px' }} />
        </Box>
        <Box display={'flex'}>
            <CustomLabel text={"Manifest"} sx={{ marginTop: '8px' }}/>
            <CustomTypography text={manifest} sx={{ marginTop: '6px', marginLeft: '8px' }}/>
        </Box>
    </Box>
  );
}

export default CustomRef;