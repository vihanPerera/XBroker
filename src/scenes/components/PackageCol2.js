import React from 'react';
import { Box, Grid } from "@mui/material";
import Item from './Item';
import CustomTypography from './CustomTypography';
import Commodity from './Commodity';
import CityCode from './CtyCode';
import CommonCard from './CommonCard';
import Pocument from './Pocument';


function PackageCol2() {
  return (
    <Grid item xs={5}>
        <Grid container>
            <Grid item xs={3}>
                <Item header={'32 Item No.'} value1={'1'} value2={' '}/>
            </Grid>
            <Grid item xs={5}>
                <Commodity header={'33 Commodity (HS) Code'} value1={'84798990'} value2={'00'} value3={' '}/>
            </Grid>
            <Grid item xs={2}>
                <Box p={1} sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px', }}>
                    <CustomTypography sx={{ marginTop: '16px'}} text={' '}/>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box p={1} sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px', }}>
                    <CustomTypography sx={{ marginTop: '16px'}} text={' '}/>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
                <CityCode header={'34 Cty.Orig.Code'} value1={'CN'} value2={'CN'} border={true}/>
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'35 Gross Mass (Kg)'} value={'2,100.00'} textAlign={'right'} borderBottom={true} borderRight={true} minHeight={'54px'} />
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'36 Preference'} value={'BOIMP'} textAlign={'left'} borderBottom={true} minHeight={'54px'} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
                <Item header={'37 Procedure Code'} value1={'7800'} value2={'921'} />
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'35 Net Mass (Kg)'} value={'1,890.00'} textAlign={'right'} borderBottom={true} borderRight={true} minHeight={'54px'} />
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'39 Quota'} value={'10.00 C'} textAlign={'left'} borderBottom={true} minHeight={'54px'} />
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Pocument value1={'HHSE3082778'} value2={' '}/>
        </Grid>
    </Grid>
  );
}

export default PackageCol2;