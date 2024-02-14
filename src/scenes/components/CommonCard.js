import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function CommonCard( { header, value, minHeight, textAlign, marginTop, borderRight, borderBottom, borderLeft, borderTop, sx = {} }) {
  return (
    <Box
        p={1}
        sx={{ minHeight: minHeight, borderRight: borderRight? 3: 0, borderBottom: borderBottom? 3: 0,  borderTop: borderTop? 3: 0, borderLeft: borderLeft? 3: 0, borderColor: '#0A623A', ...sx}}
    >
        <CustomLabel text={header} />
        <CustomTypography text={value} sx={{ textAlign: textAlign, marginTop: marginTop }}/>
    </Box>
  );
}

export default CommonCard;