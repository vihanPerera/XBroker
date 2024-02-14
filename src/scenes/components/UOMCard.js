import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function UOMCard( { header, uom, qty, borderBottom, minHeight}) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: borderBottom? 3: 0, borderColor: '#0A623A', minHeight: minHeight }}
    >
        <CustomLabel text={header} />
        <Box display={'flex'} justifyContent={'space-between'}>
            <CustomTypography text={uom} />
            <CustomTypography text={qty} />
        </Box>
    </Box>
  );
}

export default UOMCard;