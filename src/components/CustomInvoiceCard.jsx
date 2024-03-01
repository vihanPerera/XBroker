import React from "react";
import {
  Box,
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
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

function CustomInvoiceCard({
  additionalDetails,
  additionalDetails2,
  onDetailsChange,
  onDetails2Change,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box style={{ borderRadius: "12px" }}>
        <Card>
          <CardHeader
            action={
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            }
            titleTypographyProps={{ variant: "h6", sx: { color: "#FF7518" } }}
            title={"Additional Details"}
          />

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ paddingTop: "0px" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label="Additional Details"
                    multiline
                    rows={2}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={additionalDetails}
                    onChange={onDetailsChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Additional Details 2nd Line"
                    multiline
                    rows={2}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={additionalDetails2}
                    onChange={onDetails2Change}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}

export default CustomInvoiceCard;
