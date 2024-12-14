// src/components/CanvasWidget.jsx
import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import PropTypes from 'prop-types';
import { Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';

const CanvasWidget = ({ image, onSaveMask }) => {
  const canvasRef = useRef();
  const [maskDataUrl, setMaskDataUrl] = useState(null);
  const [brushRadius, setBrushRadius] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

  const clearCanvas = () => {
    canvasRef.current.clear();
  };

  const saveMask = () => {
    const mask = canvasRef.current.getSaveData();
    localStorage.setItem("maskData", mask);
    const maskData = canvasRef.current.getDataURL();
    setMaskDataUrl(maskData);
    onSaveMask(maskData);
  };

  const downloadImage = (dataUrl, filename) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  const handleBrushChange = (event) => {
    setBrushRadius(Number(event.target.value));
  };

  const toggleEraser = () => {
    setIsEraser(!isEraser);
  };

  return (
    <div className="p-4">
      {image ? (
        <>
          <CanvasDraw
            ref={canvasRef}
            imgSrc={image}
            brushRadius={isEraser ? 20 : brushRadius}
            lazyRadius={0}
            canvasWidth={400}
            canvasHeight={400}
            className="border rounded-md shadow-md"
            brushColor={isEraser ? "white" : "black"}
          />
          <div className="mt-4">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Brush Size</InputLabel>
                  <Select
                    value={brushRadius}
                    onChange={handleBrushChange}
                    label="Brush Size"
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  onClick={clearCanvas}
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Clear
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  onClick={saveMask}
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Save Mask
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  onClick={toggleEraser}
                  variant="contained"
                  color={isEraser ? "secondary" : "default"}
                  fullWidth
                >
                  {isEraser ? "Brush" : "Eraser"}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  onClick={() => downloadImage(maskDataUrl, "mask-image.png")}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Download Mask Image
                </Button>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Upload an image to draw a mask.</p>
      )}
    </div>
  );
};

CanvasWidget.propTypes = {
  image: PropTypes.string,
  onSaveMask: PropTypes.func,
};

export default CanvasWidget;
