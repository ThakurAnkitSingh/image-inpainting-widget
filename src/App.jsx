// src/App.jsx
import { useState } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import ImageUpload from "./components/ImageUpload";
import CanvasWidget from "./components/CanvasWidget";
import ImageDisplay from "./components/ImageDisplay";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);

  const handleUpload = (image) => {
    setUploadedImage(image);
  };

  const handleSaveMask = (maskDataUrl) => {
    setMaskImage(maskDataUrl);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Image Inpainting Widget
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <ImageUpload onUpload={handleUpload} />
        </Box>

        {uploadedImage && (
          <Box sx={{ mb: 4 }}>
            <CanvasWidget image={uploadedImage} onSaveMask={handleSaveMask} />
          </Box>
        )}

        {uploadedImage && maskImage && (
          <Box sx={{ mb: 4 }}>
            <ImageDisplay original={uploadedImage} mask={maskImage} />
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default App;
