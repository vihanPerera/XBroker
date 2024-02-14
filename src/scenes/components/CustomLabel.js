import React from 'react';
import Typography from '@mui/material/Typography';

function CustomLabel({ text, sx = {} }) {
  return (
    <Typography sx={{ color: '#0A623A', fontSize: '12px', fontWeight: 600, ...sx }}>
      {text}
    </Typography>
  );
}

export default CustomLabel;