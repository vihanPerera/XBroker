import React, { useEffect, useState } from 'react'
import { Box, Grid } from "@mui/material";
import CIVHeader from '../../components/CIVHeader';
import FooterBtn from '../../components/FooterBtn';
import LineItems from '../../components/LineItems';
import LineItemGrid from '../../components/LineItemsGrid';

function Monthly() {

const [lineItems, setLineItems] = useState(() => {
  const savedItems = localStorage.getItem('lineItems');
  return savedItems ? JSON.parse(savedItems) : [];
});

const [editItem, setEditItem] = useState(null);

useEffect(() => {
  localStorage.setItem('lineItems', JSON.stringify(lineItems));
}, [lineItems]);

const handleAddLineItem = (newItem) => {
  const newItemWithId = { ...newItem, id: Date.now() };
  setLineItems([...lineItems, newItemWithId]);
};

const handleEditLineItem = (updatedItem) => {
  setLineItems(lineItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  setEditItem(null);
};

const handleDeleteLineItem = (id) => {
  setLineItems(lineItems.filter(item => item.id !== id));
};

  return (
    <>
      <Box m="0.8rem">
        <Grid container spacing={1}>
          {/* Left Hand Side */}
          <Grid item xs={7.8}>
            <CIVHeader />
            <LineItemGrid lineItems={lineItems} onDelete={handleDeleteLineItem} setEditItem={setEditItem}/>
          </Grid>

          {/* Right Hand Side */}
          <Grid item xs={4.2}>
            <LineItems onAdd={handleAddLineItem} onEdit={handleEditLineItem} editItem={editItem}/>
          </Grid>
        </Grid>
      </Box>

    <Box m="0.8rem">
      <FooterBtn />
    </Box>

    <Box m="0.8rem" style={{ height: '8px'}}>
    </Box>
  </>
);

}

export default Monthly