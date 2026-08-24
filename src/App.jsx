import { useState, useRef } from "react";
import Canvas from './Components/Canvas';
import Toolbar from './Components/Toolbar';


// create the packages for the children to receive 
// Brush size 
// color 
// set brusher size 
// set color 
// we will implement this using useState 

function App() {
  // implementing the useStates for the children to receive 
  // we can have any data type inside our useState
  // what goes inside our useState is going to be out initial value
  // e.g the initial default color is black and the initial brush size is 5

  const canvasRef = useRef(null);

  const [brushSize, setBrushSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(5);
  const [eraserMode, setEraserMode] = useState(false);
  const [canvasCleared, setCanvasCleared] = useState(false);
  const [color, setColor] = useState("black");



  return (
    <div>

      <Toolbar
        // functions only the parent can access 
        clearCanvas={() => canvasRef.current.clearCanvas()}
        undoButton={() => canvasRef.current.undoButton()}
        saveCanvas={() => canvasRef.current.saveCanvas()}

        color={color}
        canvasCleared={canvasCleared}
        setCanvasCleared={setCanvasCleared}
        setColor={setColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
        eraserSize={eraserSize}
        setEraserSize={setEraserSize}
        eraserMode={eraserMode}
        setEraserMode={setEraserMode}
      />

      <Canvas

        ref={canvasRef}
        eraserMode={eraserMode}
        brushSize={brushSize}
        eraserSize={eraserSize}
        color={color}
        setCanvasCleared={setCanvasCleared}
      />
    </div>
  );
}

export default App
