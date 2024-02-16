import React from 'react';
import { Box, Grid, } from "@mui/material";
import LeftPanel from './LeftPanel';
import PackageCol1 from './PackageCol1';
import PackageCol2 from './PackageCol2';
import DocumentCol1 from './DocumentCol1';
import DocumentCol2 from './DocumentCol2';

function GoodsDescription() {
  return (
   <>
    <Box  m="0rem 0.8rem 0rem 0.8rem" height="233px" width="1200px" sx={{ border: 6, borderTop: 0, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", }}>
      <Grid container>
        <Grid item xs={1}>
          <LeftPanel text={'31 Packages and Description of Goods'} borderBottom={3} minHeight={'233px'} />
        </Grid>
        <PackageCol1 />
        <PackageCol2 />
      </Grid>
    </Box>
    <Box  m="0rem 0.8rem 0rem 0.8rem" height="172px" width="1200px" sx={{ border: 6, borderTop: 0, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", }}>
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

export default GoodsDescription;