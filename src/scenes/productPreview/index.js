import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from "@mui/material";
import InvoicePreviewHeader from '../../components/Invoice-Preview-Header';
import InvoicePreviewBody from '../../components/Invoice-Preview-Body';

function ProductPreview() {

  const [lineItems, setLineItems] = useState([]);

  useEffect(() => {
    const storedLineItems = JSON.parse(localStorage.getItem('lineItems') || '[]');
    setLineItems(storedLineItems);
  }, []);

  const handleCloseTab = () => {
    window.close();
  };

  return (
    <>
        <Box m="0.8rem" mb='1rem' mt='1.5rem' display='flex' justifyContent='space-between'>
            <Typography variant='h4' sx={{ fontWeight: 500 }}>Commercial Invoice Preview</Typography>
              <Button
              onClick={handleCloseTab}
                sx={{
                  backgroundColor: "#FF7518",
                  color: "#ffffff",
                  width: 100,
                  "&:hover": { backgroundColor: "#FC6F10" },
                }}
              >
                Back
              </Button>
        </Box>

        <InvoicePreviewHeader />
    
        <Box m="0.8rem" mb='1rem' mt='1.5rem'>
            <Typography variant='h5' sx={{ fontWeight: 500 }}>Line Item Details</Typography>
        </Box>

        {lineItems.map((item, index) => (
            <InvoicePreviewBody key={item.id} data={item} itemNumber={index + 1}/>
        ))}
  
        <Box m="0.8rem" style={{ height: '8px'}}>
        </Box>
  </>
);

}

export default ProductPreview