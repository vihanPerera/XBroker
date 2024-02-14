import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';

function LeftPanel( { text, borderBottom, minHeight, sx = {} }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1.5, pl: 0.4, borderRight: 6, borderBottom: borderBottom, borderColor: '#0A623A', minHeight: minHeight, ...sx}}>
        <Box sx={{ textAlign: 'left' }}>
            <CustomLabel text={text}/>
        </Box>
    </Box>
  );
}

export default LeftPanel;