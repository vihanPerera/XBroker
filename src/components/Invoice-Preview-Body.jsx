import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function InvoicePreviewBody({ data }) {
  const theme = useTheme();

  const backgroundColor = theme.palette.mode === "dark" ? "#C6C6C6" : "#333333";

  const color = theme.palette.mode === "dark" ? "#171719" : "#ffffff";

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box m="0.8rem">
        <Card>
          <CardHeader
            action={
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon sx={{ fontSize: "34px" }} />
              </ExpandMore>
            }
            title={
              <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                  <Box display="flex" mt={1}>
                    <Typography sx={{ fontSize: "16px", color: "#36815D" }}>
                      {data.hsCode}
                    </Typography>
                    <Typography sx={{ fontSize: "16px" }}>
                      {`- ${data.lineDescription}`}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: backgroundColor,
                        borderRadius: "4px",
                        padding: "4px",
                        marginLeft: "8px",
                      }}
                    >
                      <Typography sx={{ fontSize: "12px", color: color }}>
                        {data.type}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {data.netWeight}
                  </Typography>
                  <Typography
                    mt="2px"
                    sx={{
                      fontSize: "13px",
                      color: theme.palette.neutral.main,
                    }}
                  >
                    Net Weight
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {data.grossWeight}
                  </Typography>
                  <Typography
                    mt="2px"
                    sx={{
                      fontSize: "13px",
                      color: theme.palette.neutral.main,
                    }}
                  >
                    Gross Weight
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {data.invoiceValue}
                  </Typography>
                  <Typography
                    mt="2px"
                    sx={{
                      fontSize: "13px",
                      color: theme.palette.neutral.main,
                    }}
                  >
                    Invoice Value
                  </Typography>
                </Grid>
              </Grid>
            }
          />

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ paddingTop: "0px" }}>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  backgroundColor: "#c6c6c6",
                  marginTop: "-4px",
                }}
              />
              <Box paddingTop="16px">
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
                        {data.pkgCount}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Package Count
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
                        {data.marksAndNumbers}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Marks and Numbers
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
                        {data.numbersAndKind}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Numbers and Kind
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
                        {data.containers}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Containers
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
                        {data.netWeight}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Net Weight
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
                        {data.grossWeight}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Gross Weight
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
                        {data.qty1}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Qty1
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
                        {data.uom1}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        UOM1
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
                        {data.qty2}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Qty2
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
                        {data.uom2}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        UOM2
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
                        {data.qty3}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Qty3
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
                        {data.uom3}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        UOM3
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
                        {data.invoiceValue}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Invoice Value
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
                        {data.freightCharges}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Freight Charges
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
                        {data.insuranceCharges}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Insurance Charges
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
                        {data.otherCharges}
                      </Typography>
                      <Typography
                        mt="4px"
                        sx={{
                          fontSize: "13px",
                          color: theme.palette.neutral.main,
                        }}
                      >
                        Other Charges
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} md={4} mt={2}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                      {`${data.additionalDetails} ${data.additionalDetails2}`}
                    </Typography>
                    <Typography
                      mt="4px"
                      sx={{
                        fontSize: "13px",
                        color: theme.palette.neutral.main,
                      }}
                    >
                      Additional Details
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}

export default InvoicePreviewBody;
