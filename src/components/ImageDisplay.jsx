// src/components/ImageDisplay.jsx
import { Paper, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const ImageDisplay = ({ original, mask }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Original Image
          </Typography>
          <img
            src={original}
            alt="Original"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Mask Image
          </Typography>
          <img
            src={mask}
            alt="Mask"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

ImageDisplay.propTypes = {
  original: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
};

export default ImageDisplay;
