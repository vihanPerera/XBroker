import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Pages({ header, value1, value2 }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 3, borderTop: 3, borderColor: '#0A623A', minHeight: '65px', marginTop: '-65px' }}
    >
        <CustomLabel text={header} />
        <Box  display="flex" sx={{marginTop: '1px',}}>
            <CustomTypography text={value1} sx={{ paddingLeft: '8px', paddingRight: '8px', marginTop: '4px' }}/>
            <CustomTypography text={value2} sx={{ borderLeft: 3, marginTop: '4px', borderColor: '#0A623A', paddingLeft: '8px' }}/>
        </Box>
    </Box>
  );
}

export default Pages;