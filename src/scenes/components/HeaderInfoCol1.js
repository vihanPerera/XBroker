import React from 'react';
import { Grid } from "@mui/material";
import Entity from '../components/Entity';
import RowCard from '../components/RowCard';
import Voyage from '../components/Voyage';
import Mode from '../components/Mode';
import CustomFlexCard from '../components/CustomFlexCard';
import CommonCard from '../components/CommonCard';

function HeaderInfoCol1() {
  return (
    <Grid item xs={5.5}>
        <Grid item xs={12}>
            <Entity minHeight={'164px'} margin={'170px'} border={true} header={"2 Exporter"} value={"1908765436789"} company={"SHANGHAI BERLIN ELECTRICAL APPLIANCE CO LTD"} address={"ADDRESS NO: 4, HANGANAN ROAD, NO.8118 ZHUANGHANG TOWN, FENGXIAN DISTRICT, SHANGHAI, CHINA"}/>
        </Grid>
        <Grid item xs={12}>
            <Entity minHeight={'148px'} margin={'160px'} border={true} header={"8 Consingee"} value={"1192765243789"} company={"FOUNDATION GARMENT PVT LTD"} address={"35, BALAPOKUNA RD, COL 05, LAX 28/02/2026, EREG COMPLTD"}/>
        </Grid>
        <Grid item xs={12}>
            <Entity minHeight={'114px'} margin={'70px'} border={true} header={"14 Declarant Representative"} value={"1908765436789"} company={"SHANGHAI BERLIN ELECTRICAL APPLIANCE CO LTD"} address={"ADDRESS NO: 4, HANGANAN ROAD, NO.8118 ZHUANGHANG TOWN, FENGXIAN DISTRICT, SHANGHAI, CHINA"}/>
        </Grid>
        <Grid container>
            <Grid item xs={10}>
                <RowCard header={'18 Vessel/Flight'} value1={'OOCL GENOA'} value2={'34'} minHeight={'58px'} width={'340px'}/>
            </Grid>
            <Grid item xs={2}>
                <CommonCard header={'19 Ctr.'} value={'No'} minHeight={'58px'} textAlign={'left'} borderBottom={true} borderRight={true} marginTop={'0px'} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <Voyage header={'21 Voyage No./Date'} voyageNo={'065W'} date={'08/09/2023'} value={' '}/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={3}>
                <Mode header={'25 Mode Trans.'} body={'at Border'} value={'1'} marginTop={'1px'}/>
            </Grid>
            <Grid item xs={3}>
                <Mode header={'26 Inland Mode'} body={'Transport'} value={' '} marginTop={'3px'}/>
            </Grid>
            <Grid item xs={6}>
                <CustomFlexCard header={'27 Place of Loading/Discarging'} value1={'CNSHA'} value2={'SHANGHAI'} minHeight={'60px'} margin={'4px'} borderRight={true} borderBottom={true}/>
            </Grid>
         </Grid>
        <Grid container>
            <Grid item xs={6}>
                <CustomFlexCard header={'29 Office of Entry/Exit'} value1={'VLCL LCL'} value2={'Cargo Verification'} minHeight={'72px'} margin={'8px'} sx={{ marginTop: '8px' }} borderRight={true}/>
            </Grid>
            <Grid item xs={6}>
                <CommonCard header={'30 Location of Goods'} value={'SLPA'} minHeight={'72px'} textAlign={'left'} borderRight={true} marginTop={'8px'} />
            </Grid>
        </Grid>
     </Grid>
  );
}

export default HeaderInfoCol1;