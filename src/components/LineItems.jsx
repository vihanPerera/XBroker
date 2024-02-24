import React, { useRef } from 'react';
import { Box, Grid, Card, CardHeader, CardContent, TextField, Button } from "@mui/material";
import CustomInvoiceCard from './CustomInvoiceCard';

const LineItems = ({ textFieldValues, handleTextFieldChange, handleAddRow }) => {

  const hsCode = useRef(null);
  const lineDescription = useRef(null);
  const pkgCount = useRef(null);
  const type = useRef(null);
  const netWeight = useRef(null);
  const grossWeight = useRef(null);

  // Function to handle key press event
  const handleKeyPress = (event, nextRef) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      nextRef.current.focus();
    }
  };

  return (
    <Box style={{ borderRadius: '12px'}}>
    <Card sx={{minHeight: '448px'}}>
      <CardHeader
        titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
        title="Add Line Item Details"
      />
      <CardContent sx={{marginTop: '-20px'}}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <TextField label="HS Code" fullWidth size="small" variant='outlined' name="hsCode" 
            value={textFieldValues.hsCode} 
            onChange={handleTextFieldChange}
            inputRef={hsCode}
            onKeyPress={(event) => handleKeyPress(event, lineDescription)}/>
          </Grid>
          <Grid item xs={3}>
            <TextField label="Pkg Count" fullWidth size="small" variant='outlined'
            inputRef={pkgCount}
            onKeyPress={(event) => handleKeyPress(event, type)}/>
          </Grid>
          <Grid item xs={3}>
            <TextField label="Type" fullWidth size="small" variant='outlined'
            inputRef={type}
            onKeyPress={(event) => handleKeyPress(event, grossWeight)}/>
          </Grid>
          <Grid item xs={3}>
            <TextField label="Containers" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Line Description" multiline rows={2} fullWidth size="small" variant='outlined' name="lineDescription" 
            value={textFieldValues.lineDescription} 
            onChange={handleTextFieldChange}
            inputRef={lineDescription}
            onKeyPress={(event) => handleKeyPress(event, pkgCount)}/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Marks and Numbers" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Numbers and Kind" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '18px'}}>
            <TextField label="Gross Weight" fullWidth size="small" variant='outlined' name="grossWeight"
            value={textFieldValues.grossWeight}
            onChange={handleTextFieldChange}
            inputRef={grossWeight}
            onKeyPress={(event) => handleKeyPress(event, netWeight)}/>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '18px'}}>
            <TextField label="Net Weight" fullWidth size="small" variant='outlined' name="netWeight" 
            value={textFieldValues.netWeight} 
            onChange={handleTextFieldChange}
            inputRef={netWeight}/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="Qty1" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="UOM1" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="Qty2" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="UOM2" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="Qty3" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: '18px'}}>
            <TextField label="UOM3" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '18px'}}>
            <TextField label="Invoice Value" fullWidth size="small" variant='outlined' name="invoiceValue" 
            value={textFieldValues.invoiceValue} 
            onChange={handleTextFieldChange}/>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '18px'}}>
            <TextField label="Freight Charges" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Insurance Charges" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Other Charges" fullWidth size="small" variant='outlined'/>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '14px'}}>
            <CustomInvoiceCard />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button sx={{backgroundColor: '#FF7518', color: '#ffffff', width: 100, '&:hover': { backgroundColor: '#FC6F10'}}} onClick={handleAddRow}>Add</Button>
            <Button sx={{border: '1px solid #FC9A57', marginLeft: '8px', color: '#FF7518', width: 100, backgroundColor: 'transparent', '&:hover': { borderColor: '#FF7518'}}}>Cancel</Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
  );
};

export default LineItems;
