import React from 'react';
import { Box, } from "@mui/material";
import CustomLabel from './CustomLabel';
import CustomTypography from './CustomTypography';

function PackageCard( { header, marks, packages, value, code, type, containerNo, description}) {
  return (
    <Box
        p={1}
        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', minHeight: '232.8px' }}
    >
        <CustomLabel text={header}/>

        <Box marginTop="12px">
            <Box display={'flex'}>
                <CustomLabel text={"Marks and Nos"} />
                <CustomTypography text={marks} sx={{ marginLeft: '20px' }} /> 
            </Box>
            <Box display={'flex'}>
                <CustomLabel text={"of Packages:  -"} sx={{ marginTop: "2px" }}/>
                <CustomTypography text={packages} sx={{ marginLeft: '24px', marginTop: "2px" }} /> 
            </Box>
            <Box display={'flex'}>
                <CustomLabel text={"Number &"} sx={{ marginTop: "12px" }}/>
                <CustomTypography text={value} sx={{ marginLeft: '52px', marginTop: "10px" }} /> 
                <CustomTypography text={code} sx={{ marginLeft: '20px', marginTop: "10px" }} /> 
            </Box>
            <Box display={'flex'}>
                <CustomLabel text={"Kind"} sx={{ marginTop: "2px" }}/>
                <CustomTypography text={type} sx={{ marginLeft: '8.2rem', marginTop: "2px" }} /> 
            </Box>
            <Box display={'flex'}>
                <CustomLabel text={"Containers No(s)"} sx={{ marginTop: "12px" }}/>
                <CustomTypography text={containerNo} sx={{ marginLeft: '8px', marginTop: "10px" }} /> 
            </Box>
            <CustomLabel text={"Description:"} sx={{ marginTop: "12px" }}/>
            <CustomTypography text={description} sx={{ marginTop: "4px" }} />
        </Box>
    </Box>
  );
}

export default PackageCard;