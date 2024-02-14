import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function DocumentCard( { dval, qty, licence, }) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 0, borderColor: '#0A623A', minHeight: '173.2px' }}
    >
        <Box marginTop="8px">
            <Box display={'flex'}>
                <CustomLabel text={"Licence No"} />
                <CustomLabel text={"D.val"} sx={{ marginLeft: '160px' }} />
                <CustomLabel text={"D.Qty"} sx={{ marginLeft: '160px' }} />
                <CustomTypography text={qty} sx={{ marginLeft: '24px', marginTop: "-2px" }} />
            </Box>
            <Box display={'flex'} marginTop='10px' marginLeft='50px'>
                <CustomTypography text={licence} sx={{ marginTop: "2px" }} />
                <CustomTypography text={dval} sx={{ marginLeft: '90px', marginTop: "2px" }} /> 
            </Box>
            <Box display={'flex'} marginTop='10px'>
                <CustomLabel text={'A.D.'} sx={{ marginTop: "2px" }} />
            </Box>
        </Box>
    </Box>
  );
}

export default DocumentCard;