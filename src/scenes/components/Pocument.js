import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Pocument({ value1, value2 }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderColor: '#0A623A', minHeight: '54px', }}
    >
        <Box  display="flex">
            <Box width='350px'>
                <CustomLabel text={'Previous Pocument / BL No./ AWB No.'} />
            </Box>
            <Box width='40px'>
                <CustomLabel text={'SL'} />
            </Box>
        </Box>
        <Box  display="flex" marginTop='2px'>
            <Box width='350px'>
                <CustomTypography text={value1} />
            </Box>
            <Box width='40px'>
                <CustomTypography text={value2} />
            </Box>
        </Box>
    </Box>
  );
}

export default Pocument;