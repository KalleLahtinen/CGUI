import React, { useRef, useEffect } from 'react';
import './shapeStyles.css';

function BouncingShapes() {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const rectangle = useRef({
    x: 100,
    y: 100,
    width: 120,
    height: 80,
    xSpeed: 2,
    ySpeed: 2,
    rotation: 0, // Rotation in degrees
  });

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

    // Save the untransformed context
    ctx.save();
    // Move to the center of the rectangle
    ctx.translate(rectangle.current.x + rectangle.current.width / 2, rectangle.current.y + rectangle.current.height / 2);
    // Rotate
    ctx.rotate((rectangle.current.rotation * Math.PI) / 180);
    // Draw rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(-rectangle.current.width / 2, -rectangle.current.height / 2, rectangle.current.width, rectangle.current.height);
    // Restore the context to its untranslated/unrotated state
    ctx.restore();
  };

  const update = (ctx) => {
    // Update rectangle position
    rectangle.current.x += rectangle.current.xSpeed;
    rectangle.current.y += rectangle.current.ySpeed;

    // Bounce off the walls
    if (rectangle.current.x + rectangle.current.width > ctx.canvas.width || rectangle.current.x < 0) {
      rectangle.current.xSpeed *= -1;
      rectangle.current.rotation += 15; // Change rotation on bounce
    }
    if (rectangle.current.y + rectangle.current.height > ctx.canvas.height || rectangle.current.y < 0) {
      rectangle.current.ySpeed *= -1;
      rectangle.current.rotation += 15; // Change rotation on bounce
    }

    // Ensure rotation stays within 0-360 degrees
    rectangle.current.rotation = rectangle.current.rotation % 360;
  };

  const animate = (ctx) => {
    update(ctx);
    draw(ctx);
    requestRef.current = requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    animate(context);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="BouncingShapes">
      <header className="BouncingShapes-header">
        <canvas ref={canvasRef} />
      </header>
    </div>
  );
}

export default BouncingShapes;
