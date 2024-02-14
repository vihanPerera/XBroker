import React from 'react';
import { Grid } from "@mui/material";
import Entity from '../components/Entity';
import Declaration from '../components/Declaration';
import CustomRef from '../components/CustomRef';
import Pages from '../components/Pages';
import CustomFlexCard from '../components/CustomFlexCard';
import CommonCard from '../components/CommonCard';
import Trading from '../components/Trading';
import CityOfLast from '../components/CityOfLast';
import CityCode from '../components/CtyCode';
import Country from '../components/Country';
import DeliveryTerms from '../components/DeliveryTerms';
import BankData from '../components/BankData';
import NatureOf from '../components/NatureOf';
import Currency from '../components/Currency';

function HeaderInfoCol2() {
  return (
    <Grid item xs={5.5}>
        <Grid container>
            <Grid item xs={6}>
                <Declaration value1={'IM'} value2={'7'} value3={' '}/>
            </Grid>
            <Grid item xs={6}>
                <CustomRef value1={'CBB|1'} value2={'Colombo Boi Imports (Sea)'} value3={'S'} value4={'49253'} date={'16/10/2023'} manifest={'SECMB 2023 3085'}/>
            </Grid>
            <Grid item xs={3}>
                <Pages header={'3 Pages'} value1={'1'} value2={'1'}/>
            </Grid>
            <Grid item xs={3}>
                <CommonCard header={'4 List'} value={' '} minHeight={'65px'} textAlign={'left'} borderBottom={true} borderRight={true} borderTop={true} marginTop={'4px'} sx={{ marginTop: '-65px' }}/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={2}>
                <CommonCard header={'5 Items'} value={'1'} minHeight={'58px'} textAlign={'right'} borderBottom={true} marginTop={'0px'}/>
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'6 Total Packages'} value={'7.00'} minHeight={'58px'} textAlign={'right'} borderBottom={true} borderLeft={true} borderRight={true} marginTop={'0px'}/>
            </Grid>
            <Grid item xs={6}>
                <CustomFlexCard header={`7 Declarant's Sequence Number`} value1={'2023'} value2={'B00145509'} minHeight={'58px'} margin={'10px'} borderBottom={true}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Entity minHeight={'90px'} margin={'10px'} border={false} header={"9 Person Responsible for Financial Settlement"} value={"1192765243789"} company={"FOUNDATION GARMENT PVT LTD"} address={"35, BALAPOKUNA RD, COL 05, LAX 28/02/2026, EREG COMPLTD"}/>
        </Grid>
        <Grid container>
            <Grid item xs={5}>
                <CityOfLast header={'10 Cty of Last Cons/First Dst.'} value1={'CN'} value2={' '}/>
            </Grid>
            <Grid item xs={2}>
                <Trading header={'11 Trading'} value={'CN'} body={'Cty.'}/>
            </Grid>
            <Grid item xs={3}>
                <CommonCard header={'12 Value Details'} value={'0'} minHeight={'57.5px'} textAlign={'left'} borderBottom={true} borderRight={true} marginTop={'0px'} />
            </Grid>
            <Grid item xs={2}>
                <CommonCard header={'13 C.A.P.'} value={' '} minHeight={'57.5px'} textAlign={'left'} borderBottom={true} marginTop={'0px'} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Country header={'15 Country of Export'} value={'China'} border={true}/>
            </Grid>
            <Grid item xs={3}>
                <CityCode header={'15 Cty.Ex. Code'} value1={'CN'} value2={' '} border={true}/>
            </Grid>
            <Grid item xs={3}>
                <CityCode header={'17 Cty.Dst. Code'} value1={'LK'} value2={' '} border={false}/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Country header={'16 Country of Origin'} value={'China'} border={true}/>
            </Grid>
            <Grid item xs={6}>
                <Country header={'17 Country of Destination'} value={'Sri Lanka'} border={false}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <DeliveryTerms header={'20 Delivery Terms'} value1={'CIF'} value2={' '}/>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Currency header={'22 Currency & Total Amount Invoiced'} currency={'USD'} totalAmount={'18,200.00'}/>
            </Grid>
            <Grid item xs={4}>
                <CommonCard header={'23 Exchange Rate'} value={'328.8218'} minHeight={'60px'} textAlign={'left'} borderBottom={true} marginTop={'2.8px'} />
            </Grid>
            <Grid item xs={2}>
                <NatureOf header={'24 Nature of'} value1={' '} value2={' '}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <BankData bankCode={'3017'} terms={'70 Open Account'} bankName={'Bank of Ceylon'} branch={'001'} refNo={' '}/>
        </Grid>
    </Grid>
  );
}

export default HeaderInfoCol2;