import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import CustomInvoiceCard from "./CustomInvoiceCard";

const initialFormData = {
  hsCode: "",
  pkgCount: "",
  type: "",
  lineDescription: "",
  marksAndNumbers: "",
  numbersAndKind: "",
  containers: "",
  grossWeight: "",
  netWeight: "",
  qty1: "",
  qty2: "",
  qty3: "",
  uom1: "",
  uom2: "",
  uom3: "",
  invoiceValue: "",
  freightCharges: "",
  insuranceCharges: "",
  otherCharges: "",
  additionalDetails: "",
  additionalDetails2: "",
};

const LineItemNew = ({ onAdd, editItem, onEdit }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    } else {
      setFormData(initialFormData);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editItem) {
      onEdit(formData);
    } else {
      onAdd(formData);
    }
    setFormData(initialFormData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <Box style={{ borderRadius: "12px" }}>
      <Card sx={{ minHeight: "448px" }}>
        <CardHeader
          titleTypographyProps={{ variant: "h6", sx: { color: "#FF7518" } }}
          title="Add Line Item Details"
        />
        <CardContent sx={{ marginTop: "-20px" }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label="HS Code"
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="hsCode"
                    value={formData.hsCode}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Pkg Count"
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="pkgCount"
                    value={formData.pkgCount}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Type"
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label="Line Description"
                    multiline
                    rows={3.2}
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="lineDescription"
                    value={formData.lineDescription}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Marks and Numbers"
                fullWidth
                size="small"
                variant="outlined"
                name="marksAndNumbers"
                value={formData.marksAndNumbers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Numbers and Kind"
                fullWidth
                size="small"
                variant="outlined"
                name="numbersAndKind"
                value={formData.numbersAndKind}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Containers"
                fullWidth
                size="small"
                variant="outlined"
                name="containers"
                value={formData.containers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "18px" }}>
              <TextField
                label="Gross Weight"
                fullWidth
                size="small"
                variant="outlined"
                name="grossWeight"
                value={formData.grossWeight}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "18px" }}>
              <TextField
                label="Net Weight"
                fullWidth
                size="small"
                variant="outlined"
                name="netWeight"
                value={formData.netWeight}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="Qty1"
                fullWidth
                size="small"
                variant="outlined"
                name="qty1"
                value={formData.qty1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="UOM1"
                fullWidth
                size="small"
                variant="outlined"
                name="uom1"
                value={formData.uom1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="Qty2"
                fullWidth
                size="small"
                variant="outlined"
                name="qty2"
                value={formData.qty2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="UOM2"
                fullWidth
                size="small"
                variant="outlined"
                name="uom2"
                value={formData.uom2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="Qty3"
                fullWidth
                size="small"
                variant="outlined"
                name="qty3"
                value={formData.qty3}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginTop: "18px" }}>
              <TextField
                label="UOM3"
                fullWidth
                size="small"
                variant="outlined"
                name="uom3"
                value={formData.uom3}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "18px" }}>
              <TextField
                label="Invoice Value"
                fullWidth
                size="small"
                variant="outlined"
                name="invoiceValue"
                value={formData.invoiceValue}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "18px" }}>
              <TextField
                label="Freight Charges"
                fullWidth
                size="small"
                variant="outlined"
                name="freightCharges"
                value={formData.freightCharges}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Insurance Charges"
                fullWidth
                size="small"
                variant="outlined"
                name="insuranceCharges"
                value={formData.insuranceCharges}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Other Charges"
                fullWidth
                size="small"
                variant="outlined"
                name="otherCharges"
                value={formData.otherCharges}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "14px" }}>
              <CustomInvoiceCard
                additionalDetails={formData.additionalDetails}
                additionalDetails2={formData.additionalDetails2}
                onDetailsChange={(e) =>
                  handleChange({
                    target: {
                      name: "additionalDetails",
                      value: e.target.value,
                    },
                  })
                }
                onDetails2Change={(e) =>
                  handleChange({
                    target: {
                      name: "additionalDetails2",
                      value: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button
              sx={{
                backgroundColor: "#FF7518",
                color: "#ffffff",
                width: 100,
                "&:hover": { backgroundColor: "#FC6F10" },
              }}
              onClick={handleSubmit}
            >
              Add
            </Button>
            <Button
              sx={{
                border: "1px solid #FC9A57",
                marginLeft: "8px",
                color: "#FF7518",
                width: 100,
                backgroundColor: "transparent",
                "&:hover": { borderColor: "#FF7518" },
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LineItemNew;
