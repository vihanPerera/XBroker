import React from 'react'
import Header from '../../components/Header';
import { Box, Button, useTheme, Chip, Stack } from "@mui/material";
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
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 120,
    //   renderCell: (params) => (
    //     <Stack direction="row" spacing={1}>
    //       <Chip label={params.value} color={params.value === 'completed' ? 'primary' : 'secondary'} />
    //     </Stack>
    //   ),
    // },
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
      <Box m="20px" style={{ display: 'flex', justifyContent: 'space-between',}}>
        <Header title="Clearance List" />
        <Button size='small' sx={{backgroundColor: '#FF7518', color: '#ffffff', '&:hover': { backgroundColor: '#FC6F10'}}}>New Job</Button>
      </Box>

    <Box m="20px">
      <Box
        m="20px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondary.main,
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