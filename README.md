# Image Inpainting Widget

This project is an image inpainting widget built using React. It allows users to upload an image, draw masks on it, and download the resulting mask image. The widget includes features such as brush size adjustment, eraser functionality, and the ability to clear the canvas.

## Table of Contents
- [Getting Started](#getting-started)
- [Libraries Used](#libraries-used)
- [Challenges Faced](#challenges-faced)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/image-inpainting-widget.git
   cd image-inpainting-widget
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Libraries Used

This project utilizes the following libraries:

- **React**: A JavaScript library for building user interfaces.
- **react-canvas-draw**: A React component for drawing on a canvas.
- **Material-UI**: A popular React UI framework that provides pre-built components for faster development.
- **PropTypes**: A library for type-checking props in React components.

## Challenges Faced

1. **Eraser Functionality**:
   - **Challenge**: Making the eraser work effectively to remove drawn masks required careful handling of brush colors and sizes.
   - **Solution**: I set the brush color to white when the eraser was active, allowing it to paint over the mask effectively. I also adjusted the brush size for better erasing.

2. **Responsive Design**:
   - **Challenge**: Ensuring that the UI was responsive across different screen sizes was a challenge.
   - **Solution**: I used Material-UI's Grid system to create a responsive layout that adjusts based on the screen size.

## Conclusion

This project demonstrates the ability to create an interactive image inpainting widget using React and Material-UI. The challenges faced during development provided valuable learning experiences in state management and responsive design.

Feel free to contribute or reach out with any questions!
