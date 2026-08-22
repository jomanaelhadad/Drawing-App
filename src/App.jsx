
import Canvas from './Components/Canvas'
import Toolbar from  './Components/Toolbar'
import {useState} from "react"; 

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

  const [brushSize, setBrushSize ] = useState(5);
  const [ color, setColor ] = useState("black"); 
  return (
    <div>
      <h1>Drawing App</h1>

         <Canvas
         brushSize={brushSize}
         color={color}
         /> 

        <Toolbar
        color={color}
        setColor={setColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
        /> 

    </div>
  );
}

export default App
