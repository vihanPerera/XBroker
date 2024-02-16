import React from 'react';
import { Box, Grid, } from "@mui/material";
import HeaderInfoCol1 from '../components/HeaderInfoCol1';
import HeaderInfoCol2 from '../components/HeaderInfoCol2';
import LeftPanel from './LeftPanel';

function HeaderInformation() {
  return (
    <Box  m="0rem 0.8rem 0rem 0.8rem" height="687px" width="1200px" sx={{ border: 6, borderColor: '#0A623A', backgroundColor: "#ffffff", }}>
        <Grid container>
            <Grid item xs={1}>
                <LeftPanel text={'Header Information'} borderBottom={0} minHeight={'676px'} sx={{ alignItems: 'center', }} />
            </Grid>
            <HeaderInfoCol1 />
            <HeaderInfoCol2 />
        </Grid>
  </Box>
  );
}

export default HeaderInformation;