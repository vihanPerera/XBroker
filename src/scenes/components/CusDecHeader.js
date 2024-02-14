import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';

function CusDecHeader() {
  return (
    <Box  m="0.8rem 0.8rem 0rem 0.8rem" height="56px" width="1200px" display= 'flex' flexDirection= 'column' justifyContent= 'flex-end' sx={{ border: 3, borderBottom: 0, borderRight: 6, borderColor: '#0A623A', backgroundColor: "#ffffff", padding: 0.4 }}>   
        <Box
            sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            width: '100%'
            }}
        >
            <CustomLabel text={"CUSDEC I"} sx={{paddingTop: '1rem'}}/>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingRight: '12rem',
                }}
            >
              <CustomLabel text={"SCHEDULE II"}/>
              <CustomLabel text={"SRI LANKA CUSTOMS - GOODS DECLARATION"}/>
            </Box>
            <CustomLabel text={"Customs - 53"} sx={ { paddingRight: '16px', paddingTop: '1rem' }}/>
        </Box>
    </Box>
  );
}

export default CusDecHeader;