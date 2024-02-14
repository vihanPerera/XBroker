import React from 'react'
import Header from '../../components/Header';
import { Box, Grid, } from "@mui/material";
import CusDecHeader from '../components/CusDecHeader';
import LeftPanel from '../components/LeftPanel';
import HeaderInfoCol1 from '../components/HeaderInfoCol1';
import HeaderInfoCol2 from '../components/HeaderInfoCol2';
import PackageCol1 from '../components/PackageCol1';
import PackageCol2 from '../components/PackageCol2';
import DocumentCol1 from '../components/DocumentCol1';
import DocumentCol2 from '../components/DocumentCol2';

function Performance() {
  
  return (
    <>
    <Box m="1rem 1rem">
      <Header title="CusDec Preview"/>
    </Box>

    <CusDecHeader />

    <Box  m="0rem 0.8rem 0rem 0.8rem" height="687px" width="1200px" sx={{ border: 6, borderColor: '#0A623A', backgroundColor: "#ffffff" }}>
      <Grid container>
        <Grid item xs={1}>
          <LeftPanel text={'Header Information'} borderBottom={0} minHeight={'676px'} sx={{ alignItems: 'center', }} />
        </Grid>
        <HeaderInfoCol1 />
        <HeaderInfoCol2 />
      </Grid>
    </Box>
    <Box  m="0rem 0.8rem 0rem 0.8rem" height="233px" width="1200px" sx={{ border: 6, borderTop: 0, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff" }}>
      <Grid container>
        <Grid item xs={1}>
          <LeftPanel text={'31 Packages and Description of Goods'} borderBottom={3} minHeight={'233px'} />
        </Grid>
        <PackageCol1 />
        <PackageCol2 />
      </Grid>
    </Box>
    <Box  m="0rem 0.8rem 0rem 0.8rem" height="172px" width="1200px" sx={{ border: 6, borderTop: 0, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff" }}>
      <Grid container>
        <Grid item xs={1}>
          <LeftPanel text={'44 Add. Info Documents Produced Certificates and Authorization'} minHeight={'172px'} />
        </Grid>
        <DocumentCol1 />
        <DocumentCol2 />
      </Grid>
    </Box>
    
  </>
);

}

export default Performance