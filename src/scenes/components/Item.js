import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Item({ header, value1, value2 }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderRight: 3, borderColor: '#0A623A', minHeight: '58px', }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <Box width='80px'>
                <CustomTypography text={value1} sx={{ paddingRight: '2px' }} />
            </Box>
            <Box sx={{ borderLeft: 3, borderColor: '#0A623A', }}>
                <CustomTypography text={value2} sx={{ marginLeft: '8px', paddingLeft: '2px' }} />
            </Box>
        </Box>
    </Box>
  );
}

export default Item;