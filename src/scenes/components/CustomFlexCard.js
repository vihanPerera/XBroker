import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function CustomFlexCard({ header, value1, value2, minHeight, margin, borderBottom, borderRight, sx = {} }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: borderBottom? 3: 0, borderRight: borderRight? 3: 0, borderColor: '#0A623A', minHeight: minHeight, }}
    >
        <CustomLabel text={header} />
        <Box display={'flex'} sx={{ ...sx }}>
            <CustomTypography text={value1} />
            <CustomTypography text={value2} sx={{ marginLeft: margin }} />
        </Box>
    </Box>
  );
}

export default CustomFlexCard;