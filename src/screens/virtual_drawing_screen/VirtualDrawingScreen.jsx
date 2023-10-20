import React, { Component } from 'react';
import './virtualdrawingscreen.css';

class VirtualDrawingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
      drawing: false,
      color: 'black',
      brushSize: 2,
      brushType: 'pencil',
      eraserMode: false,
      shapes: [],
      currentShape: null,
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineWidth = this.state.brushSize;
    this.setState({ context });
  }

  handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    this.setState({ drawing: true });
    this.state.context.strokeStyle = this.state.eraserMode ? 'white' : this.state.color;
    this.state.context.beginPath();

    if (this.state.brushType === 'shape') {
      this.setState({ currentShape: { type: this.state.shapeType, x: offsetX, y: offsetY } });
    } else {
      this.state.context.moveTo(offsetX, offsetY);
    }
  };

  handleMouseMove = (e) => {
    if (this.state.drawing) {
      const { offsetX, offsetY } = e.nativeEvent;
      if (this.state.brushType === 'shape') {
        const { currentShape, context } = this.state;
        if (currentShape) {
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          context.strokeStyle = this.state.eraserMode ? 'white' : this.state.color;
          this.drawShape(currentShape, offsetX, offsetY);
        }
      } else {
        this.state.context.lineTo(offsetX, offsetY);
        this.state.context.stroke();
      }
    }
  };

  handleMouseUp = () => {
    if (this.state.brushType === 'shape' && this.state.currentShape) {
      this.state.shapes.push(this.state.currentShape);
      this.setState({ currentShape: null });
    }
    this.state.context.closePath();
    this.setState({ drawing: false });
  };

  handleColorChange = (color) => {
    this.setState({ color });
  };

  handleBrushSizeChange = (size) => {
    this.setState({ brushSize: size });
    this.state.context.lineWidth = size;
  };

  toggleEraserMode = () => {
    this.setState((prevState) => ({ eraserMode: !prevState.eraserMode }));
  };

  clearCanvas = () => {
    this.state.context.clearRect(0, 0, this.state.context.canvas.width, this.state.context.canvas.height);
    this.setState({ shapes: [] });
  };

  undo = () => {
    if (this.state.shapes.length > 0) {
      this.clearCanvas();
      const undoneShapes = this.state.shapes.slice(0, -1);
      undoneShapes.forEach((shape) => this.drawShape(shape, shape.x, shape.y));
      this.setState({ shapes: undoneShapes });
    }
  };

  drawShape = (shape, endX, endY) => {
    const { context } = this.state;
    context.beginPath();
    context.moveTo(shape.x, shape.y);

    if (shape.type === 'rectangle') {
      context.rect(shape.x, shape.y, endX - shape.x, endY - shape.y);
    } else if (shape.type === 'circle') {
      const radius = Math.sqrt(Math.pow(endX - shape.x, 2) + Math.pow(endY - shape.y, 2));
      context.arc(shape.x, shape.y, radius, 0, 2 * Math.PI);
    }

    context.stroke();
    context.closePath();
  };

  setShapeType = (shapeType) => {
    this.setState({ shapeType });
  };

  render() {
    const colorOptions = ['black', 'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown'];
    const brushSizeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shapeOptions = ['rectangle', 'circle'];

    return (
      <div className="canvas-container">
        <canvas
          ref={this.canvasRef}
          width={800}
          height={600}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        ></canvas>
        <div className="controls">
          <label>
            Color:
            <select value={this.state.color} onChange={(e) => this.handleColorChange(e.target.value)}>
              {colorOptions.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
          <label>
            Brush Size:
            <select value={this.state.brushSize} onChange={(e) => this.handleBrushSizeChange(e.target.value)}>
              {brushSizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label>
            Brush Type:
            <select value={this.state.brushType} onChange={(e) => this.setState({ brushType: e.target.value })}>
              <option value="pencil">Pencil</option>
              <option value="shape">Shapes</option>
            </select>
          </label>
          {this.state.brushType === 'shape' && (
            <label>
              Shape Type:
              <select value={this.state.shapeType} onChange={(e) => this.setShapeType(e.target.value)}>
                {shapeOptions.map((shape, index) => (
                  <option key={index} value={shape}>
                    {shape}
                  </option>
                ))}
              </select>
            </label>
          )}
          <button onClick={this.clearCanvas}>Clear Canvas</button>
          <button onClick={this.undo}>Undo</button>
          <button onClick={this.toggleEraserMode}>
            {this.state.eraserMode ? 'Switch to Drawing' : 'Switch to Eraser'}
          </button>
        </div>
      </div>
    );
  }
}

export default VirtualDrawingScreen;
