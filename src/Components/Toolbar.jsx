function Toolbar({ color, brushSize, setColor, setBrushSize, clearCanvas, undoButton }) {

    // handling color change using a function 
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    // handling brush size using a function 
    function handleBrushSize(event) {
        setBrushSize(Number(event.target.value));
    }

    return (
        <div className="toolbar">

            <div className="controls">
            <label>Colour: </label>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}></input>

            <label>Brusher Size: </label>
            <input
                type="range"
                value={brushSize}
                min="1"
                max="70"
                onChange={handleBrushSize}>

                </input>
            </div>
                
        <div className="btns">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={undoButton}>Undo</button>
        <button> Save Drawing </button>
        <button>Layer</button>
        </div>
        </div>
    )
}
export default Toolbar