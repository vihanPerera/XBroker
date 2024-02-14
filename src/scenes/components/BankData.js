import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function BankData({ bankCode, terms, bankName, branch, refNo}) {
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    gap={15}
    p={1}
    sx={{ borderColor: '#0A623A', minHeight: '130px' }}
>
        <Box display="flex">
            <CustomLabel text={"28 Financial and Banking Data"} />
            <CustomLabel text={"Bank Code"} sx={{ marginLeft: '28px' }} />
            <CustomTypography text={bankCode} sx={{ marginLeft: '20px', marginTop: '-3px' }} />
        </Box>
        <Box marginTop="-110px">
            <Box display={'flex'}>
                <CustomLabel text={"Terms of Payment"} />
                <CustomTypography text={terms} sx={{ marginLeft: '20px' }} /> 
                </Box>
                <Box display={'flex'}>
                <CustomLabel text={"Bank Name:"} sx={{ marginTop: "12px" }}/>
                <CustomTypography text={bankName} sx={{ marginLeft: '20px', marginTop: "8px" }} /> 
            </Box>
        </Box>
        <Box display="flex" marginTop="-110px">
            <CustomLabel text={"Branch:"} />
            <CustomTypography text={branch} sx={{ marginLeft: '10px' }} /> 
            <CustomLabel text={"Ref No:"} sx={{ marginLeft: '64px' }}/>
            <CustomTypography text={refNo} sx={{ marginLeft: '10px' }} /> 
        </Box>
    </Box>
  );
}

export default BankData;