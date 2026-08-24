function Toolbar({ color, brushSize, setColor, setBrushSize, clearCanvas, undoButton, eraserSize, setEraserSize, eraserMode, setEraserMode, setCanvasCleared, canvasCleared, saveCanvas }) {

    // handling color change using a function 
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    // handling brush size using a function 
    function handleBrushSize(event) {
        setBrushSize(Number(event.target.value));
    }

    function handleEraserSize(event) {
        setEraserSize(Number(event.target.value));
    }
    function handleClear() {
        const confirmed = window.confirm("Are you sure to clear the canvas? ")
        if (confirmed) {
            clearCanvas();
            setCanvasCleared(true);
        }
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
                <button onClick={handleClear}> Clear </button>
                <button onClick={undoButton}>Undo</button>
                <button onClick={() => setEraserMode(!eraserMode)}>Eraser</button>

                <button onClick={() => {
                    const imageData = saveCanvas();
                    window.electronAPI.saveFile(imageData);
                }}>
                    Save
                </button>

                <input
                    type="range"
                    value={eraserSize}
                    min="1"
                    max="70"
                    onChange={handleEraserSize}>
                </input>
                <p>{eraserMode ? "Eraser Mode" : "Brush Mode"}</p>
                {canvasCleared && <p> Canvas Cleared </p>}
            </div>
        </div>
    )
}
export default Toolbar
