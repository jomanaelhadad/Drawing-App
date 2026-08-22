import { useState, useRef } from "react";

function Canvas({ color, brushSize }) {

    // using the useRef to access the canvas from the DOM 
    const canvasRef = useRef(null);
    const lastPosition = useRef(null);
    const isDrawing = useRef(false);
    const stokes = useRef([])

    // empty box to have an empty array where we will store our coordinates of our pointer 
    const points = useRef([])



    // HANDLE POINTER DOWN 
    function handlePointerDown(event) {

        // getBoundingClientRect() returns the position and size of an element (canvas) relative to the browser window
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        isDrawing.current = true;

        // take the pointer's position on the whole screen, subtract where the canvas starts, now we know where the pointer is inside the canvas
        // x and y now represent the coordinates of the pointer's x and y 
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        points.current = [[x, y]]

        // I used an object for last position since its easier to access than using an array. 
        //  you can access individual coordinates by using lastPosition.current.x instead of using an index. 
        lastPosition.current = { x, y };
    }

    // HANDLE POINTER UP 
    function handlePointerUp() {
        isDrawing.current = false;
        lastPosition.current = null;
    }

    // HANDLE POINTER MOVE 
    function handlePointerMove(event) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (isDrawing.current) {
            points.current.push([x, y]);


            // draw individual paths like how you would normally draw 
            ctx.beginPath();
            // makes an invisible line without drawing yet to see the pointer's coordinate
            ctx.moveTo(lastPosition.current.x, lastPosition.current.y);
            // add a line between x and y 
            ctx.lineTo(x, y);
            ctx.strokeStyle = color;
            ctx.lineWidth = brushSize * event.pressure;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
            lastPosition.current = { x, y };
        }

    }

    // REDRAW 
    function reDraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
        <canvas
            ref={canvasRef}
            width="800"
            height="500"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >

        </canvas>
    )

}

export default Canvas

