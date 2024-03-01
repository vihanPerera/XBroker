import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const LineItemsGrid = ({ lineItems, onDelete, setEditItem }) => {
  const columns = [
    {
      field: "hsCode",
      headerName: "HS Code",
      width: 150,
      editable: true,
    },
    {
      field: "lineDescription",
      headerName: "Line Description",
      width: 180,
      editable: true,
    },
    {
      field: "grossWeight",
      headerName: "Gross Weight",
      width: 180,
      editable: true,
    },
    {
      field: "netWeight",
      headerName: "Net Weight",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <IconButton
          variant="contained"
          color="error"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(event) => {
            event.stopPropagation();
            onDelete(params.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const handleRowClick = (params, event) => {
    if (event.target.closest(".MuiIconButton-root")) {
      return;
    }

    const itemToEdit = lineItems.find((item) => item.id === params.id);
    if (itemToEdit) {
      setEditItem(itemToEdit);
    }
  };

  const theme = useTheme();

  return (
    <>
      <Box style={{ marginTop: "0.8rem" }}>
        <Box
          sx={{
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#FF7518",
              color: "#ffffff",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.main,
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
            },
            height: "480px",
          }}
        >
          <DataGrid
            rows={lineItems}
            columns={columns}
            pageSize={5}
            onRowClick={handleRowClick}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </>
  );
};

export default LineItemsGrid;
