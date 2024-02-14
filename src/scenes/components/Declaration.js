import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Declaration({value1, value2, value3}) {
  return (
    <Box
        p={1}
        sx={{ borderLeft: 6, borderTop: 6, borderRight: 6, borderColor: '#0A623A', minHeight: '54px', marginTop: '-20px',  backgroundColor: "#ffffff", marginLeft: '-2px'}}
    >
        <CustomLabel text={"1 DECLARATION"} />
        <Box  display="flex">
            <CustomTypography text={value1} sx={{ paddingRight: '8px' }} />
            <CustomTypography text={value2} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingRight: '8px', paddingLeft: '8px' }} />
            <CustomTypography text={value3} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '8px' }} />
        </Box>
    </Box>
  );
}

export default Declaration;