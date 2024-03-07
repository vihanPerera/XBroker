import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

function InvoicePreviewHeader() {
  const theme = useTheme();

  return (
    <>
      <Box m="0.8rem">
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={4} md={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    4578019271
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Invoice Number
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2.5}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    Evergreen Line
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Cargo Owner
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    Exw
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Delivery Term
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    100% Advance
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Payment Term
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    CITIBank N.A.
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Bank Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    037
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Bank Code
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2} mt={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    New Delhi
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Branch Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2.5} mt={2}>
                <Box
                  sx={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "8px",
                    marginRight: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    US Dollars
                  </Typography>
                  <Typography
                    mt="4px"
                    sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                  >
                    Currency
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2} mt={2}>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 500, color: "#FF7518" }}
                >
                  28,200.00
                </Typography>
                <Typography
                  mt="4px"
                  sx={{ fontSize: "13px", color: theme.palette.neutral.main }}
                >
                  Total Invoice Amount
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default InvoicePreviewHeader;
