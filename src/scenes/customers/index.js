import React, { useState } from 'react'
import { Box, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CIVHeader from '../../components/CIVHeader';
import CIVGrid from '../../components/CIVGrid';
import FooterBtn from '../../components/FooterBtn';
import LineItems from '../../components/LineItems';

function Customers() {

  const initialTextFieldValues = {
    hsCode: '',
    lineDescription: '',
    grossWeight: '',
    netWeight: '',
    invoiceValue: '',
  };

  const [textFieldValues, setTextFieldValues] = useState(initialTextFieldValues);

  const [rows, setRows] = useState([]);

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setTextFieldValues({ ...textFieldValues, [name]: value });
  };

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      ...textFieldValues,
    };
    setRows([...rows, newRow]);

    setTextFieldValues(initialTextFieldValues);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const columns = [
    { field: 'hsCode', headerName: 'HS Code', },
    { field: 'lineDescription', headerName: 'Line Description', flex: 1},
    { field: 'grossWeight', headerName: 'Gross Weight', flex: 1 },
    { field: 'netWeight', headerName: 'Net Weight', flex: 1 },
    { field: 'invoiceValue', headerName: 'Invoice Value', flex: 1},
    
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDeleteRow(params.id)}>
          <DeleteIcon sx={{color: '#FF0000'}}/>
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Box m="0.8rem">
        <Grid container spacing={1}>
          {/* Left Hand Side */}
          <Grid item xs={7.8}>
            <CIVHeader />
            <CIVGrid rows={rows} columns={columns} />
          </Grid>

          {/* Right Hand Side */}
          <Grid item xs={4.2}>
            <LineItems 
            textFieldValues={textFieldValues} 
            handleTextFieldChange={handleTextFieldChange} 
            handleAddRow={handleAddRow} 
            />
          </Grid>
        </Grid>
      </Box>

    <Box m="0.8rem">
      <FooterBtn />
    </Box>

    <Box m="0.8rem" style={{ height: '8px'}}>
    </Box>
  </>
);

}

export default Customers