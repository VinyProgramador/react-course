import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const [redoCircles, setRedoCircles] = useState([]);
  const canvasRef = useRef(null);

  const handleCanvasClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newCircle = { x: offsetX, y: offsetY };
    setCircles([...circles, newCircle]);
    setRedoCircles([]);
  };

  const handleUndo = () => {
    const lastCircle = circles[circles.length - 1];
    setCircles(circles.slice(0, -1));
    setRedoCircles([...redoCircles, lastCircle]);
  };

  const handleRedo = () => {
    const lastRedoCircle = redoCircles[redoCircles.length - 1];
    setCircles([...circles, lastRedoCircle]);
    setRedoCircles(redoCircles.slice(0, -1));
  };

  const drawCircle = (circle) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(circle.x, circle.y, 20, 0, 2 * Math.PI);
    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((circle) => drawCircle(circle));
  }, [circles]);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width={800}
        height={600}
      />
      <div className="buttons">
        <button onClick={handleUndo} disabled={circles.length === 0}>
          Desfazer
        </button>
        <button onClick={handleRedo} disabled={redoCircles.length === 0}>
          Refazer
        </button>
      </div>
    </div>
  );
}

export default App;
