import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Mode({ header, body, value, marginTop }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '60px' }}
    >
        <CustomLabel text={header}/>
        <Box  display="flex" sx={{ marginTop: marginTop, }}>
            <CustomTypography text={value} />
            <CustomLabel text={body} sx={{ marginLeft: '30px', borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px' }}/>
        </Box>
    </Box>
  );
}

export default Mode;