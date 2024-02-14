import React from 'react';
import { Grid } from "@mui/material";
import CommonCard from './CommonCard';
import UOMCard from './UOMCard';
import VMCard from './VMCard';

function DocumentCol2() {
  return (
    <Grid item xs={5}>
        <Grid container>
            <Grid item xs={6}>
                <UOMCard header={'41 UOM & Qty.1'} uom={'NIU'} qty={'7.00'} borderBottom={true} minHeight={'54px'}/>
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'42 Item Price(FOB/CIF)'} value={'18,200'} textAlign={'right'} borderBottom={true} borderRight={true} minHeight={'54px'} />
            </Grid>
            <Grid item xs={2}>
                <VMCard header={'43 V.M.'} value1={' '} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <UOMCard header={'41 UOM & Qty.2'} uom={' '} qty={' '} borderBottom={true} minHeight={'57.8px'}/>
            </Grid>
            <Grid item xs={3}>
                <CommonCard header={'A.I.'} value={' '} textAlign={'left'} borderBottom={true} borderRight={true} minHeight={'57.8px'} />
            </Grid>
            <Grid item xs={3}>
                <CommonCard header={'45 Adjustment'} value={'1.0000'} textAlign={'left'} borderBottom={true} minHeight={'54px'} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <UOMCard header={'41 UOM & Qty.3'} uom={' '} qty={' '} minHeight={'54px'}/>
            </Grid>
            <Grid item xs={6}>
                <CommonCard header={'46 Statistical Value'} value={'5,984,557'} textAlign={'right'} minHeight={'54px'} />
            </Grid>
        </Grid>
    </Grid>
  );
}

export default DocumentCol2;