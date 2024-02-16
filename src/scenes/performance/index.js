import React from 'react'
import Header from '../../components/Header';
import { Box, } from "@mui/material";
import DeclarationPreview from '../components/DeclarationPreview';

function Performance() {
  
  return (
  <>
    <Box m="1rem 1rem">
      <Header title="CusDec Preview"/>
    </Box>

    <DeclarationPreview />
  </>
);

}

export default Performance