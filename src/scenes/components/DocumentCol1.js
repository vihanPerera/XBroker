import React from 'react';
import { Grid } from "@mui/material";
import DocumentCard from './DocumentCard';

function DocumentCol1() {
  return (
    <Grid item xs={6}>
        <Grid item xs={12}>
            <DocumentCard value={'7'} licence={'0+0+0+0+0'} dval={' '}/>
        </Grid>
     </Grid>
  );
}

export default DocumentCol1;