import React, { useState } from 'react';

const Button = () => {
  const [position, setPosition] = useState({ x: 500, y: 100 });

  const handleMouseMove = (e) => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      style={{ position: 'absolute', top: position.y, left: position.x }}
      onMouseMove={handleMouseMove}
    >
      Não
    </button>
  );
};

export default Button;