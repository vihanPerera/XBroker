import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function Voyage({ header, voyageNo, date, value }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '60px' }}
    >
        <CustomLabel text={header}/>
        <Box display={'flex'}>
            <CustomTypography text={voyageNo} />
            <CustomTypography text={date} sx={{ marginLeft: '16px' }} />
            <CustomTypography text={value} sx={{ marginLeft: '295px', borderLeft: 3, borderColor: '#0A623A', paddingLeft: '8px' }}/>
        </Box>
    </Box>
  );
}

export default Voyage;