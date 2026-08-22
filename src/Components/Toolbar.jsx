function Toolbar({ color, brushSize, setColor, setBrushSize }) {

    // handling color change using a function 
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    // handling brush size using a function 
    function handleBrushSize(event) {
        setBrushSize(event.target.value)
    }

    return (
        <div>
            <label>Colour: </label>
            <input
                type="color"
                onChange={handleColorChange}></input>

            <br></br>

            <label>Brusher Size: </label>
            <input
                type="range"
                onChange={handleBrushSize}></input>

            <br></br>

            <button>Clear</button>
        </div>
    )
}
export default Toolbar