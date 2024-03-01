import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CIVGrid({ rows, columns }) {
  const theme = useTheme();

  return (
    <>
      <Box style={{ marginTop: "0.8rem" }}>
        <Box
          sx={{
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
            // "& .MuiCheckbox-root": {
            //   color: `${theme.palette.secondary.main} !important`,
            // },
            height: "480px",
          }}
        >
          <DataGrid rows={rows} columns={columns} height="160px" />
        </Box>
      </Box>
    </>
  );
}

export default CIVGrid;
