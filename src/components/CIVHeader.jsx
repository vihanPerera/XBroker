import React from 'react';
import { Grid, TextField, Card, CardContent } from '@mui/material';


function CIVHeader() {

  return (
    <>
        <Card>
            <CardContent>
                <Grid container spacing={1}>
                <Grid item xs={3}>
                  <TextField label="Invoice Number" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Cargo Owner" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Delivery Term" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Payment Term" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Bank Name" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Branch Name" fullWidth size="small" variant='outlined'/>
                 </Grid>
                <Grid item xs={1.6}>
                  <TextField label="Bank Code" fullWidth size="small" variant='outlined'/>
                </Grid>
                <Grid item xs={1.4}>
                  <TextField label="Currency" fullWidth size="small" variant='outlined'/>
                </Grid>
                 <Grid item xs={3}>
                  <TextField label="Total Invoice Amount" fullWidth size="small" variant='outlined'/>
                </Grid>
                </Grid>
            </CardContent>
       </Card>
    </>
  )
}

export default CIVHeader