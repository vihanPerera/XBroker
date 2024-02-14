import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function NatureOf({ header, value1, value2,  }) {
  return (
    <Box
        p={1}
        sx={{ borderLeft: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '60px', marginLeft: '-30px'}}
    >
        <CustomLabel text={header} />
        <Box  display="flex" sx={{marginTop: '2px',}}>
            <CustomTypography text={value1} sx={{ paddingRight: '4px' }} />
            <CustomTypography text={value2} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingRight: '4px', paddingLeft: '4px' }} />
            <CustomLabel text={"Transt."} sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }} />
        </Box>
    </Box>
  );
}

export default NatureOf;