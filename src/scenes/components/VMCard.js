import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function VMCard({ header, value1, }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderColor: '#0A623A', minHeight: '54px', }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <CustomTypography text={value1} sx={{ paddingLeft: '4px', paddingRight: '4px', }}/>
            <CustomTypography text={'cod'} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }}/>
        </Box>
    </Box>
  );
}

export default VMCard;