import React from "react";
import { Box, Button, Card, CardContent } from "@mui/material";

function FooterBtn() {
  const handlePreview = () => {
    const previewUrl = "/product-preview";
    window.open(previewUrl, "_blank");
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Box mx={1}>
              <Button
                sx={{
                  backgroundColor: "#FF7518",
                  color: "#ffffff",
                  width: 250,
                  "&:hover": { backgroundColor: "#FC6F10" },
                }}
              >
                Save
              </Button>
            </Box>
            <Box mx={1}>
              <Button
                sx={{
                  border: "1px solid #FC9A57",
                  color: "#FF7518",
                  width: 250,
                  backgroundColor: "transparent",
                  "&:hover": { borderColor: "#FF7518" },
                }}
              >
                Reset
              </Button>
            </Box>
            <Box mx={1}>
              <Button
                onClick={handlePreview}
                sx={{
                  border: "1px solid #FC9A57",
                  color: "#FF7518",
                  width: 250,
                  backgroundColor: "transparent",
                  "&:hover": { borderColor: "#FF7518" },
                }}
              >
                Preview
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default FooterBtn;
