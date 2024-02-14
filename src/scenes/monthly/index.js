import React from 'react'
import Header from '../../components/Header';
import { Box, } from "@mui/material";
import  cover from "../../images/CusDecNew.png";

function Monthly() {

  return (
    <>
    <Box m="1rem 1rem">
      <Header title="CusDec Preview"/>
    </Box>

    <Box  m="0.8rem">
        <Box
        sx={{
            backgroundImage:`url(${cover})`,
            backgroundRepeat: "no-repeat",
            height: '949px',
            width: '1019px'
          }}>

        </Box>
    </Box>


  </>
);

}

export default Monthly