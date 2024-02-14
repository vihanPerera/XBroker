import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function CityOfLast({ header, value1, value2,  }) {
  return (
    <Box
        p={1}
        sx={{ borderBottom: 3, borderColor: '#0A623A', minHeight: '54px' }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <Box width='50px'>
                <CustomTypography text={value1} sx={{ paddingRight: '2px' }} />
            </Box>
            <Box sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}} width='50px'>
                <CustomTypography text={value2} sx={{ marginLeft: '30px', paddingLeft: '2px' }} />
            </Box>
        </Box>
    </Box>
  );
}

export default CityOfLast;