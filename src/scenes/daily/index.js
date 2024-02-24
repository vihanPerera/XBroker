import React from 'react'
import Header from '../../components/Header';
import { Box, Button, useTheme, } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';

function Daily() {

  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "Job ID"},
    {
      field: "name",
      headerName: "Created By",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Created Date",
      headerAlign: "left",
      align: "left",
      flex: 1
    },
    {
      field: "consignor",
      headerName: "Consignor",
      flex: 1,
    },
    {
      field: "consignee",
      headerName: "Consignor",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "asyReference",
      headerName: "Asycuda Reference",
      flex: 1,
    },
    {
      field: "cargoReference",
      headerName: "CargoWise Reference",
      flex: 1,
    },
  ];

  return (
    <>
      <Box m="1rem 1rem" style={{ display: 'flex', justifyContent: 'space-between',}}>
        <Header title="Clearance List" />
        <Button size='small' sx={{backgroundColor: '#FF7518', color: '#ffffff', '&:hover': { backgroundColor: '#FC6F10'}}}>New Job</Button>
      </Box>

    <Box m="0.8rem">
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#FF7518',
            color: '#ffffff',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.main,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backgroundColor: theme.palette.secondary.main,
          },
          "& .MuiCheckbox-root": {
            color: `${theme.palette.secondary.main} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}/>
      </Box>
    </Box>
    </>
  );
}

export default Daily