import React from 'react';
import { Grid } from "@mui/material";
import PackageCard from './PackageCard';

function PackageCol1() {
  return (
    <Grid item xs={6}>
        <Grid item xs={12}>
            <PackageCard 
                header={'Marks and numbers - Containers No(s) - Number and kind'}
                marks={'DEHUMIDIFIER (AS PER THE B/L)'}
                packages={'07 PKGS of 10.000 CBM'}
                value={'7.00'}
                code={'PKL'}
                type={'Package'}
                containerNo={' '}
                description={'480L/D DEHUMIDIFIER (07 PCS)'}
            />
        </Grid>
     </Grid>
  );
}

export default PackageCol1;