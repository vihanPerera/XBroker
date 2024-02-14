import React from 'react';
import { Box, Grid, TextField, Card, CardHeader, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CustomCard( { name} ) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Box style={{ borderRadius: '12px', borderLeft: '4px solid #FF7518'}}>
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
          titleTypographyProps={{ variant: 'h6', sx: { color: '#FF7518' } }}
          title={name}
        />

        <CardContent sx={{ marginTop: '-20px', '&:last-child': { paddingBottom: '16px' } }}>
          <Grid container spacing={0.5}>
            <Grid item xs={12}>
              <TextField label={name} fullWidth size="small" variant="outlined" />
            </Grid>
          </Grid>
        </CardContent>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ paddingTop: '0px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField label="Address" multiline rows={3} fullWidth size="small" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Contact" fullWidth size="small" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="TIN" fullWidth size="small" variant="outlined" />
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
      </Card>
    </Box>
    </>
  )
}

export default CustomCard