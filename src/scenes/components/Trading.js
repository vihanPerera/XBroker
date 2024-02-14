import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Trading({ header, body, value, }) {
  return (
    <Box
        p={1}
        sx={{ borderLeft: 3, borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '57.5px', marginLeft: '-14px' }}
    >
        <CustomLabel text={header} />
        <Box  display="flex">
            <Box>
                <CustomTypography text={value} sx={{ paddingRight: '3px' }} />
            </Box>
            <Box sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}}>
                <CustomLabel text={body} sx={{ paddingLeft: '1px' }} />
            </Box>
        </Box>
    </Box>
  );
}

export default Trading;