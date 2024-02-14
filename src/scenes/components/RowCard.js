import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function RowCard({ header, value1, value2, minHeight, width, sx = {} }) {
  return (
    <Box
        p={1}
        display='flex'
        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: minHeight }}
    >
        <Box sx={{ borderRight: 3, borderColor: '#0A623A', width: width}}>
            <CustomLabel text={header}/>
            <CustomTypography text={value1} />
        </Box>

        <Box>
            <CustomTypography text={value2} sx={{ marginTop: '16px', marginLeft: '8px' }}/>
        </Box>
    </Box>
  );
}

export default RowCard;