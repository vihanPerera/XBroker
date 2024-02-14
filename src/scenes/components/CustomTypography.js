import React from 'react';
import Typography from '@mui/material/Typography';

function CustomTypography({ text, sx = {} }) {
  return (
    <Typography sx={{ color: '#333333', fontSize: '14px', fontWeight: 600, ...sx }}>
      {text}
    </Typography>
  );
}

export default CustomTypography;