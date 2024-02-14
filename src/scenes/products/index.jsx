import React, { useState } from 'react'
import Header from '../../components/Header';
import { Box, Grid, Card, CardHeader, CardContent, TextField, Select, MenuItem, FormControl, InputLabel, useTheme, Button } from "@mui/material";
import CustomCard from '../../components/CustomCard';

function Products() {

  const theme = useTheme();

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <Box m="1rem 1rem">
      <Header title="Declaration Header"/>
    </Box>

    <Box m="1.5rem 1rem"
      style={{
        backgroundColor: theme.palette.primary.main, 
        boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.24)', 
        backdropFilter: 'blur(2px)',
        borderRadius: '8px',
        paddingBottom: '1rem'
        }}>

      <Box m="0.8rem">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField label="Job ID" fullWidth size="small" variant='outlined'required/>
          </Grid>
          <Grid item xs={3}>
            <TextField label="BL/AWD Number" fullWidth size="small" required/>
          </Grid>
          <Grid item xs={3}>
            <TextField label="CargoWise Reference" fullWidth size="small" required/>
          </Grid>
          <Grid item xs={3}>
            {/* <Select label="Container Mode" fullWidth size="small"/> */}
            <FormControl fullWidth size='small'>
              <InputLabel id="select-label" required>Container Mode</InputLabel>
                <Select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  label="Select Option"
                >
                  <MenuItem value="FCL">FCL</MenuItem>
                  <MenuItem value="LCL">LCL</MenuItem>
                </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box m="0.8rem">
      <Grid container spacing={2}>
          {/* First Card */}
          <Grid item xs={4}>
            <CustomCard name={"Consignor"}/>
          </Grid>

          {/* Second Card */}
          <Grid item xs={4}>
          <CustomCard name={"Consignee"}/>
          </Grid>

          {/* Third Card */}
          <Grid item xs={4}>
            <CustomCard name={"Declarant Representative"}/>
          </Grid>
        </Grid>
      </Box>

      <Box m="0.8rem">
        <Grid container spacing={2}>
          {/* Left Hand Side */}
          <Grid item xs={6}>
              <Card>
                <CardHeader
                  titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
                  title="Shipment Type"
                />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TextField label="Shipment ID" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Shipment Type" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Transport Mode" fullWidth size="small" variant='outlined'/>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

            <Box style={{ marginTop: '0.8rem'}}>
              <Card>
                <CardHeader
                    titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
                    title="Transport Details"
                />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TextField label="Master Bill" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Transporter Name" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Vessel/Flight" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Voyage Number" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Origin" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Destination" fullWidth size="small" variant='outlined'/>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            <Box style={{ borderRadius: '12px', marginTop: '0.8rem'}}>
              <Card>
                <CardHeader
                  titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
                  title="Custom Procedure"
                />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TextField label="Office Code" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="Declaration Type" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField label="Code" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="Reference No" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Office of Entry/Exit" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Location of Goods" fullWidth size="small" variant='outlined'/>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Right Hand Side */}
          <Grid item xs={6}>
            <Box style={{ borderRadius: '12px'}}>
              <Card sx={{minHeight: '508px'}}>
                <CardHeader
                  titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
                  title="Shipment Details"
                />
                <CardContent>
                  <Grid container spacing={1.4}>
                    <Grid item xs={6}>
                      <TextField label="BL/AWD Number" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Delivery Term" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Origin" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="ETD" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="ATD" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Destination" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="ETA" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="ATA" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Good Description" multiline rows={2} fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Total Gross Weight" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Gross Weight UOM" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Total Volume" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Total Volume UOM" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="No of Packages" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Package UOM" fullWidth size="small" variant='outlined'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Package Type" fullWidth size="small" variant='outlined'/>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            <Box style={{ marginTop: '1.5rem'}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Button sx={{backgroundColor: '#FF7518', color: '#ffffff', '&:hover': { backgroundColor: '#FC6F10'}}} fullWidth>Save</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button sx={{border: '1px solid #FC9A57', color: '#FF7518', backgroundColor: 'transparent', '&:hover': { borderColor: '#FF7518'}}} fullWidth>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button sx={{border: '1px solid #FC9A57', color: '#FF7518', backgroundColor: 'transparent', '&:hover': { borderColor: '#FF7518'}}} fullWidth>Reset</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
  );
}

export default Products