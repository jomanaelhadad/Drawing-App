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
  const [color, setColor] = useState("black");

  

  return (
    <div>

      <Toolbar
        clearCanvas={() => canvasRef.current.clearCanvas()}
        undoButton={() => canvasRef.current.undoButton()}
        color={color}
        setColor={setColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
      />

      <Canvas
        ref={canvasRef}
        brushSize={brushSize}
        color={color}
      />
    </div>
  );
}

export default App
